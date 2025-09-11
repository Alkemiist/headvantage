import Image from "next/image"
import { cn } from "@/lib/utils"
import { ResponsiveImageProps } from "@/lib/types"

/**
 * Responsive image component with Next.js optimization
 * 
 * Performance benefits:
 * - Automatic image optimization
 * - Lazy loading by default
 * - Responsive sizing
 * - WebP format when supported
 * - Prevents Cumulative Layout Shift (CLS)
 */

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  ...props
}: ResponsiveImageProps) {
  // Ensure alt text is provided for accessibility
  if (!alt) {
    console.warn("ResponsiveImage: alt text is required for accessibility")
  }

  const imageProps = fill
    ? {
        fill: true,
        className: cn("object-cover", className),
        ...props
      }
    : {
        width: width || 800,
        height: height || 600,
        className: cn("object-cover", className),
        ...props
      }

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      sizes={sizes}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      {...imageProps}
    />
  )
}
