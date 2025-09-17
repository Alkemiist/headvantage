import { Metadata } from "next"
import { SectionWrapper } from "@/components/section-wrapper"
import { Heading } from "@/components/heading"
import { COMPANY_INFO } from "@/lib/data"

export const metadata: Metadata = {
  title: "Cookie Policy | HeadVantage",
  description: "Cookie policy for HeadVantage - information about how we use cookies and similar technologies on our website.",
  robots: "index, follow",
}

export default function CookiePolicyPage() {
  return (
    <SectionWrapper className="py-16">
      <div className="max-w-4xl mx-auto">
        <Heading level={1} className="mb-8">
          Cookie Policy
        </Heading>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
            </p>
            <p>
              This Cookie Policy explains how {COMPANY_INFO.name} uses cookies and similar technologies when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To ensure our website functions properly</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze how our website is used</li>
              <li>To improve our website&apos;s performance and user experience</li>
              <li>To provide personalized content and advertisements</li>
              <li>To integrate with social media platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-medium mb-3">3.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
            </p>

            <h3 className="text-xl font-medium mb-3">3.2 Performance Cookies</h3>
            <p className="mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
            </p>

            <h3 className="text-xl font-medium mb-3">3.3 Functionality Cookies</h3>
            <p className="mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.
            </p>

            <h3 className="text-xl font-medium mb-3">3.4 Targeting Cookies</h3>
            <p className="mb-4">
              These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">
              We may also use third-party cookies from trusted partners to help us analyze how our website is used and to provide you with relevant advertisements. These third parties may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics - for website analytics</li>
              <li>Social media platforms - for social sharing features</li>
              <li>Advertising networks - for targeted advertising</li>
              <li>Customer support tools - for live chat functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookie Duration</h2>
            <p className="mb-4">Cookies can be either:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Session cookies:</strong> These are temporary cookies that expire when you close your browser</li>
              <li><strong>Persistent cookies:</strong> These remain on your device for a set period or until you delete them</li>
            </ul>
            <p>
              The duration of persistent cookies varies depending on their purpose. Most cookies we use expire within 30 days to 2 years.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You have several options for managing cookies:
            </p>
            
            <h3 className="text-xl font-medium mb-3">6.1 Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, this may affect the functionality of our website.
            </p>

            <h3 className="text-xl font-medium mb-3">6.2 Cookie Consent Banner</h3>
            <p className="mb-4">
              When you first visit our website, you may see a cookie consent banner. You can use this to accept or decline non-essential cookies. You can change your preferences at any time by clicking the cookie settings link in our footer.
            </p>

            <h3 className="text-xl font-medium mb-3">6.3 Opt-Out Links</h3>
            <p className="mb-4">
              For certain third-party cookies, we provide direct opt-out links:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook Ad Preferences</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Mobile Devices</h2>
            <p className="mb-4">
              If you access our website from a mobile device, you may not be able to control cookies through your browser settings. However, you can usually control cookies through your device&apos;s privacy settings or by using the cookie consent options we provide on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. More Information</h2>
            <p className="mb-4">
              For more information about cookies and how they work, you can visit:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies</a></li>
              <li><a href="https://www.cookiepedia.co.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookiepedia</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p><strong>Email:</strong> {COMPANY_INFO.email}</p>
              <p><strong>Company:</strong> {COMPANY_INFO.name}</p>
              <p><strong>Address:</strong> {COMPANY_INFO.location}</p>
            </div>
          </section>
        </div>
      </div>
    </SectionWrapper>
  )
}
