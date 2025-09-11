import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 * This is a fundamental concept in modern CSS-in-JS libraries
 * 
 * Why we need this:
 * - clsx() handles conditional classes and arrays
 * - twMerge() handles Tailwind class conflicts (e.g., "p-2 p-4" becomes "p-4")
 * - Together they create a robust class merging system
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string for display
 * This follows the Intl.DateTimeFormat API for internationalization
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

/**
 * Generate a slug from a string
 * Useful for creating URL-friendly identifiers
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
}

/**
 * Debounce function for performance optimization
 * Prevents excessive function calls during rapid events (like typing)
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Check if the user prefers reduced motion
 * Important for accessibility compliance
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Generate a random ID for form elements
 * Useful for connecting labels to inputs for accessibility
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}
