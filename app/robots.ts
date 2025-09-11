import { MetadataRoute } from "next"

/**
 * Robots.txt generation for SEO
 * Tells search engines which pages to crawl and index
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/private/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || "https://acmevision.com"}/sitemap.xml`,
  }
}
