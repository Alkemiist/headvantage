import { TeamMember, Persona, HardwareCallout, SplitCopy } from "./types"

/**
 * Seed data for the application
 * In a real application, this would come from a CMS or database
 */

// Company information
export const COMPANY_INFO = {
  name: "HeadVantage",
  tagline: "Real-time intelligence for the moments that matter.",
  description: "Leading provider of real-time intelligence solutions for critical decision-making moments across industries.",
  founded: "2020",
  location: "San Francisco, CA",
  website: "https://headvantage.com",
  email: "hello@headvantage.com",
  // phone: "+1 (555) 123-4567",
} as const

// Split copy content for the home page
export const SPLIT_COPY: SplitCopy = {
  title: "HeadVantage monetizes immersive first-person content across billions of fans and leagues worldwide.",
  leftContent: "Lightweight, powerful hardware embedded in athlete’s hats and helmets captures unique player points of view, their eye movement, and telemetry data.",
  rightContent: "The Wearable Interactive Network (WIN) platform distributes real-time streaming of high-definition content and biometric data to broadcasters, consumers, teams and leagues, doctors, and betting partners."
}

// Hardware callouts for the hero section
export const HARDWARE_CALLOUTS: HardwareCallout[] = [
  {
    id: "sensor-1",
    title: "Advanced Sensors",
    description: "High-precision sensors capture data with 99.9% accuracy",
    position: { x: 20, y: 30 }
  },
  {
    id: "processor-2", 
    title: "Edge Processing",
    description: "Real-time processing at the edge for instant insights",
    position: { x: 70, y: 25 }
  },
  {
    id: "connectivity-3",
    title: "5G Connectivity", 
    description: "Ultra-fast data transmission with minimal latency",
    position: { x: 25, y: 70 }
  },
  {
    id: "analytics-4",
    title: "AI Analytics",
    description: "Machine learning algorithms for predictive intelligence",
    position: { x: 75, y: 65 }
  }
]

// Personas for the use cases section
export const PERSONAS: Persona[] = [
  {
    id: "broadcast",
    title: "Broadcast",
    description: "HeadVantage delivers real-time POV streams, biometric overlays, and sponsor-ready content that transforms how audiences watch and networks monetize.",
    icon: "Broadcast",
    image: "/images/personas/broadcast.png"
  },
  {
    id: "fans",
    title: "Fans", 
    description: "Fans see the action through the eyes of their favorite players, creating immersive, personalized moments that deepen loyalty and open new revenue streams.",
    icon: "Users",
    image: "/images/personas/fans.png"
  },
  {
    id: "medical",
    title: "Medical",
    description: "Impact sensors and eye-tracking provide sideline teams with concussion insights the moment they matter, enabling faster, safer decisions backed by hard data.",
    icon: "Heart",
    image: "/images/personas/medical.png"
  },
  {
    id: "coaches-players",
    title: "Coaches & Players",
    description: "From live impact alerts to player POV film study, HeadVantage empowers teams with the insights they need to optimize performance while protecting their athletes.",
    icon: "Trophy",
    image: "/images/personas/player.png"
  }
]

// Founders data
export const FOUNDERS: TeamMember[] = [
  {
    id: "Jay-Hedley",
    name: "Jay Hedley",
    role: "CEO & Co-Founder",
    avatar: "/images/team/JayHedley.jpg",
    linkedinUrl: "https://linkedin.com/in/jayhedley",
    bio: "Former VP of Engineering at Google with 15+ years in real-time systems."
  },
  {
    id: "Mike-Sutcliff",
    name: "Mike Sutcliff", 
    role: "Chairman & Founder",
    avatar: "/images/team/MikeSutcliff.png",
    linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
    bio: "Ex-Tesla AI researcher specializing in edge computing and machine learning."
  }
]

// Board Advisory members data organized by category
export const BOARD_ADVISORY_SPORTS_MEDIA: TeamMember[] = [
  {
    id: "Will-McIntosh",
    name: "Will McIntosh",
    role: "EVP, NBC Sports",
    avatar: "/images/team/WillMcintosh.jpeg", 
    linkedinUrl: "https://www.linkedin.com/in/wmcintosh/",
    bio: "Product leader with expertise in B2B SaaS and real-time analytics platforms."
  },
  {
    id: "Valerie-Mosely",
    name: "Valerie Mosely",
    role: "Board, Draft Kings",
    avatar: "/images/team/ValerieMosely.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/valeriemosley/",
    bio: "Design leader focused on creating intuitive user experiences for complex data visualization."
  },
  {
    id: "Eric-Betchel",
    name: "Eric Betchel",
    role: "Owner, IdeaQuest",
    avatar: "/images/team/EricBetchel.jpg",
    linkedinUrl: "https://www.linkedin.com/in/eric-t-bechtel-21a857/",
    bio: "Marketing strategist with expertise in B2B technology and brand positioning."
  },
  {
    id: "Buck-French",
    name: "Buck French",
    role: "Athlete Stock Exchange",
    avatar: "/images/team/BuckFrench.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/buck-french-3402741/",
    bio: "Data scientist specializing in real-time analytics and predictive modeling."
  },
  {
    id: "Tim-Prukop",
    name: "Tim Prukop",
    role: "CEO, ANSRS AI",
    avatar: "/images/team/TimPrukop.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/timprukop/",
    bio: "Customer success expert focused on ensuring client value and long-term partnerships."
  },
  {
    id: "Glenn-Adamo",
    name: "Glenn Adamo",
    role: "Producer, NFL.com",
    avatar: "/images/team/GlennAdamo.jpeg", // Reusing avatar for demo
    linkedinUrl: "https://www.linkedin.com/in/glennadamo/",
    bio: "Former ESPN executive with 12+ years in sports broadcasting and digital media."
  },
  {
    id: "Ray-Thompson",
    name: "Ray Thompson",
    role: "Director, AVID Media Technology",
    avatar: "/images/team/RayThompson.jpeg", // Reusing avatar for demo
    linkedinUrl: "https://www.linkedin.com/in/raymondgthompson/",
    bio: "Technology expert specializing in live streaming and real-time broadcast systems."
  },
  {
    id: "Sam-Jones",
    name: "Sam Jones",
    role: "Retired NFL Athlete",
    avatar: "/images/team/SamJones.jpeg", // Reusing avatar for demo
    linkedinUrl: "https://www.linkedin.com/in/samjones76/",
    bio: "Content strategist with expertise in sports media and fan engagement platforms."
  },
  {
    id: "Tom-Beusse",
    name: "Tom Beusse",
    role: "Founder, TFXB Media Consulting",
    avatar: "/images/team/TomBeusse.png", // Reusing avatar for demo
    linkedinUrl: "https://www.linkedin.com/in/thomas-beusse/",
    bio: "Analytics expert focused on audience engagement and media performance metrics."
  }
]

export const BOARD_ADVISORY_BUSINESS: TeamMember[] = [
  {
    id: "Alexandra-Rossi",
    name: "Alexandra Rossi",
    role: "Strategic Advisor",
    avatar: "/images/team/AlexandraRossi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alxrossi/", 
    bio: "Sales executive with 10+ years in enterprise software and strategic partnerships."
  },
  {
    id: "Tom-Heshion",
    name: "Tom Heshion",
    role: "Fundraising Advisor",
    avatar: "/images/team/TomHeshion.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/thomas-heshion-257b12b/",
    bio: "Operations leader with experience scaling technology companies and managing global teams."
  }
]

export const BOARD_ADVISORY_HEALTH_SAFETY: TeamMember[] = [
  {
    id: "Mark-Novas",
    name: "Mark Novas",
    role: "Chief Medical Officer",
    avatar: "/images/team/MarkNovas.png",
    linkedinUrl: "https://www.linkedin.com/in/mark-novas-md-mba-b322857/",
    bio: "Full-stack engineer with deep experience in distributed systems and real-time data processing."
  }
]

// Legacy export for backward compatibility
export const BOARD_ADVISORY: TeamMember[] = [
  ...BOARD_ADVISORY_SPORTS_MEDIA,
  ...BOARD_ADVISORY_BUSINESS,
  ...BOARD_ADVISORY_HEALTH_SAFETY
]

// Legacy export for backward compatibility
export const TEAM_MEMBERS: TeamMember[] = [...FOUNDERS, ...BOARD_ADVISORY]

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" }
] as const

// Social links
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/acmevision",
  twitter: "https://twitter.com/acmevision",
  github: "https://github.com/acmevision"
} as const

// Legal links for footer
export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" }
] as const
