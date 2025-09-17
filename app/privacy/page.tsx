import { Metadata } from "next"
import { SectionWrapper } from "@/components/section-wrapper"
import { Heading } from "@/components/heading"
import { COMPANY_INFO } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy | HeadVantage",
  description: "Privacy policy for HeadVantage - how we collect, use, and protect your personal information.",
  robots: "index, follow",
}

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper className="py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Legal Document Header */}
        <div className="border-b-2 border-gray-300 pb-8 mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              PRIVACY POLICY
            </h1>
            <div className="text-lg text-gray-600 space-y-1">
              <p><strong>{COMPANY_INFO.name}</strong></p>
              <p>Effective Date: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>
        </div>
        
        {/* Legal Document Content */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-12">
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              1. INTRODUCTION
            </h2>
            <div className="ml-4 space-y-4">
              <p className="text-gray-700 leading-7">
                {COMPANY_INFO.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-7">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              2. INFORMATION WE COLLECT
            </h2>
            <div className="ml-4 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Personal Information</h3>
                <p className="mb-4 text-gray-700 leading-7">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                  <li>Register for an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our website</li>
                  <li>Use our services</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Automatically Collected Information</h3>
                <p className="mb-4 text-gray-700 leading-7">
                  We may automatically collect certain information about your device and usage patterns, including:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <div className="ml-4">
              <p className="mb-6 text-gray-700 leading-7">We use the information we collect to:</p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Process transactions and send related information</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              4. INFORMATION SHARING AND DISCLOSURE
            </h2>
            <div className="ml-4">
              <p className="mb-6 text-gray-700 leading-7">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              5. DATA SECURITY
            </h2>
            <div className="ml-4">
              <p className="text-gray-700 leading-7">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              6. YOUR RIGHTS
            </h2>
            <div className="ml-4">
              <p className="mb-6 text-gray-700 leading-7">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              7. COOKIES AND TRACKING TECHNOLOGIES
            </h2>
            <div className="ml-4">
              <p className="text-gray-700 leading-7">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more information, please see our Cookie Policy.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              8. THIRD-PARTY LINKS
            </h2>
            <div className="ml-4">
              <p className="text-gray-700 leading-7">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              9. CHILDREN&apos;S PRIVACY
            </h2>
            <div className="ml-4">
              <p className="text-gray-700 leading-7">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              10. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <div className="ml-4">
              <p className="text-gray-700 leading-7">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of our services after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
              11. CONTACT US
            </h2>
            <div className="ml-4">
              <p className="mb-6 text-gray-700 leading-7">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <div className="space-y-3 text-gray-700">
                  <p><strong className="text-gray-900">Email:</strong> {COMPANY_INFO.email}</p>
                  <p><strong className="text-gray-900">Company:</strong> {COMPANY_INFO.name}</p>
                  <p><strong className="text-gray-900">Address:</strong> {COMPANY_INFO.location}</p>
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
        
        {/* Legal Document Footer */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-500">
            This document was last updated on {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
