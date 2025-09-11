"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button component with multiple variants and sizes
 * 
 * This demonstrates several important React concepts:
 * 1. Forwarding refs with React.forwardRef
 * 2. Polymorphic components (asChild prop)
 * 3. Variant-based styling with class-variance-authority
 * 4. Accessibility with proper ARIA attributes
 */

const buttonVariants = cva(
  // Base styles that apply to all variants
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:bg-accent/90 purple-glow-sm hover-purple-glow",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover-purple-glow",
        ghost: "hover:bg-accent hover:text-accent-foreground hover-purple-glow",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
