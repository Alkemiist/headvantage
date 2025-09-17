
import { SectionWrapper } from "@/components/section-wrapper";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";

export const Video = () => {
  return (
    <SectionWrapper className="py-0">
      <Container>
        <div className="text-center mb-8">
          <Heading level={2} className="mb-4">
            Capturing the Impossible
          </Heading>
        </div>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <video 
            src="/videos/headvantagevideo.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </SectionWrapper>
  )
}