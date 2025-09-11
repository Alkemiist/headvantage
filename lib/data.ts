import { TeamMember, Persona, HardwareCallout, SplitCopy } from "./types"

/**
 * Seed data for the application
 * In a real application, this would come from a CMS or database
 */

// Company information
export const COMPANY_INFO = {
  name: "Acme Vision",
  tagline: "Real-time intelligence for the moments that matter.",
  description: "Leading provider of real-time intelligence solutions for critical decision-making moments across industries.",
  founded: "2020",
  location: "San Francisco, CA",
  website: "https://acmevision.com",
  email: "hello@acmevision.com",
  phone: "+1 (555) 123-4567",
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
    description: "Real-time audience analytics and engagement metrics for live broadcasting, enabling instant content optimization and viewer retention strategies.",
    icon: "Broadcast"
  },
  {
    id: "fans",
    title: "Fans", 
    description: "Personalized fan experiences with live statistics, interactive content, and real-time social engagement during sporting events and entertainment.",
    icon: "Users"
  },
  {
    id: "medical",
    title: "Medical",
    description: "Critical patient monitoring and real-time health data analysis for emergency response and continuous care management.",
    icon: "Heart"
  },
  {
    id: "coaches-players",
    title: "Coaches & Players",
    description: "Performance analytics and real-time coaching insights for athletes, providing instant feedback and strategic adjustments during training and competition.",
    icon: "Trophy"
  }
]

// Founders data
export const FOUNDERS: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    avatar: "/images/team/sarah-chen.svg",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    bio: "Former VP of Engineering at Google with 15+ years in real-time systems."
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez", 
    role: "CTO & Co-Founder",
    avatar: "/images/team/michael-rodriguez.svg",
    linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
    bio: "Ex-Tesla AI researcher specializing in edge computing and machine learning."
  }
]

// Board Advisory members data organized by category
export const BOARD_ADVISORY_SPORTS_MEDIA: TeamMember[] = [
  {
    id: "emma-watson",
    name: "Emma Watson",
    role: "VP of Product",
    avatar: "/images/team/emma-watson.svg", 
    linkedinUrl: "https://linkedin.com/in/emmawatson",
    bio: "Product leader with expertise in B2B SaaS and real-time analytics platforms."
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Head of Design",
    avatar: "/images/team/james-wilson.svg",
    linkedinUrl: "https://linkedin.com/in/jameswilson",
    bio: "Design leader focused on creating intuitive user experiences for complex data visualization."
  },
  {
    id: "maria-garcia",
    name: "Maria Garcia",
    role: "VP of Marketing",
    avatar: "/images/team/maria-garcia.svg",
    linkedinUrl: "https://linkedin.com/in/mariagarcia",
    bio: "Marketing strategist with expertise in B2B technology and brand positioning."
  },
  {
    id: "alex-thompson",
    name: "Alex Thompson",
    role: "Head of Data Science",
    avatar: "/images/team/alex-thompson.svg",
    linkedinUrl: "https://linkedin.com/in/alexthompson",
    bio: "Data scientist specializing in real-time analytics and predictive modeling."
  },
  {
    id: "ryan-davis",
    name: "Ryan Davis",
    role: "Head of Customer Success",
    avatar: "/images/team/ryan-davis.svg",
    linkedinUrl: "https://linkedin.com/in/ryandavis",
    bio: "Customer success expert focused on ensuring client value and long-term partnerships."
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Sports Media Director",
    avatar: "/images/team/sarah-chen.svg", // Reusing avatar for demo
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    bio: "Former ESPN executive with 12+ years in sports broadcasting and digital media."
  },
  {
    id: "mike-chen",
    name: "Mike Chen",
    role: "Broadcast Technology Lead",
    avatar: "/images/team/michael-rodriguez.svg", // Reusing avatar for demo
    linkedinUrl: "https://linkedin.com/in/mikechen",
    bio: "Technology expert specializing in live streaming and real-time broadcast systems."
  },
  {
    id: "jessica-martinez",
    name: "Jessica Martinez",
    role: "Content Strategy Director",
    avatar: "/images/team/emma-watson.svg", // Reusing avatar for demo
    linkedinUrl: "https://linkedin.com/in/jessicamartinez",
    bio: "Content strategist with expertise in sports media and fan engagement platforms."
  },
  {
    id: "robert-taylor",
    name: "Robert Taylor",
    role: "Media Analytics Specialist",
    avatar: "/images/team/david-kim.svg", // Reusing avatar for demo
    linkedinUrl: "https://linkedin.com/in/roberttaylor",
    bio: "Analytics expert focused on audience engagement and media performance metrics."
  }
]

export const BOARD_ADVISORY_BUSINESS: TeamMember[] = [
  {
    id: "lisa-patel",
    name: "Lisa Patel",
    role: "VP of Sales",
    avatar: "/images/team/lisa-patel.svg",
    linkedinUrl: "https://linkedin.com/in/lisapatel", 
    bio: "Sales executive with 10+ years in enterprise software and strategic partnerships."
  },
  {
    id: "sophie-martin",
    name: "Sophie Martin",
    role: "VP of Operations",
    avatar: "/images/team/sophie-martin.svg",
    linkedinUrl: "https://linkedin.com/in/sophiemartin",
    bio: "Operations leader with experience scaling technology companies and managing global teams."
  }
]

export const BOARD_ADVISORY_HEALTH_SAFETY: TeamMember[] = [
  {
    id: "david-kim",
    name: "David Kim",
    role: "Head of Engineering",
    avatar: "/images/team/david-kim.svg",
    linkedinUrl: "https://linkedin.com/in/davidkim",
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
  { label: "Team", href: "/team" },
  { label: "Contact", href: "#contact" }
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
