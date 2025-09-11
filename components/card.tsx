import { cn } from "@/lib/utils"
import { CardProps } from "@/lib/types"

/**
 * Card component for consistent content containers
 * 
 * Design principles:
 * - Subtle elevation with shadows
 * - Rounded corners for modern look
 * - Hover effects for interactivity
 * - Consistent padding and spacing
 */

export function Card({ 
  children, 
  className, 
  hover = false,
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        hover && "transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover-purple-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  )
}
