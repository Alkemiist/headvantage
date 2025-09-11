"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { Card, CardContent } from "@/components/card"
import { ResponsiveImage } from "@/components/responsive-image"
import { IconLink } from "@/components/icon-link"
import { FOUNDERS, BOARD_ADVISORY_SPORTS_MEDIA, BOARD_ADVISORY_BUSINESS, BOARD_ADVISORY_HEALTH_SAFETY } from "@/lib/data"

/**
 * Team grid component displaying team members
 * 
 * Key features:
 * - Responsive grid layout
 * - Staggered animations
 * - LinkedIn integration
 * - Professional card design
 * - Accessibility with proper ARIA labels
 */

interface TeamMemberCardProps {
  member: typeof FOUNDERS[0] | typeof BOARD_ADVISORY_SPORTS_MEDIA[0] | typeof BOARD_ADVISORY_BUSINESS[0] | typeof BOARD_ADVISORY_HEALTH_SAFETY[0]
  index: number
  isFounder?: boolean
}

function TeamMemberCard({ member, index, isFounder = false }: TeamMemberCardProps) {
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
        <CardContent className={`text-center space-y-4 ${isFounder ? 'p-8' : 'p-6'}`}>
          {/* Avatar - larger for founders */}
          <div className={`relative mx-auto rounded-full overflow-hidden ${isFounder ? 'w-32 h-32' : 'w-24 h-24'}`}>
            <ResponsiveImage
              src={member.avatar}
              alt={`${member.name}, ${member.role}`}
              width={isFounder ? 128 : 96}
              height={isFounder ? 128 : 96}
              className="object-cover"
            />
          </div>

          {/* Name and Role */}
          <div className="space-y-1">
            <h3 className={`font-semibold ${isFounder ? 'text-xl' : 'text-lg'}`}>
              {member.name}
            </h3>
            <p className={`text-muted-foreground ${isFounder ? 'text-base' : 'text-sm'}`}>
              {member.role}
            </p>
          </div>

          {/* Bio */}
          {member.bio && (
            <p className={`text-muted-foreground leading-relaxed ${isFounder ? 'text-sm' : 'text-xs'}`}>
              {member.bio}
            </p>
          )}

          {/* LinkedIn Link */}
          {member.linkedinUrl && (
            <div className="pt-2">
              <IconLink
                href={member.linkedinUrl}
                label={`${member.name} on LinkedIn`}
                icon={Linkedin}
                external
                className="text-muted-foreground hover:text-accent"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function TeamGrid() {
  return (
    <SectionWrapper data-testid="team-grid">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading level={1} className="mb-4">
            Meet the Team
          </Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience 
            in real-time systems, AI, and enterprise software.
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Heading level={2} className="mb-4 text-2xl">
              Founders
            </Heading>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The visionary leaders who founded Acme Vision and continue to drive our mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
                isFounder={true}
              />
            ))}
          </div>
        </motion.div>

        {/* Board Advisory Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4 text-2xl">
              Board Advisory
            </Heading>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our experienced advisors and leadership team who guide our strategic direction across different industries.
            </p>
          </div>

          {/* Sports & Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <Heading level={3} className="mb-3 text-xl font-medium text-muted-foreground">
                Sports & Media
              </Heading>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
              {BOARD_ADVISORY_SPORTS_MEDIA.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  isFounder={false}
                />
              ))}
            </div>
          </motion.div>

          {/* Business Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <Heading level={3} className="mb-3 text-xl font-medium text-muted-foreground">
                Business
              </Heading>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {BOARD_ADVISORY_BUSINESS.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    isFounder={false}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Health & Safety Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <Heading level={3} className="mb-3 text-xl font-medium text-muted-foreground">
                Health & Safety
              </Heading>
            </div>
            
            <div className="flex justify-center">
              <div className="max-w-sm">
                {BOARD_ADVISORY_HEALTH_SAFETY.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    isFounder={false}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
