import Link from "next/link"
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react"
import { COMPANY_INFO, LEGAL_LINKS, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/data"
import { IconLink } from "@/components/icon-link"

/**
 * Footer component with company information and links
 * 
 * Accessibility features:
 * - Semantic HTML structure
 * - Proper heading hierarchy
 * - ARIA landmarks
 * - External link indicators
 */

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AV</span>
              </div>
              <span className="font-bold text-lg">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <IconLink
                href={SOCIAL_LINKS.linkedin}
                label="LinkedIn"
                icon={Linkedin}
                external
              />
              <IconLink
                href={SOCIAL_LINKS.twitter}
                label="Twitter"
                icon={Twitter}
                external
              />
              <IconLink
                href={SOCIAL_LINKS.github}
                label="GitHub"
                icon={Github}
                external
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
