import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

/**
 * Contact form API route
 * 
 * This demonstrates:
 * - API route handling in Next.js App Router
 * - Request validation with Zod
 * - Rate limiting (basic implementation)
 * - Honeypot spam protection
 * - Error handling and responses
 */

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _hp: z.string().optional(), // Honeypot field
})

// Basic rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per window

  const userLimit = rateLimitStore.get(ip)
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (userLimit.count >= maxRequests) {
    return false
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown"
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Too many requests. Please try again later." 
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Check honeypot (spam protection)
    if (validatedData._hp) {
      // Silently reject bot submissions
      return NextResponse.json({ success: true })
    }

    // Send email notification
    if (resend) {
      try {
        console.log("Attempting to send email...")
        console.log("FROM_EMAIL:", process.env.FROM_EMAIL)
        console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL)
        console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
        
        // this is the email that will be sent to the contact email
        const emailData = {
        from: "Headvantage Contact Form <onboarding@resend.dev>", // Testing: use Resend's verified domain
        to: ["pablo@programmingpablo.com"], // Testing: your verified address
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>IP Address:</strong> ${ip}</p>
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
              <h3 style="color: #495057; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${validatedData.message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 14px; color: #6c757d;">
              <p><strong>Next Steps:</strong></p>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Reply directly to this email to respond to ${validatedData.name}</li>
                <li>Add to your CRM system if needed</li>
                <li>Follow up within 24 hours for best results</li>
              </ul>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}` : ''}
Submitted: ${new Date().toLocaleString()}
IP Address: ${ip}

Message:
${validatedData.message}

---
Reply directly to this email to respond to ${validatedData.name}
        `.trim(),
      }

      const emailResult = await resend.emails.send(emailData)
      
      if (emailResult.error) {
        console.error("❌ Email sending failed:", emailResult.error)
        console.error("Error details:", JSON.stringify(emailResult.error, null, 2))
        // Don't fail the request if email fails, but log it
      } else {
        console.log("✅ Email sent successfully:", emailResult.data?.id)
      }
    } catch (emailError) {
        console.error("❌ Email service error:", emailError)
        console.error("Error stack:", emailError instanceof Error ? emailError.stack : 'No stack trace')
        // Continue processing even if email fails
      }
    } else {
      console.log("⚠️ Email service not configured - RESEND_API_KEY not set")
    }

    // Log the submission for debugging
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
      ip,
    })

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll get back to you soon!"
    })

  } catch (error) {
    console.error("Contact form error:", error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          errors: error.issues.map(err => ({
            field: err.path.join("."),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later."
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}
