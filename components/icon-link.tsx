import Link from "next/link"
import { cn } from "@/lib/utils"
import { IconLinkProps } from "@/lib/types"

/**
 * Icon link component for social links and external navigation
 * 
 * Accessibility features:
 * - Proper ARIA labels for screen readers
 * - External link indicators
 * - Keyboard navigation support
 * - Security attributes for external links
 */

export function IconLink({ 
  href, 
  label, 
  icon: Icon, 
  external = false,
  className,
  ...props 
}: IconLinkProps) {
  const linkProps = external 
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${label} (opens in new tab)`
      }
    : {
        "aria-label": label
      }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "text-muted-foreground hover:text-foreground hover-purple-glow",
        "h-10 w-10",
        className
      )}
      {...linkProps}
      {...props}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}
