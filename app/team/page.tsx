import { Metadata } from "next";
import { TeamGrid } from "@/components/sections/team-grid";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { FOUNDERS, BOARD_ADVISORY_SPORTS_MEDIA, BOARD_ADVISORY_BUSINESS, BOARD_ADVISORY_HEALTH_SAFETY } from "@/lib/data";

/**
 * Team page - Meet the Team
 * 
 * This page demonstrates:
 * - Team member grid with responsive layout
 * - LinkedIn integration
 * - Structured data for SEO
 * - Professional card design
 * - Accessibility with proper ARIA labels
 */

// Generate page-specific metadata
export const metadata: Metadata = generateSEOMetadata({
  title: "Meet the Team",
  description: "Meet the talented team behind Acme Vision. Our diverse group of experts brings together decades of experience in real-time systems, AI, and enterprise software.",
  keywords: [
    "team",
    "leadership",
    "about us",
    "company culture",
    "real-time intelligence team"
  ],
  image: "/images/og-team.svg",
});

export default function TeamPage() {
  // Generate structured data for team members
  const allTeamMembers = [
    ...FOUNDERS, 
    ...BOARD_ADVISORY_SPORTS_MEDIA, 
    ...BOARD_ADVISORY_BUSINESS, 
    ...BOARD_ADVISORY_HEALTH_SAFETY
  ];
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Acme Vision",
    employee: allTeamMembers.map(member => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      url: member.linkedinUrl,
      image: member.avatar,
      worksFor: {
        "@type": "Organization",
        name: "Acme Vision"
      }
    }))
  };

  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamStructuredData),
        }}
      />
      
      {/* Team Grid */}
      <TeamGrid />
    </>
  );
}
