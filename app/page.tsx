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
                src="/images/technology-showcase.svg"
                alt="Advanced technology and data visualization dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <Heading level={2} className="mb-4">
                Built for the Future
              </Heading>
              <p className="text-muted-foreground leading-relaxed">
                Our platform leverages cutting-edge technology to deliver real-time insights 
                that adapt to your business needs. From edge computing to AI-powered analytics, 
                we&apos;re building the infrastructure for tomorrow&apos;s decision-making.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With 99.9% uptime and sub-millisecond response times, our solution ensures 
                you never miss a critical moment. Trusted by industry leaders across 
                broadcasting, healthcare, and professional sports.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Personas Section */}
      <Personas />

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}