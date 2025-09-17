"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ResponsiveImage } from "@/components/responsive-image"
import { Heading } from "@/components/heading"
import { Container } from "@/components/container"
import { COMPANY_INFO, HARDWARE_CALLOUTS } from "@/lib/data"

/**
 * Hero section with full-width image and callouts
 * 
 * Key features:
 * - Parallax scrolling effect
 * - Interactive hardware callouts
 * - Responsive design
 * - Accessibility with proper focus management
 * - Smooth animations with Framer Motion
 */

interface HardwareCalloutProps {
  callout: typeof HARDWARE_CALLOUTS[0]
  isVisible: boolean
  onToggle: (id: string) => void
}

function HardwareCallout({ callout, isVisible, onToggle }: HardwareCalloutProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "absolute group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-full",
        "transform -translate-x-1/2 -translate-y-1/2"
      )}
      style={{
        left: `${callout.position.x}%`,
        top: `${callout.position.y}%`,
      }}
      onClick={() => onToggle(callout.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle(callout.id)
        }
      }}
      aria-expanded={isVisible}
      aria-describedby={`callout-${callout.id}`}
    >
      {/* Callout dot */}
      <div className="relative">
        <div className="h-4 w-4 bg-accent rounded-full shadow-lg group-hover:scale-125 transition-transform duration-200 purple-glow-sm" />
        <div className="absolute inset-0 h-4 w-4 bg-accent/20 rounded-full animate-ping" />
      </div>

      {/* Tooltip */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-4 shadow-lg min-w-[200px] z-10"
          id={`callout-${callout.id}`}
        >
          <h4 className="font-semibold text-sm mb-1">{callout.title}</h4>
          <p className="text-xs text-muted-foreground">{callout.description}</p>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-border rotate-45" />
        </motion.div>
      )}
    </motion.button>
  )
}

export function Hero() {
  const [visibleCallouts, setVisibleCallouts] = useState<Set<string>>(new Set())
  const [scrollY, setScrollY] = useState(0)

  // Handle parallax effect with throttling for smooth performance
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleCallout = (id: string) => {
    setVisibleCallouts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-[120vh] w-full parallax-container"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <ResponsiveImage
            src="/images/hero-bg.webp"
            alt="Advanced technology and data visualization"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <Heading level={2} className="text-white text-purple-glow">
            HeadVantage puts the Coach and the Fan in the <em>mind</em> of the Athlete unlike ever before.
          </Heading>
          
          {/* <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transform your decision-making with real-time intelligence that adapts to the moment. 
            Our cutting-edge platform delivers instant insights when you need them most.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Button asChild size="lg" className="group w-full sm:w-auto bg-accent hover:bg-accent/90 text-white purple-glow hover-purple-glow">
              <Link href="/team" className="flex items-center justify-center gap-2">
                Meet the Team
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white hover-purple-glow">
              <Link href="#contact" className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Hardware Callouts - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {HARDWARE_CALLOUTS.map((callout) => (
          <HardwareCallout
            key={callout.id}
            callout={callout}
            isVisible={visibleCallouts.has(callout.id)}
            onToggle={toggleCallout}
          />
        ))}
      </div>

    </section>
  )
}
