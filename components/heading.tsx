import { cn } from "@/lib/utils"
import { HeadingProps } from "@/lib/types"

/**
 * Semantic heading component with consistent typography
 * 
 * Why this matters:
 * - Maintains proper heading hierarchy (h1 > h2 > h3, etc.)
 * - Ensures accessibility for screen readers
 * - Provides consistent styling across the app
 * - Uses clamp() for responsive typography
 */

const headingClasses = {
  1: "text-6xl font-bold tracking-tight",
  2: "text-5xl font-bold tracking-tight", 
  3: "text-4xl font-bold tracking-tight",
  4: "text-3xl font-semibold tracking-tight",
  5: "text-2xl font-semibold tracking-tight",
  6: "text-xl font-semibold tracking-tight"
}

export function Heading({ 
  children, 
  level, 
  className,
  "data-testid": testId,
  ...props 
}: HeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  
  return (
    <Tag
      className={cn(
        headingClasses[level],
        "text-foreground",
        className
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </Tag>
  )
}
