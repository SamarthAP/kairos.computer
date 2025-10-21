import Link from "next/link";

export default function TermsOfService() {
  // Helper function to create links to sections
  const SectionLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} className="text-amber-500 hover:underline">
      {children}
    </a>
  );

  // Reusable Heading components with consistent styling
  const H1 = ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-stone-50 mt-8 first:mt-0">
      {children}
    </h1>
  );
  const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2
      id={id}
      className="text-2xl font-bold mt-10 mb-4 text-stone-50 border-b border-stone-800 pb-2"
    >
      {children}
    </h2>
  );
  const H3 = ({ id, children }: { id?: string; children: React.ReactNode }) => (
    <h3 id={id} className="text-xl font-bold mt-6 mb-3 text-stone-200">
      {children}
    </h3>
  );
  const P = ({
    className,
    ...props
  }: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className={`text-stone-400 mb-4 leading-relaxed ${className || ""}`}
      {...props}
    />
  );
  const LI = ({ children }: { children: React.ReactNode }) => (
    <li className="text-stone-400 mb-2 leading-relaxed">{children}</li>
  );
  const OL = ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>
  );
  const UL = ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
  );
  const Strong = ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-stone-300">{children}</strong>
  );
  const A = ({
    href,
    children,
    target = "_blank",
    rel = "noopener noreferrer",
  }: {
    href: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
  }) => (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-amber-500 hover:underline"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-[family-name:var(--font-geist-mono)]">
      <main className="max-w-4xl mx-auto pt-16 pb-20 px-6 sm:px-8">
        {/* Header */}
        <div className="mb-10 pb-4 border-b border-stone-800">
          <Link href="/" className="text-2xl font-bold text-amber-500">
            KAIROS
          </Link>
        </div>

        {/* Policy Content */}
        <H1>TERMS OF SERVICE</H1>
        <p className="text-stone-500 mb-10">Last updated April 19, 2025</p>

        <H2 id="agreement">AGREEMENT TO OUR LEGAL TERMS</H2>
        <P>
          We are <Strong>Kairos Computer Inc.</Strong> (&apos;
          <Strong>Company</Strong>&apos;, &apos;<Strong>we</Strong>&apos;,
          &apos;<Strong>us</Strong>&apos;, or &apos;<Strong>our</Strong>
          &apos;), a company registered in California, United States at 1628
          Washington Street, San Francisco, CA 94109.
        </P>
        <P>
          We operate the website{" "}
          <A href="https://kairos.computer/">https://kairos.computer/</A> (the
          &apos;<Strong>Site</Strong>&apos;), as well as any other related
          products and services that refer or link to these legal terms (the
          &apos;<Strong>Legal Terms</Strong>&apos;) (collectively, the &apos;
          <Strong>Services</Strong>&apos;).
        </P>
        <P>
          Kairos lets anyone automate repetitive computer tasks - like
          processing invoices or data reconciliation - by simply recording their
          screen and narrating what they&apos;re doing. Kairos then creates an
          AI agent that can perform the task exactly as demonstrated, without
          needing coding or manual setup. It&apos;s like training a co-worker.
        </P>
        <P>
          You can contact us by email at{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A> or by
          mail to 1628 Washington Street, San Francisco, CA 94109, United
          States.
        </P>
        <P>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (&apos;
          <Strong>you</Strong>&apos;), and Kairos Computer Inc., concerning your
          access to and use of the Services. You agree that by accessing the
          Services, you have read, understood, and agreed to be bound by all of
          these Legal Terms.{" "}
          <Strong>
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </Strong>
        </P>
        <P>
          Supplemental terms and conditions or documents that may be posted on
          the Services from time to time are hereby expressly incorporated
          herein by reference. We reserve the right, in our sole discretion, to
          make changes or modifications to these Legal Terms from time to time.
          We will alert you about any changes by updating the &apos;Last
          updated&apos; date of these Legal Terms, and you waive any right to
          receive specific notice of each such change. It is your responsibility
          to periodically review these Legal Terms to stay informed of updates.
          You will be subject to, and will be deemed to have been made aware of
          and to have accepted, the changes in any revised Legal Terms by your
          continued use of the Services after the date such revised Legal Terms
          are posted.
        </P>
        <P>
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services.
        </P>
        <P>
          We recommend that you print a copy of these Legal Terms for your
          records.
        </P>

        <H2 id="toc">TABLE OF CONTENTS</H2>
        <OL>
          <LI>
            <SectionLink href="#services">OUR SERVICES</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#ip">INTELLECTUAL PROPERTY RIGHTS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#userreps">USER REPRESENTATIONS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#userreg">USER REGISTRATION</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#purchases">PURCHASES AND PAYMENT</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#subscriptions">SUBSCRIPTIONS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#sms">SMS/TEXT MESSAGING TERMS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#prohibited">PROHIBITED ACTIVITIES</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#ugc">USER GENERATED CONTRIBUTIONS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#license">CONTRIBUTION LICENSE</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#socialmedia">SOCIAL MEDIA</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#thirdparty">
              THIRD-PARTY WEBSITES AND CONTENT
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#sitemanage">SERVICES MANAGEMENT</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#ppno">PRIVACY POLICY</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#terms">TERM AND TERMINATION</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#modifications">
              MODIFICATIONS AND INTERRUPTIONS
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#law">GOVERNING LAW</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#disputes">DISPUTE RESOLUTION</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#corrections">CORRECTIONS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#disclaimer">DISCLAIMER</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#liability">
              LIMITATIONS OF LIABILITY
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#indemnification">INDEMNIFICATION</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#userdata">USER DATA</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#electronic">
              ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#california">
              CALIFORNIA USERS AND RESIDENTS
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#misc">MISCELLANEOUS</SectionLink>
          </LI>
          <LI>
            <SectionLink href="#contact">CONTACT US</SectionLink>
          </LI>
        </OL>

        {/* --- Section 1 --- */}
        <H2 id="services">1. OUR SERVICES</H2>
        <P>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </P>
        <P>
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </P>

        {/* --- Section 2 --- */}
        <H2 id="ip">2. INTELLECTUAL PROPERTY RIGHTS</H2>
        <H3>Our intellectual property</H3>
        <P>
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the &apos;
          <Strong>Content</Strong>&apos;), as well as the trademarks, service
          marks, and logos contained therein (the &apos;<Strong>Marks</Strong>
          &apos;).
        </P>
        <P>
          Our Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United States and around the world.
        </P>
        <P>
          The Content and Marks are provided in or through the Services &apos;AS
          IS&apos; for your personal, non-commercial use or internal business
          purpose only.
        </P>
        <H3>Your use of our Services</H3>
        <P>
          Subject to your compliance with these Legal Terms, including the{" "}
          <SectionLink href="#prohibited">PROHIBITED ACTIVITIES</SectionLink>{" "}
          section below, we grant you a non-exclusive, non-transferable,
          revocable license to:
        </P>
        <UL>
          <LI>access the Services; and</LI>
          <LI>
            download or print a copy of any portion of the Content to which you
            have properly gained access,
          </LI>
        </UL>
        <P>
          solely for your personal, non-commercial use or internal business
          purpose.
        </P>
        <P>
          Except as set out in this section or elsewhere in our Legal Terms, no
          part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </P>
        <P>
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section or elsewhere in our Legal Terms,
          please address your request to:{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>. If
          we ever grant you the permission to post, reproduce, or publicly
          display any part of our Services or Content, you must identify us as
          the owners or licensors of the Services, Content, or Marks and ensure
          that any copyright or proprietary notice appears or is visible on
          posting, reproducing, or displaying our Content.
        </P>
        <P>
          We reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks.
        </P>
        <P>
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </P>
        <H3>Your submissions and contributions</H3>
        <P>
          Please review this section and the{" "}
          <SectionLink href="#prohibited">PROHIBITED ACTIVITIES</SectionLink>{" "}
          section carefully prior to using our Services to understand the (a)
          rights you give us and (b) obligations you have when you post or
          upload any content through the Services.
        </P>
        <P>
          <Strong>Submissions:</Strong> By directly sending us any question,
          comment, suggestion, idea, feedback, or other information about the
          Services (&apos;<Strong>Submissions</Strong>&apos;), you agree to
          assign to us all intellectual property rights in such Submission. You
          agree that we shall own this Submission and be entitled to its
          unrestricted use and dissemination for any lawful purpose, commercial
          or otherwise, without acknowledgment or compensation to you.
        </P>
        <P>
          <Strong>Contributions:</Strong> The Services may invite you to chat,
          contribute to, or participate in blogs, message boards, online forums,
          and other functionality during which you may create, submit, post,
          display, transmit, publish, distribute, or broadcast content and
          materials to us or through the Services, including but not limited to
          text, writings, video, audio, photographs, graphics, comments,
          reviews, rating suggestions, personal information, or other material
          (&apos;<Strong>Contributions</Strong>&apos;). Any Submission that is
          publicly posted shall also be treated as a Contribution.
        </P>
        <P>
          You understand that Contributions may be viewable by other users of
          the Services and possibly through third-party websites.
        </P>
        <P>
          <Strong>
            When you post Contributions, you grant us a license (including use
            of your name, trademarks, and logos):
          </Strong>{" "}
          By posting any Contributions, you grant us an unrestricted, unlimited,
          irrevocable, perpetual, non-exclusive, transferable, royalty-free,
          fully-paid, worldwide right, and license to: use, copy, reproduce,
          distribute, sell, resell, publish, broadcast, retitle, store, publicly
          perform, publicly display, reformat, translate, excerpt (in whole or
          in part), and exploit your Contributions (including, without
          limitation, your image, name, and voice) for any purpose, commercial,
          advertising, or otherwise, to prepare derivative works of, or
          incorporate into other works, your Contributions, and to sublicense
          the licenses granted in this section. Our use and distribution may
          occur in any media formats and through any media channels.
        </P>
        <P>
          This license includes our use of your name, company name, and
          franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide.
        </P>
        <P>
          <Strong>You are responsible for what you post or upload:</Strong> By
          sending us Submissions and/or posting Contributions through any part
          of the Services or making Contributions accessible through the
          Services by linking your account through the Services to any of your
          social networking accounts, you:
        </P>
        <UL>
          <LI>
            confirm that you have read and agree with our{" "}
            <SectionLink href="#prohibited">PROHIBITED ACTIVITIES</SectionLink>{" "}
            and will not post, send, publish, upload, or transmit through the
            Services any Submission nor post any Contribution that is illegal,
            harassing, hateful, harmful, defamatory, obscene, bullying, abusive,
            discriminatory, threatening to any person or group, sexually
            explicit, false, inaccurate, deceitful, or misleading;
          </LI>
          <LI>
            to the extent permissible by applicable law, waive any and all moral
            rights to any such Submission and/or Contribution;
          </LI>
          <LI>
            warrant that any such Submission and/or Contributions are original
            to you or that you have the necessary rights and licenses to submit
            such Submissions and/or Contributions and that you have full
            authority to grant us the above-mentioned rights in relation to your
            Submissions and/or Contributions; and
          </LI>
          <LI>
            warrant and represent that your Submissions and/or Contributions do
            not constitute confidential information.
          </LI>
        </UL>
        <P>
          You are solely responsible for your Submissions and/or Contributions
          and you expressly agree to reimburse us for any and all losses that we
          may suffer because of your breach of (a) this section, (b) any third
          party&apos;s intellectual property rights, or (c) applicable law.
        </P>
        <P>
          <Strong>We may remove or edit your Content:</Strong> Although we have
          no obligation to monitor any Contributions, we shall have the right to
          remove or edit any Contributions at any time without notice if in our
          reasonable opinion we consider such Contributions harmful or in breach
          of these Legal Terms. If we remove or edit any such Contributions, we
          may also suspend or disable your account and report you to the
          authorities.
        </P>

        {/* --- Section 3 --- */}
        <H2 id="userreps">3. USER REPRESENTATIONS</H2>
        <P>
          By using the Services, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary; (3)
          you have the legal capacity and you agree to comply with these Legal
          Terms; (4) you are not a minor in the jurisdiction in which you
          reside; (5) you will not access the Services through automated or
          non-human means, whether through a bot, script or otherwise; (6) you
          will not use the Services for any illegal or unauthorized purpose; and
          (7) your use of the Services will not violate any applicable law or
          regulation.
        </P>
        <P>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </P>

        {/* --- Section 4 --- */}
        <H2 id="userreg">4. USER REGISTRATION</H2>
        <P>
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </P>

        {/* --- Section 5 --- */}
        <H2 id="purchases">5. PURCHASES AND PAYMENT</H2>
        <P>We accept the following forms of payment:</P>
        <UL>
          <LI>Visa</LI>
          <LI>Mastercard</LI>
          <LI>American Express</LI>
          <LI>Discover</LI>
          <LI>PayPal</LI>
        </UL>
        <P>
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed. Sales tax will be added to the price of purchases as deemed
          required by us. We may change prices at any time. All payments shall
          be in US dollars.
        </P>
        <P>
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. We reserve the right to correct any errors or mistakes in
          pricing, even if we have already requested or received payment.
        </P>
        <P>
          We reserve the right to refuse any order placed through the Services.
          We may, in our sole discretion, limit or cancel quantities purchased
          per person, per household, or per order. These restrictions may
          include orders placed by or under the same customer account, the same
          payment method, and/or orders that use the same billing or shipping
          address. We reserve the right to limit or prohibit orders that, in our
          sole judgment, appear to be placed by dealers, resellers, or
          distributors.
        </P>

        {/* --- Section 6 --- */}
        <H2 id="subscriptions">6. SUBSCRIPTIONS</H2>
        <H3>Billing and Renewal</H3>
        <P>
          Your subscription will continue and automatically renew unless
          cancelled. You consent to our charging your payment method on a
          recurring basis without requiring your prior approval for each
          recurring charge, until such time as you cancel the applicable order.
          The length of your billing cycle is monthly.
        </P>
        <H3>Free Trial</H3>
        <P>
          We offer a 15-day free trial to new users who register with the
          Services. The account will not be charged and the subscription will be
          suspended until upgraded to a paid version at the end of the free
          trial.
        </P>
        <H3>Cancellation</H3>
        <P>
          You can cancel your subscription at any time by contacting us using
          the contact information provided below. Your cancellation will take
          effect at the end of the current paid term. If you have any questions
          or are unsatisfied with our Services, please email us at{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>.
        </P>
        <H3>Fee Changes</H3>
        <P>
          We may, from time to time, make changes to the subscription fee and
          will communicate any price changes to you in accordance with
          applicable law.
        </P>

        {/* --- Section 7 --- */}
        <H2 id="sms">7. SMS/TEXT MESSAGING TERMS</H2>
        <P>
          By providing your phone number and opting in to receive SMS
          notifications from Kairos, you agree to these SMS Terms:
        </P>
        <UL>
          <LI>
            <Strong>Consent:</Strong> By providing your phone number and
            checking the consent box, you expressly consent to receive automated
            text messages from Kairos Computer Inc. regarding task updates,
            reminders, and AI assistant notifications.
          </LI>
          <LI>
            <Strong>Message Frequency:</Strong> Message frequency varies based
            on your task activity. You may receive 1-5 messages per day on
            average, though frequency may be higher or lower depending on your
            usage.
          </LI>
          <LI>
            <Strong>Message and Data Rates:</Strong> Standard message and data
            rates may apply. Contact your mobile carrier for details about your
            plan.
          </LI>
          <LI>
            <Strong>Opt-Out:</Strong> You may opt out at any time by replying
            STOP to any message.
          </LI>
          <LI>
            <Strong>Opt-In:</Strong> Reply START to resubscribe after opting
            out.
          </LI>
          <LI>
            <Strong>Privacy:</Strong> Your phone number and messaging data will
            be handled according to our Privacy Policy. We will never share your
            phone number with third parties for marketing purposes.
          </LI>
          <LI>
            <Strong>Changes:</Strong> We may modify these SMS terms with notice.
            Continued use after changes constitutes acceptance.
          </LI>
        </UL>

        {/* --- Section 8 --- */}
        <H2 id="prohibited">8. PROHIBITED ACTIVITIES</H2>
        <P>
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </P>
        <P>As a user of the Services, you agree not to:</P>
        <UL>
          <LI>
            Systematically retrieve data or other content from the Services to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </LI>
          <LI>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </LI>
          <LI>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services, including features that prevent or
            restrict the use or copying of any Content or enforce limitations on
            the use of the Services and/or the Content contained therein.
          </LI>
          <LI>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Services.
          </LI>
          <LI>
            Use any information obtained from the Services in order to harass,
            abuse, or harm another person.
          </LI>
          <LI>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </LI>
          <LI>
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </LI>
          <LI>Engage in unauthorized framing of or linking to the Services.</LI>
          <LI>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party&apos;s uninterrupted use and enjoyment of
            the Services or modifies, impairs, disrupts, alters, or interferes
            with the use, features, functions, operation, or maintenance of the
            Services.
          </LI>
          <LI>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </LI>
          <LI>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </LI>
          <LI>
            Attempt to impersonate another user or person or use the username of
            another user.
          </LI>
          <LI>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats (&apos;gifs&apos;), 1×1 pixels, web bugs,
            cookies, or other similar devices (sometimes referred to as
            &apos;spyware&apos; or &apos;passive collection mechanisms&apos; or
            &apos;pcms&apos;).
          </LI>
          <LI>
            Interfere with, disrupt, or create an undue burden on the Services
            or the networks or services connected to the Services.
          </LI>
          <LI>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Services to you.
          </LI>
          <LI>
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access to the Services, or any portion of the Services.
          </LI>
          <LI>
            Copy or adapt the Services&apos; software, including but not limited
            to Flash, PHP, HTML, JavaScript, or other code.
          </LI>
          <LI>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Services.
          </LI>
          <LI>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Services, or
            use or launch any unauthorized script or other software.
          </LI>
          <LI>
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </LI>
          <LI>
            Make any unauthorized use of the Services, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </LI>
          <LI>
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating endeavor or commercial enterprise.
          </LI>
        </UL>

        {/* --- Section 9 --- */}
        <H2 id="ugc">9. USER GENERATED CONTRIBUTIONS</H2>
        <P>
          The Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively, &apos;
          <Strong>Contributions</Strong>&apos;). Contributions may be viewable
          by other users of the Services and through third-party websites. As
          such, any Contributions you transmit may be treated as
          non-confidential and non-proprietary. When you create or make
          available any Contributions, you thereby represent and warrant that:
        </P>
        <UL>
          <LI>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </LI>
          <LI>
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Services, and other users of the Services to use your
            Contributions in any manner contemplated by the Services and these
            Legal Terms.
          </LI>
          <LI>
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Services and these Legal Terms.
          </LI>
          <LI>Your Contributions are not false, inaccurate, or misleading.</LI>
          <LI>
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </LI>
          <LI>
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </LI>
          <LI>
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </LI>
          <LI>
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </LI>
          <LI>
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </LI>
          <LI>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </LI>
          <LI>
            Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </LI>
          <LI>
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </LI>
          <LI>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Legal Terms, or any applicable
            law or regulation.
          </LI>
        </UL>
        <P>
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your rights to use the Services.
        </P>

        {/* --- Section 10 --- */}
        <H2 id="license">10. CONTRIBUTION LICENSE</H2>
        <P>
          By posting your Contributions to any part of the Services or making
          Contributions accessible to the Services by linking your account from
          the Services to any of your social networking accounts, you
          automatically grant, and you represent and warrant that you have the
          right to grant, to us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right, and license to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions
          (including, without limitation, your image and voice) for any purpose,
          commercial, advertising, or otherwise, and to prepare derivative works
          of, or incorporate into other works, such Contributions, and grant and
          authorize sublicenses of the foregoing. The use and distribution may
          occur in any media formats and through any media channels.
        </P>
        <P>
          This license will apply to any form, media, or technology now known or
          hereafter developed, and includes our use of your name, company name,
          and franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. You waive all moral rights in your Contributions, and you
          warrant that moral rights have not otherwise been asserted in your
          Contributions.
        </P>
        <P>
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </P>
        <P>
          We have the right, in our sole and absolute discretion, (1) to edit,
          redact, or otherwise change any Contributions; (2) to re-categorize
          any Contributions to place them in more appropriate locations on the
          Services; and (3) to pre-screen or delete any Contributions at any
          time and for any reason, without notice. We have no obligation to
          monitor your Contributions.
        </P>

        {/* --- Section 11 --- */}
        <H2 id="socialmedia">11. SOCIAL MEDIA</H2>
        <P>
          As part of the functionality of the Services, you may link your
          account with online accounts you have with third-party service
          providers (each such account, a &apos;
          <Strong>Third-Party Account</Strong>
          &apos;) by either: (1) providing your Third-Party Account login
          information through the Services; or (2) allowing us to access your
          Third-Party Account, as is permitted under the applicable terms and
          conditions that govern your use of each Third-Party Account. You
          represent and warrant that you are entitled to disclose your
          Third-Party Account login information to us and/or grant us access to
          your Third-Party Account, without breach by you of any of the terms
          and conditions that govern your use of the applicable Third-Party
          Account, and without obligating us to pay any fees or making us
          subject to any usage limitations imposed by the third-party service
          provider of the Third-Party Account. By granting us access to any
          Third-Party Accounts, you understand that (1) we may access, make
          available, and store (if applicable) any content that you have
          provided to and stored in your Third-Party Account (the &apos;
          <Strong>Social Network Content</Strong>&apos;) so that it is available
          on and through the Services via your account, including without
          limitation any friend lists and (2) we may submit to and receive from
          your Third-Party Account additional information to the extent you are
          notified when you link your account with the Third-Party Account.
          Depending on the Third-Party Accounts you choose and subject to the
          privacy settings that you have set in such Third-Party Accounts,
          personally identifiable information that you post to your Third-Party
          Accounts may be available on and through your account on the Services.
          Please note that if a Third-Party Account or associated service
          becomes unavailable or our access to such Third-Party Account is
          terminated by the third-party service provider, then Social Network
          Content may no longer be available on and through the Services. You
          will have the ability to disable the connection between your account
          on the Services and your Third-Party Accounts at any time. PLEASE NOTE
          THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS
          ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
          AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no
          effort to review any Social Network Content for any purpose, including
          but not limited to, for accuracy, legality, or non-infringement, and
          we are not responsible for any Social Network Content. You acknowledge
          and agree that we may access your email address book associated with a
          Third-Party Account and your contacts list stored on your mobile
          device or tablet computer solely for purposes of identifying and
          informing you of those contacts who have also registered to use the
          Services. You can deactivate the connection between the Services and
          your Third-Party Account by contacting us using the contact
          information below or through your account settings (if applicable). We
          will attempt to delete any information stored on our servers that was
          obtained through such Third-Party Account, except the username and
          profile picture that become associated with your account.
        </P>

        {/* --- Section 12 --- */}
        <H2 id="thirdparty">12. THIRD-PARTY WEBSITES AND CONTENT</H2>
        <P>
          The Services may contain (or you may be sent via the Site) links to
          other websites (&apos;<Strong>Third-Party Websites</Strong>&apos;) as
          well as articles, photographs, text, graphics, pictures, designs,
          music, sound, video, information, applications, software, and other
          content or items belonging to or originating from third parties
          (&apos;<Strong>Third-Party Content</Strong>&apos;). Such Third-Party
          Websites and Third-Party Content are not investigated, monitored, or
          checked for accuracy, appropriateness, or completeness by us, and we
          are not responsible for any Third-Party Websites accessed through the
          Services or any Third-Party Content posted on, available through, or
          installed from the Services, including the content, accuracy,
          offensiveness, opinions, reliability, privacy practices, or other
          policies of or contained in the Third-Party Websites or the
          Third-Party Content. Inclusion of, linking to, or permitting the use
          or installation of any Third-Party Websites or any Third-Party Content
          does not imply approval or endorsement thereof by us. If you decide to
          leave the Services and access the Third-Party Websites or to use or
          install any Third-Party Content, you do so at your own risk, and you
          should be aware these Legal Terms no longer govern. You should review
          the applicable terms and policies, including privacy and data
          gathering practices, of any website to which you navigate from the
          Services or relating to any applications you use or install from the
          Services. Any purchases you make through Third-Party Websites will be
          through other websites and from other companies, and we take no
          responsibility whatsoever in relation to such purchases which are
          exclusively between you and the applicable third party. You agree and
          acknowledge that we do not endorse the products or services offered on
          Third-Party Websites and you shall hold us blameless from any harm
          caused by your purchase of such products or services. Additionally,
          you shall hold us blameless from any losses sustained by you or harm
          caused to you relating to or resulting in any way from any Third-Party
          Content or any contact with Third-Party Websites.
        </P>

        {/* --- Section 13 --- */}
        <H2 id="sitemanage">13. SERVICES MANAGEMENT</H2>
        <P>
          We reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in our sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Services
          or otherwise disable all files and content that are excessive in size
          or are in any way burdensome to our systems; and (5) otherwise manage
          the Services in a manner designed to protect our rights and property
          and to facilitate the proper functioning of the Services.
        </P>

        {/* --- Section 14 --- */}
        <H2 id="ppno">14. PRIVACY POLICY</H2>
        <P>
          We care about data privacy and security. By using the Services, you
          agree to be bound by our{" "}
          <Link
            href="/privacy-policy"
            className="text-amber-500 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          posted on the Services, which is incorporated into these Legal Terms.
          Please be advised the Services are hosted in the United States. If you
          access the Services from any other region of the world with laws or
          other requirements governing personal data collection, use, or
          disclosure that differ from applicable laws in the United States, then
          through your continued use of the Services, you are transferring your
          data to the United States, and you expressly consent to have your data
          transferred to and processed in the United States.
        </P>

        {/* --- Section 15 --- */}
        <H2 id="terms">15. TERM AND TERMINATION</H2>
        <P>
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT
          OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
          SOLE DISCRETION.
        </P>
        <P>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </P>

        {/* --- Section 16 --- */}
        <H2 id="modifications">16. MODIFICATIONS AND INTERRUPTIONS</H2>
        <P>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We will not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of the
          Services.
        </P>
        <P>
          We cannot guarantee the Services will be available at all times. We
          may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you. You agree that we
          have no liability whatsoever for any loss, damage, or inconvenience
          caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal
          Terms will be construed to obligate us to maintain and support the
          Services or to supply any corrections, updates, or releases in
          connection therewith.
        </P>

        {/* --- Section 17 --- */}
        <H2 id="law">17. GOVERNING LAW</H2>
        <P>
          These Legal Terms and your use of the Services are governed by and
          construed in accordance with the laws of the State of California
          applicable to agreements made and to be entirely performed within the
          State of California, without regard to its conflict of law principles.
        </P>

        {/* --- Section 18 --- */}
        <H2 id="disputes">18. DISPUTE RESOLUTION</H2>
        <H3>Informal Negotiations</H3>
        <P>
          To expedite resolution and control the cost of any dispute,
          controversy, or claim related to these Legal Terms (each a &apos;
          <Strong>Dispute</Strong>&apos; and collectively, the &apos;
          <Strong>Disputes</Strong>&apos;) brought by either you or us
          (individually, a &apos;<Strong>Party</Strong>&apos; and collectively,
          the &apos;<Strong>Parties</Strong>&apos;), the Parties agree to first
          attempt to negotiate any Dispute (except those Disputes expressly
          provided below) informally for at least thirty (30) days before
          initiating arbitration. Such informal negotiations commence upon
          written notice from one Party to the other Party.
        </P>
        <H3>Binding Arbitration</H3>
        <P>
          If the Parties are unable to resolve a Dispute through informal
          negotiations, the Dispute (except those Disputes expressly excluded
          below) will be finally and exclusively resolved by binding
          arbitration.{" "}
          <Strong>
            YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT
            TO SUE IN COURT AND HAVE A JURY TRIAL.
          </Strong>{" "}
          The arbitration shall be commenced and conducted under the Commercial
          Arbitration Rules of the American Arbitration Association (&apos;
          <Strong>AAA</Strong>&apos;) and, where appropriate, the AAA&apos;s
          Supplementary Procedures for Consumer Related Disputes (&apos;
          <Strong>AAA Consumer Rules</Strong>&apos;), both of which are
          available at the{" "}
          <A href="http://www.adr.org">
            American Arbitration Association (AAA) website
          </A>
          . Your arbitration fees and your share of arbitrator compensation
          shall be governed by the AAA Consumer Rules and, where appropriate,
          limited by the AAA Consumer Rules. The arbitration may be conducted in
          person, through the submission of documents, by phone, or online. The
          arbitrator will make a decision in writing, but need not provide a
          statement of reasons unless requested by either Party. The arbitrator
          must follow applicable law, and any award may be challenged if the
          arbitrator fails to do so. Except where otherwise required by the
          applicable AAA rules or applicable law, the arbitration will take
          place in United States, California. Except as otherwise provided
          herein, the Parties may litigate in court to compel arbitration, stay
          proceedings pending arbitration, or to confirm, modify, vacate, or
          enter judgment on the award entered by the arbitrator.
        </P>
        <P>
          If for any reason, a Dispute proceeds in court rather than
          arbitration, the Dispute shall be commenced or prosecuted in the state
          and federal courts located in United States, California, and the
          Parties hereby consent to, and waive all defenses of lack of personal
          jurisdiction, and forum non conveniens with respect to venue and
          jurisdiction in such state and federal courts. Application of the
          United Nations Convention on Contracts for the International Sale of
          Goods and the Uniform Computer Information Transaction Act (UCITA) are
          excluded from these Legal Terms.
        </P>
        <P>
          In no event shall any Dispute brought by either Party related in any
          way to the Services be commenced more than one (1) years after the
          cause of action arose. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </P>
        <H3>Restrictions</H3>
        <P>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          (a) no arbitration shall be joined with any other proceeding; (b)
          there is no right or authority for any Dispute to be arbitrated on a
          class-action basis or to utilize class action procedures; and (c)
          there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
        </P>
        <H3>Exceptions to Informal Negotiations and Arbitration</H3>
        <P>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning informal negotiations binding arbitration:
          (a) any Disputes seeking to enforce or protect, or concerning the
          validity of, any of the intellectual property rights of a Party; (b)
          any Dispute related to, or arising from, allegations of theft, piracy,
          invasion of privacy, or unauthorized use; and (c) any claim for
          injunctive relief. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </P>

        {/* --- Section 19 --- */}
        <H2 id="corrections">19. CORRECTIONS</H2>
        <P>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </P>

        {/* --- Section 20 --- */}
        <H2 id="disclaimer">20. DISCLAIMER</H2>
        <P>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT
          OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE
          WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
          MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
          INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
          YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO
          OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
          AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
          VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
          THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
          OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT
          WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
          OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </P>

        {/* --- Section 21 --- */}
        <H2 id="liability">21. LIMITATIONS OF LIABILITY</H2>
        <P>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
          OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
          PAID, IF ANY, BY YOU TO US DURING THE THREE (3) MONTH PERIOD PRIOR TO
          ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL
          LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION
          OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR
          ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
          YOU MAY HAVE ADDITIONAL RIGHTS.
        </P>

        {/* --- Section 22 --- */}
        <H2 id="indemnification">22. INDEMNIFICATION</H2>
        <P>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&apos; fees and
          expenses, made by any third party due to or arising out of: (1) your
          Contributions; (2) use of the Services; (3) breach of these Legal
          Terms; (4) any breach of your representations and warranties set forth
          in these Legal Terms; (5) your violation of the rights of a third
          party, including but not limited to intellectual property rights; or
          (6) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we
          reserve the right, at your expense, to assume the exclusive defense
          and control of any matter for which you are required to indemnify us,
          and you agree to cooperate, at your expense, with our defense of such
          claims. We will use reasonable efforts to notify you of any such
          claim, action, or proceeding which is subject to this indemnification
          upon becoming aware of it.
        </P>

        {/* --- Section 23 --- */}
        <H2 id="userdata">23. USER DATA</H2>
        <P>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </P>

        {/* --- Section 24 --- */}
        <H2 id="electronic">
          24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
        </H2>
        <P>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </P>

        {/* --- Section 25 --- */}
        <H2 id="california">25. CALIFORNIA USERS AND RESIDENTS</H2>
        <P>
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
        </P>

        {/* --- Section 26 --- */}
        <H2 id="misc">26. MISCELLANEOUS</H2>
        <P>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defenses you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </P>

        {/* --- Section 27 --- */}
        <H2 id="contact">27. CONTACT US</H2>
        <P>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </P>
        <P>
          <Strong>Kairos Computer Inc.</Strong>
          <br />
          1628 Washington Street
          <br />
          San Francisco, CA 94109
          <br />
          United States
          <br />
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>
        </P>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 mt-12 py-8 text-stone-500 text-sm">
        <div className="max-w-4xl mx-auto flex justify-center items-center px-8">
          <div>© {new Date().getFullYear()} Kairos Computer Inc.</div>
        </div>
      </footer>
    </div>
  );
}
