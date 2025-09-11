"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/lib/data"
import { Button } from "@/components/ui/button"

/**
 * Header component with sticky navigation and mobile menu
 * 
 * Key features:
 * - Sticky positioning with glass morphism effect
 * - Mobile-responsive hamburger menu
 * - Active link highlighting
 * - Accessibility with proper ARIA attributes
 * - Smooth scroll behavior
 */

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/60 backdrop-blur-lg shadow-sm" 
          : "bg-background/40 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold text-xl"
            aria-label="HeadVantage - Home"
          >
            <div className="h-8 w-8 rounded bg-accent flex items-center justify-center purple-glow-sm">
              <Image
                src="/images/logo.png"
                alt="HeadVantage Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <span className="hidden sm:block header-text-enhanced">HeadVantage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent hover-purple-glow header-text-enhanced",
                    isActive ? "active-purple" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-border/30 bg-background/60 backdrop-blur-lg shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive 
                        ? "active-purple bg-accent/10" 
                        : "text-muted-foreground hover:text-accent hover:bg-accent/10 hover-purple-glow"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
