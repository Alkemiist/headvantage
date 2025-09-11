import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

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

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    // 4. Log the submission
    
    // For now, we'll simulate success
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
      ip,
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

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
