/**
 * Type definitions for the application
 * TypeScript types help catch errors at compile time and provide better IDE support
 */

// Contact form data structure
export interface ContactPayload {
  name: string
  email: string
  company?: string
  message: string
  _hp?: string // Honeypot field for spam protection
}

// Team member data structure
export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  linkedinUrl?: string
  bio?: string
}

// Persona data for the use cases section
export interface Persona {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

// Hardware callout data for the hero section
export interface HardwareCallout {
  id: string
  title: string
  description: string
  position: {
    x: number // Percentage from left
    y: number // Percentage from top
  }
}

// Split copy section data
export interface SplitCopy {
  title: string
  leftContent: string
  rightContent: string
}

// SEO metadata structure
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
  twitter?: {
    card?: string
    title?: string
    description?: string
    image?: string
  }
}

// Form validation error structure
export interface FormError {
  field: string
  message: string
}

// API response structure
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  errors?: FormError[]
}

// Navigation item structure
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// Section wrapper props
export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  "data-testid"?: string
}

// Button variant types
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
export type ButtonSize = "sm" | "md" | "lg"

// Icon link props
export interface IconLinkProps {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
  className?: string
}

// Card component props
export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

// Container component props
export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

// Heading component props
export interface HeadingProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  "data-testid"?: string
}

// Responsive image props
export interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  fill?: boolean
}
