import { cn } from "@/lib/utils"
import { ContainerProps } from "@/lib/types"

/**
 * Container component for consistent max-width and padding
 * 
 * This implements responsive design principles:
 * - Mobile-first approach
 * - Consistent spacing across breakpoints
 * - Flexible sizing options
 */

const sizeClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl", 
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-screen-2xl"
}

export function Container({ 
  children, 
  className, 
  size = "2xl" 
}: ContainerProps) {
  return (
    <div 
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}
