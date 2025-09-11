# Acme Vision - Investor Website

A production-ready, Apple-level sleek investor website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion
- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **Accessibility**: WCAG 2.2 AA compliant with semantic HTML, ARIA attributes, and keyboard navigation
- **Performance**: Optimized for Lighthouse scores ≥95 across all categories
- **SEO Ready**: Complete metadata, Open Graph, Twitter cards, and structured data
- **Dark Mode**: Automatic dark/light mode support with system preferences
- **Form Handling**: Contact form with validation, honeypot protection, and rate limiting

## 📁 Project Structure

```
headvantage/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── team/              # Team page
│   ├── globals.css        # Global styles with design system
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt generation
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── ui/                # Base UI components
│   ├── sections/          # Page sections
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   └── ...                # Other components
├── lib/                   # Utility functions and data
│   ├── data.ts           # Seed data and constants
│   ├── seo.ts            # SEO utilities
│   ├── types.ts          # TypeScript definitions
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    ├── images/           # Image assets
    └── site.webmanifest  # PWA manifest
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Design System

The project uses a comprehensive design system built on CSS custom properties:

- **Typography**: Responsive type scale using `clamp()` for fluid sizing
- **Colors**: Semantic color tokens with dark mode support
- **Spacing**: Consistent spacing scale for vertical rhythm
- **Components**: Reusable components with variant support
- **Animations**: Smooth micro-interactions with Framer Motion

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px - 1919px
- **Ultra Wide**: 1920px+

## ♿ Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels and descriptions for screen readers
- Keyboard navigation support
- Focus management and visible focus indicators
- Skip-to-content link
- Color contrast compliance (WCAG 2.2 AA)
- Reduced motion support

## 🚀 Performance Optimizations

- Next.js Image optimization with lazy loading
- Font display optimization
- CSS and JavaScript tree shaking
- Preconnect to external domains
- Optimized bundle splitting
- Static generation where possible

## 🔍 SEO Features

- Dynamic metadata generation
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for rich snippets
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs

## 📝 Content Management

### Updating Team Members

Edit `lib/data.ts` to update team information:

```typescript
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "unique-id",
    name: "Full Name",
    role: "Job Title", 
    avatar: "/images/team/photo.jpg",
    linkedinUrl: "https://linkedin.com/in/username",
    bio: "Brief bio description"
  }
]
```

### Updating Company Information

Edit `lib/data.ts` to update company details:

```typescript
export const COMPANY_INFO = {
  name: "Your Company Name",
  tagline: "Your compelling tagline",
  description: "Company description",
  // ... other fields
}
```

### Adding New Images

1. Add images to `public/images/`
2. Update image references in components
3. Ensure proper alt text for accessibility
4. Use Next.js Image component for optimization

## 🔧 Configuration

### Environment Variables

Create `.env.local` for environment-specific settings:

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Email Service Integration

The contact form currently logs submissions to the console. To integrate with an email service:

1. Update `app/api/contact/route.ts`
2. Add your email service provider (SendGrid, Resend, etc.)
3. Configure environment variables for API keys

## 🧪 Testing

### Running Tests

```bash
pnpm test
```

### Accessibility Testing

- Use browser dev tools accessibility panel
- Test with keyboard navigation only
- Use screen reader software
- Validate with axe-core browser extension

### Performance Testing

- Run Lighthouse audits
- Test on slow 3G networks
- Use WebPageTest for detailed analysis

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or support, please contact:
- Email: hello@acmevision.com
- LinkedIn: [Company LinkedIn](https://linkedin.com/company/acmevision)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS