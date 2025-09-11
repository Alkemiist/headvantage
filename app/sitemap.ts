import { MetadataRoute } from "next"
import { generateSitemap } from "@/lib/seo"

/**
 * Sitemap generation for SEO
 * Helps search engines discover and index all pages
 */

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap()
}
