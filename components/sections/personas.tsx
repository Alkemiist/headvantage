"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/card"
import { PERSONAS } from "@/lib/data"

/**
 * Personas section showcasing use cases
 * 
 * Key features:
 * - 2x2 grid layout with images
 * - Staggered animations for visual appeal
 * - Hover effects for interactivity
 * - Responsive image display
 */

interface PersonaCardProps {
  persona: typeof PERSONAS[0]
  index: number
}

function PersonaCard({ persona, index }: PersonaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1 // Staggered animation
      }}
      viewport={{ once: true }}
    >
      <Card hover className="h-full overflow-hidden">
        <img
          src={persona.image}
          alt={`${persona.title} persona`}
          width={800}
          height={450}
          className="w-full aspect-video object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${persona.title}:`, persona.image)
            // Fallback to a working image
            e.currentTarget.src = "/images/personas/broadcast-placeholder.svg"
          }}
        />
        
        <CardContent className="p-6 space-y-3">
          <h3 className="text-xl font-semibold">
            {persona.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {persona.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Personas() {
  return (
    <SectionWrapper data-testid="personas-section" className="bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={2} className="mb-4">
            Who We Serve
          </Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our real-time intelligence platform empowers professionals across industries 
            to make critical decisions with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PERSONAS.map((persona, index) => (
            <PersonaCard
              key={persona.id}
              persona={persona}
              index={index}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
