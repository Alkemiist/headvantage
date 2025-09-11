import { Metadata } from "next"
import { COMPANY_INFO } from "./data"

/**
 * SEO utility functions
 * Search Engine Optimization is crucial for discoverability
 * 
 * Key concepts:
 * - Metadata: Information about the page that search engines use
 * - Open Graph: Social media sharing optimization
 * - Twitter Cards: Enhanced Twitter sharing
 * - Structured Data: Machine-readable information for rich snippets
 */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://acmevision.com"

/**
 * Generate page metadata
 * This function creates the metadata object that Next.js uses for SEO
 */
export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/images/og-default.jpg",
  type = "website"
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  type?: string
}): Metadata {
  const fullTitle = `${title} | ${COMPANY_INFO.name}`
  const url = `${baseUrl}${path}`
  const imageUrl = `${baseUrl}${image}`

  return {
    title: fullTitle,
    description,
    keywords: [
      "real-time intelligence",
      "data analytics", 
      "edge computing",
      "AI insights",
      "live analytics",
      ...keywords
    ],
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: type as "website" | "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@acmevision",
      site: "@acmevision",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  }
}

/**
 * Generate JSON-LD structured data
 * This helps search engines understand the content structure
 */
export function generateStructuredData({
  type,
  data
}: {
  type: "Organization" | "Website" | "Person"
  data: Record<string, unknown>
}) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  switch (type) {
    case "Organization":
      return {
        ...baseStructuredData,
        name: COMPANY_INFO.name,
        description: COMPANY_INFO.description,
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        foundingDate: COMPANY_INFO.founded,
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: COMPANY_INFO.phone,
          contactType: "customer service",
          email: COMPANY_INFO.email,
        },
        sameAs: [
          "https://linkedin.com/company/acmevision",
          "https://twitter.com/acmevision",
        ],
        ...data,
      }

    case "Website":
      return {
        ...baseStructuredData,
        name: COMPANY_INFO.name,
        description: COMPANY_INFO.description,
        url: baseUrl,
        publisher: {
          "@type": "Organization",
          name: COMPANY_INFO.name,
        },
        ...data,
      }

    case "Person":
      return {
        ...baseStructuredData,
        ...data,
      }

    default:
      return baseStructuredData
  }
}

/**
 * Generate sitemap data
 * Helps search engines discover all pages
 */
export function generateSitemap() {
  const routes = [
    "",
    "/team",
    "/privacy",
    "/terms",
    "/cookies",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}

/**
 * Generate robots.txt content
 * Tells search engines which pages to crawl
 */
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and API routes
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/`
}
