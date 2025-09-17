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
  // For founders, use a horizontal layout
  if (isFounder) {
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
        <Card hover className="w-full">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
              {/* Avatar - left side */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <ResponsiveImage
                    src={member.avatar}
                    alt={`${member.name}, ${member.role}`}
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content - right side */}
              <div className="flex-1 text-center md:text-left">
                {/* Name and Role */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {member.bio || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}
                  </p>
                </div>

                {/* LinkedIn Link */}
                {member.linkedinUrl && (
                  <div className="flex justify-center md:justify-start">
                    <IconLink
                      href={member.linkedinUrl}
                      label={`${member.name} on LinkedIn`}
                      icon={Linkedin}
                      external
                      className="text-muted-foreground hover:text-accent"
                    />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // For non-founders, use the original vertical layout
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
      <Card hover className="h-full w-[300px]">
        <CardContent className="p-6 text-center space-y-4">
          {/* Avatar */}
          <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden">
            <ResponsiveImage
              src={member.avatar}
              alt={`${member.name}, ${member.role}`}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          {/* Name and Role */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {member.role}
            </p>
          </div>

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
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience 
            in real-time systems, AI, and enterprise software.
          </p> */}
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* <div className="text-center mb-8">
            <Heading level={2} className="mb-4 text-2xl">
              Founders
            </Heading>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The visionary leaders who founded Acme Vision and continue to drive our mission forward.
            </p>
          </div> */}
          
          <div className="space-y-8 max-w-6xl mx-auto">
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
