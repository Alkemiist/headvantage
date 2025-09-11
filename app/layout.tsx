import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/data";

// Font configuration - using system fonts as requested
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Root metadata for the application
export const metadata: Metadata = generateSEOMetadata({
  title: "Home",
  description: COMPANY_INFO.description,
  keywords: [
    "real-time intelligence",
    "data analytics",
    "edge computing",
    "AI insights",
    "live analytics",
    "decision making",
    "enterprise software"
  ],
  image: "/images/og-home.svg",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data for the organization
  const organizationStructuredData = generateStructuredData({
    type: "Organization",
    data: {
      name: COMPANY_INFO.name,
      description: COMPANY_INFO.description,
      url: process.env.NEXT_PUBLIC_BASE_URL || "https://acmevision.com",
    }
  });

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="skip-link"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main id="main-content" role="main">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
