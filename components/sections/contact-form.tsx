"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/card"

/**
 * Contact form with validation and submission
 * 
 * Key features:
 * - Form validation with Zod schema
 * - React Hook Form for performance
 * - Honeypot spam protection
 * - Loading states and error handling
 * - Accessibility with proper ARIA attributes
 */

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _hp: z.string().optional(), // Honeypot field
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data._hp) {
      console.log("Bot detected")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionWrapper id="contact" data-testid="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={2} className="mb-4">
            Request a Demo
          </Heading>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your decision-making with real-time intelligence? 
            Let&apos;s discuss how we can help your organization.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("_hp")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name *"
                    {...register("name")}
                    error={errors.name?.message}
                    disabled={isSubmitting}
                    placeholder="Your full name"
                    className='border border-white/16'
                  />

                  <Input
                    label="Email *"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                    disabled={isSubmitting}
                    placeholder="your.email@company.com"
                    className='border border-white/16'
                  />
                </div>

                <Input
                  label="Company"
                  {...register("company")}
                  error={errors.company?.message}
                  disabled={isSubmitting}
                  placeholder="Your company name"
                  className='border border-white/16'
                />

                <Textarea
                  label="Message *"
                  {...register("message")}
                  error={errors.message?.message}
                  disabled={isSubmitting}
                  placeholder="Tell us about your project and how we can help..."
                  rows={5}
                  maxLength={1000}
                  className="resize-none border border-white/16"
                />

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm">Something went wrong. Please try again or contact us directly.</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
