import { Metadata } from "next"
import { SectionWrapper } from "@/components/section-wrapper"
import { Heading } from "@/components/heading"

export const metadata: Metadata = {
  title: "Privacy Policy | HeadVantage",
  description: "Privacy policy for HeadVantage - how we collect, use, and protect your personal information.",
  robots: "index, follow",
}

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper className="py-16">
      <div className="max-w-4xl mx-auto">
        <Heading level={1} className="mb-8">
          Privacy Policy
        </Heading>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-muted-foreground mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="mb-4">
              HeadVantage Corporation (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting it through this Privacy Policy.
            </p>
            <p className="mb-4">
              This Privacy Policy governs your access to and use of www.headvantagefx.com, including any content, functionality and services offered on or through www.headvantagefx.com, (the &ldquo;Website&rdquo;), whether as a guest or a registered user.
            </p>
            <p className="mb-4">
              When accessing the Website, the Company will learn certain information about you, both automatically and through voluntary actions you may take, during your visit. This policy applies to information we collect on the Website and in email, text, or other electronic messages between you and the Website.
            </p>
            <p className="mb-6">
              Please read the Privacy Policy carefully before you start to use the Website. By using the Website or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by the Privacy Policy. If you do not want to agree to the Privacy Policy, you must not access or use the Website.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Children Under The Age Of 13</h2>
            <p className="mb-4">
              Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or on or through any of its features/register on the Website, make any purchases through the Website, use any of the interactive or public comment features of this Website or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use.
            </p>
            <p className="mb-4">
              If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at operations@headvantagefx.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect About You</h2>
            <p className="mb-4">
              When you access the Website, the Company will learn certain information about you during your visit.
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-foreground">Information You Provide To Us</h3>
              <p className="mb-4">
                The Website provides various places for users to provide information. We collect information that users provide by filling out forms on the Website, communicating with us via contact forms, responding to surveys, search queries on our search feature, providing comments or other feedback, and providing information when ordering a product or service via the Website.
              </p>
              <p className="mb-4">
                We use information you provide to us to deliver the requested product and/or service, to improve our overall performance, and to provide you with offers, promotions, and information.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-foreground">Information We Collect Through Automatic Data Collection Technology</h3>
              <p className="mb-4">
                As you navigate through our Website, we may use automatic data collection technologies including Google Analytics to collect certain information about your equipment, browsing actions, and patterns. This will generally include information about your location, your traffic pattern through our website, and any communications between your computer and our Website. Among other things, we will collect data about the type of computer you use, your Internet connection, your IP address, your operating system, and your browser type.
              </p>
              <p className="mb-4">
                The information we collect automatically is used for statistical data and will not include personal information. We use this data to improve our Website and our service offerings. To the extent that you voluntarily provide personal information to us, our systems will associate the automatically collected information with your personal information.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Use of Cookies And Pixels</h2>
            <p className="mb-4">
              Similar to other commercial websites, our website utilizes a standard technology called &ldquo;cookies&rdquo; and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.
            </p>
            <p className="mb-4">
              A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a website, that site&apos;s computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies. Each website can send its own cookie to your browser if your browser&apos;s preferences allow it, but (to protect your privacy) your browser only permits a website to access the cookies it has already sent to you, not the cookies sent to you by other sites.
            </p>
            <p className="mb-4">
              The Company reserves the right to use technological equivalents of cookies, including social media pixels. These pixels allow social media sites to track visitors to outside websites so as to tailor advertising messages users see while visiting that social media website. The Company reserves the right to use these pixels in compliance with the policies of the various social media sites.
            </p>
            <p className="mb-4">
              California law requires us to let you know whether we honor &ldquo;Do Not Track&rdquo; requests set by your browser. Unfortunately, there is no industry or legal standard (or easy technological solution) about how to handle these responses. Thus, we don&apos;t currently respond to Do Not Track signals at this time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Third Party Use Of Cookies</h2>
            <p className="mb-4">
              Some content or applications, including advertisements, on the Website are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our website. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different websites and other online services. They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.
            </p>
            <p className="mb-4">
              We do not control these third parties&apos; tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Email Information</h2>
            <p className="mb-4">
              If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received online, mail, and telephone. This also applies when you register for our website, sign up through any of our forms using your email address or make a purchase on this site. For further information see the email policies below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Email Policies</h2>
            <p className="mb-4">
              We are committed to keeping your e-mail address confidential. We do not sell, rent, or lease our subscription lists to third parties, and will not disclose your email address to any third parties except as allowed in the section titled Disclosure of Your Information.
            </p>
            <p className="mb-4">
              We will maintain the information you send via e-mail in accordance with applicable federal law.
            </p>
            <p className="mb-4">
              In compliance with the CAN-SPAM Act, all e-mails sent from our organization will clearly state who the e-mail is from and provide clear information on how to contact the sender. In addition, all e-mail messages will also contain concise information on how to remove yourself from our mailing list so that you receive no further e-mail communication from us.
            </p>
            <p className="mb-4">
              Our emails provide users the opportunity to opt-out of receiving communications from us and our partners by reading the unsubscribe instructions located at the bottom of any e-mail they receive from us at anytime.
            </p>
            <p className="mb-4">
              Users who no longer wish to receive our newsletter or promotional materials may opt-out of receiving these communications by clicking on the unsubscribe link in the e-mail.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. How And Why We Collect Information</h2>
            <p className="mb-4">
              The Company collects your information in order to record and support your participation in the activities you select. If you register to download a book or resources, sign up for our newsletter, and/or purchase a product from us, we collect your information. We use this information to track your preferences and to keep you informed about the products and services you have selected to receive and any related products and/or services. As a visitor to this Website, you can engage in most activities without providing any personal information. It is only when you seek to download resources and/or register for services that you are required to provide information.
            </p>
            <p className="mb-4">
              If you are outside the European Union and opt to receive any free resources, participate in any free training programs, register for a webinar, register for a live event, register for a seminar, or purchase any products sold by the Company on this Website, we will automatically enroll you to receive our free email newsletter. If you do not wish to receive this newsletter, you can unsubscribe anytime. We include an &ldquo;unsubscribe&rdquo; link at the bottom of every email we send. If you ever have trouble unsubscribing, you can send an email to operations@headvantagefx.com requesting to unsubscribe from future emails.
            </p>
            <p className="mb-4">
              If you are in the European Union and opt to receive any free resources, participate in any free training programs, register for a webinar, register for a live event, register for a seminar, or purchase any products sold by the Company on this Website, we will only enroll you to receive our free email newsletter if you affirmatively consent to it. If you do not wish to receive this newsletter, you can unsubscribe anytime. We include an &ldquo;unsubscribe&rdquo; link at the bottom of every email we send. If you ever have trouble unsubscribing, you can send an email to operations@headvantagefx.com requesting to unsubscribe from future emails.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. How Do We Use the Information That You Provide to Us?</h2>
            <p className="mb-4">
              We use personal information for purposes of presenting our Website and its contents to you, providing you with information, providing you with offers for products and services, providing you with information about your subscriptions and products, carrying out any contract between you and the Company, administering our business activities, providing customer service, and making available other items and services to our customers and prospective customers.
            </p>
            <p className="mb-4">
              From time-to-time, we may use the information you provide to us to make you offers to purchase products and services provided by third parties in exchange for a commission to be paid to us by such third parties. Should you opt to take part in such promotions, the third parties will receive your information.
            </p>
            <p className="mb-4">
              From time-to-time, we may use the information you provide to us to display advertisements to you that are tailored to your personal characteristics, interests, and activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Disclosure Of Your Information</h2>
            <p className="mb-4">
              As a general rule, we do not sell, rent, lease or otherwise transfer any information collected whether automatically or through your voluntary action.
            </p>
            <p className="mb-4">
              We may disclose your personal information to our subsidiaries, affiliates, and service providers for the purpose of providing our services to you.
            </p>
            <p className="mb-4">
              We may disclose your personal information to a third party, including a lawyer or collection agency, when necessary to enforce our terms of service or any other agreement between you and the Company.
            </p>
            <p className="mb-4">
              We may provide your information to any successor in interest in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company&apos;s assets and/or business.
            </p>
            <p className="mb-4">
              We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights or when compelled by a court or other governmental entity to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. How Do We Protect Your Information and Secure Information Transmissions?</h2>
            <p className="mb-4">
              We employ commercially reasonable methods to ensure the security of the information you provide to us and the information we collect automatically. This includes using standard security protocols and working only with reputable third-party vendors.
            </p>
            <p className="mb-4">
              Email is not recognized as a secure medium of communication. For this reason, we request that you do not send private information to us by email. However, doing so is allowed, but at your own risk. Some of the information you may enter on our website may be transmitted securely via a secure medium known as Secure Sockets Layer, or SSL. Credit Card information and other sensitive information is never transmitted via email.
            </p>
            <p className="mb-4">
              The Company may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our site, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.
            </p>
            <p className="mb-4">
              For site security purposes and to ensure that this service remains available to all users, the Company uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Policy Changes</h2>
            <p className="mb-4">
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users&apos; personal information, we will notify you by email to the email address specified in your account and/or through a notice on the Website home page. The date the privacy policy was last revised is identified at the bottom of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Visitors&apos; GDPR Rights</h2>
            <p className="mb-4">
              If you are within the European Union, you are entitled to certain information and have certain rights under the General Data Protection Regulation. Those rights include:
            </p>
            <p className="mb-4">
              We will retain the any information you choose to provide to us until the earlier of: (a) you asking us to delete the information, (b) our decision to cease using our existing data providers, or (c) the Company decides that the value in retaining the data is outweighed by the costs of retaining it.
            </p>
            <p className="mb-4">
              You have the right to request access to your data that the Company stores and the rights to either rectify or erase your personal data. You have the right to seek restrictions on the processing of your data. You have the right to object to the processing of your data and the right to the portability of your data.
            </p>
            <p className="mb-4">
              To the extent that you provided consent to the Company&apos;s processing of your personal data, you have the right to withdraw that consent at any time, without affecting the lawfulness of processing based upon consent that occurred prior to your withdrawal of consent.
            </p>
            <p className="mb-4">
              You have the right to lodge a complaint with a supervisory authority that has jurisdiction over issues related to the General Data Protection Regulation.
            </p>
            <p className="mb-4">
              We require only the information that is reasonably required to enter into a contract with you. We will not require you to provide consent for any unnecessary processing as a condition of entering into a contract with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Contact Us</h2>
            <p className="mb-4">
              The Company welcomes your questions or comments regarding the Privacy Policy:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
              <p className="font-semibold">HeadVantage Corporation</p>
              <p>Email: operations@headvantagefx.com</p>
            </div>
          </section>
        </div>
      </div>
    </SectionWrapper>
  )
}
