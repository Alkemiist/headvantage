import { cn } from "@/lib/utils"
import { SectionProps } from "@/lib/types"

/**
 * Section wrapper component for consistent spacing and structure
 * 
 * This provides:
 * - Consistent vertical rhythm
 * - Semantic HTML structure
 * - Accessibility landmarks
 * - Flexible styling options
 */

export function SectionWrapper({ 
  children, 
  className, 
  id,
  "data-testid": testId,
  ...props 
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        className
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </section>
  )
}
