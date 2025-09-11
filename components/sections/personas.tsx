"use client"

import { motion } from "framer-motion"
import { Radio, Users, Heart, Trophy } from "lucide-react"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/card"
import { PERSONAS } from "@/lib/data"

/**
 * Personas section showcasing use cases
 * 
 * Key features:
 * - Responsive grid layout (2x2 on tablet, 4 across on desktop)
 * - Staggered animations for visual appeal
 * - Icon integration with Lucide React
 * - Hover effects for interactivity
 */

const iconMap = {
  Broadcast: Radio,
  Users,
  Heart,
  Trophy,
}

interface PersonaCardProps {
  persona: typeof PERSONAS[0]
  index: number
}

function PersonaCard({ persona, index }: PersonaCardProps) {
  const Icon = iconMap[persona.icon as keyof typeof iconMap]

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
      <Card hover className="h-full">
        <CardContent className="p-6 text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
