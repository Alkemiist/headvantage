import { Hero } from "@/components/sections/hero";
import { SplitCopy } from "@/components/sections/split-copy";
import { Personas } from "@/components/sections/personas";
import { ContactForm } from "@/components/sections/contact-form";
import { ResponsiveImage } from "@/components/responsive-image";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";
import { Heading } from "@/components/heading";

/**
 * Home page - Main landing page
 * 
 * This page demonstrates:
 * - Hero section with parallax and callouts
 * - Split copy section with two-column layout
 * - Personas section with use cases
 * - Image + copy section
 * - Contact form with validation
 * - Responsive design across all breakpoints
 */

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Split Copy Section */}
      <SplitCopy />

      {/* Image + Copy Section */}
      <SectionWrapper data-testid="image-copy-section" className="bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <ResponsiveImage
                src="/images/Helmet800x600.png"
                alt="Advanced technology and data visualization dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 text-left">
              <Heading level={2} className="mb-4">
                The Hardware
              </Heading>
              <p className="text-muted-foreground leading-relaxed">
                Our hardware system combines HD video capture with superior image stability, integrated eye-tracking with gaze 
                overlay, and impact sensors with telemetry data capture. All data flows through our proprietary communication 
                and compression protocol for real-time transmission with minimal latency.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Personas Section */}
      <Personas />

      {/* Hero Placeholder Image Section */}
      <SectionWrapper className="py-0">
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <ResponsiveImage
            src="/images/pilot.webp"
            alt="Hero placeholder image - to be replaced"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
          
          {/* Centered text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <Heading level={2} className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              The Inspiration
            </Heading>
            <p className="text-white/90 text-md sm:text-lg lg:text-xl max-w-4xl leading-relaxed shadow-lg">
              HeadVantage Sports Technology was inspired by the flight experience and technology used to record and train from the vantage point of Air Force fighter pilots.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}