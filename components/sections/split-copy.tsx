"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { SPLIT_COPY } from "@/lib/data"

/**
 * Split copy section with two-column layout
 * 
 * Design principles:
 * - Mobile-first responsive design
 * - Staggered animations for visual interest
 * - Proper typography hierarchy
 * - Accessible content structure
 */

export function SplitCopy() {
  return (
    <SectionWrapper data-testid="split-copy-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heading level={4} className="mb-4">
            {SPLIT_COPY.title}
          </Heading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <h3 className="text-2xl font-semibold mb-6">Why Now?</h3> */}
            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
              {SPLIT_COPY.leftContent}
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <h3 className="text-2xl font-semibold mb-6">What Makes Us Different</h3> */}
            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
              {SPLIT_COPY.rightContent}
            </p>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
