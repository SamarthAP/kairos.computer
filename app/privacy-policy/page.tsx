import Link from "next/link"; // Import Link for internal navigation if needed

export default function PrivacyPolicy() {
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
  const Strong = ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold text-stone-300">{children}</strong>
  );
  const UL = ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
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
        <H1>PRIVACY POLICY</H1>
        <p className="text-stone-500 mb-10">Last updated April 19, 2025</p>

        <P>
          This Privacy Notice for <Strong>Kairos Computer Inc.</Strong> (
          <Strong>&apos;we&apos;</Strong>, <Strong>&apos;us&apos;</Strong>, or{" "}
          <Strong>&apos;our&apos;</Strong>), describes how and why we might
          access, collect, store, use, and/or share (
          <Strong>&apos;process&apos;</Strong>) your personal information when
          you use our services (<Strong>&apos;Services&apos;</Strong>),
          including when you:
        </P>
        <UL>
          <LI>
            Visit our website at{" "}
            <A href="https://kairos.computer/">https://kairos.computer/</A>, or
            any website of ours that links to this Privacy Notice
          </LI>
          <LI>
            Use <Strong>Kairos</Strong>. Kairos lets anyone automate repetitive
            computer tasks - like processing invoices or data reconciliation -
            by simply recording their screen and narrating what they&apos;re
            doing. Kairos then creates an AI agent that can perform the task
            exactly as demonstrated, without needing coding or manual setup.
            It&apos;s like training a co-worker.
          </LI>
          <LI>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </LI>
        </UL>
        <P>
          <Strong>Questions or concerns?</Strong> Reading this Privacy Notice
          will help you understand your privacy rights and choices. We are
          responsible for making decisions about how your personal information
          is processed. If you do not agree with our policies and practices,
          please do not use our Services. If you still have any questions or
          concerns, please contact us at{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>.
        </P>

        <H2 id="summary">SUMMARY OF KEY POINTS</H2>
        <P>
          <Strong>
            <em className="text-stone-300">
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{" "}
              <SectionLink href="#toc">table of contents</SectionLink> below to
              find the section you are looking for.
            </em>
          </Strong>
        </P>
        <P>
          <Strong>What personal information do we process?</Strong> When you
          visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use. Learn
          more about{" "}
          <SectionLink href="#personalinfo">
            personal information you disclose to us
          </SectionLink>
          .
        </P>
        <P>
          <Strong>Do we process any sensitive personal information?</Strong>{" "}
          Some of the information may be considered &apos;special&apos; or
          &apos;sensitive&apos; in certain jurisdictions, for example your
          racial or ethnic origins, sexual orientation, and religious beliefs.
          We may process sensitive personal information when necessary with your
          consent or as otherwise permitted by applicable law. Learn more about{" "}
          <SectionLink href="#sensitiveinfo">
            sensitive information we process
          </SectionLink>
          .
        </P>
        <P>
          <Strong>Do we collect any information from third parties?</Strong> We
          do not collect any information from third parties.
        </P>
        <P>
          <Strong>How do we process your information?</Strong> We process your
          information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply
          with law. We may also process your information for other purposes with
          your consent. We process your information only when we have a valid
          legal reason to do so. Learn more about{" "}
          <SectionLink href="#infouse">
            how we process your information
          </SectionLink>
          .
        </P>
        <P>
          <Strong>
            In what situations and with which parties do we share personal
            information?
          </Strong>{" "}
          We may share information in specific situations and with specific
          third parties. Learn more about{" "}
          <SectionLink href="#whoshare">
            when and with whom we share your personal information
          </SectionLink>
          .
        </P>
        <P>
          <Strong>How do we keep your information safe?</Strong> We have
          adequate organisational and technical processes and procedures in
          place to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorised third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information. Learn more about{" "}
          <SectionLink href="#infosafe">
            how we keep your information safe
          </SectionLink>
          .
        </P>
        <P>
          <Strong>What are your rights?</Strong> Depending on where you are
          located geographically, the applicable privacy law may mean you have
          certain rights regarding your personal information. Learn more about{" "}
          <SectionLink href="#privacyrights">your privacy rights</SectionLink>.
        </P>
        <P>
          <Strong>How do you exercise your rights?</Strong> The easiest way to
          exercise your rights is by submitting a{" "}
          <A href="https://app.termly.io/notify/73066a53-fc68-426a-a358-420a6ddf6f3b">
            data subject access request
          </A>
          , or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </P>
        <P>
          Want to learn more about what we do with any information we collect?{" "}
          <SectionLink href="#toc">
            Review the Privacy Notice in full
          </SectionLink>
          .
        </P>

        <H2 id="toc">TABLE OF CONTENTS</H2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <LI>
            <SectionLink href="#infocollect">
              WHAT INFORMATION DO WE COLLECT?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#infouse">
              HOW DO WE PROCESS YOUR INFORMATION?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#legalbases">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#whoshare">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#cookies">
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#ai">
              DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#sociallogins">
              HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#smsdata">
              SMS DATA AND COMMUNICATIONS
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#inforetain">
              HOW LONG DO WE KEEP YOUR INFORMATION?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#infosafe">
              HOW DO WE KEEP YOUR INFORMATION SAFE?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#infominors">
              DO WE COLLECT INFORMATION FROM MINORS?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#privacyrights">
              WHAT ARE YOUR PRIVACY RIGHTS?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#DNT">
              CONTROLS FOR DO-NOT-TRACK FEATURES
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#uslaws">
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#otherlaws">
              DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#policyupdates">
              DO WE MAKE UPDATES TO THIS NOTICE?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#contact">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </SectionLink>
          </LI>
          <LI>
            <SectionLink href="#request">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </SectionLink>
          </LI>
        </ol>

        {/* --- Section 1 --- */}
        <H2 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</H2>
        <H3 id="personalinfo">Personal information you disclose to us</H3>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We collect personal information that you provide to us.
          </em>
        </P>
        <P>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </P>
        <P>
          <Strong>Personal Information Provided by You.</Strong> The personal
          information that we collect depends on the context of your
          interactions with us and the Services, the choices you make, and the
          products and features you use. The personal information we collect may
          include the following:
        </P>
        <UL>
          <LI>names</LI>
          <LI>email addresses</LI>
          <LI>usernames</LI>
          <LI>passwords</LI>
          <LI>phone numbers</LI>
        </UL>
        <P>
          <Strong>Phone Numbers.</Strong> We collect your mobile phone number when
          you opt-in to receive SMS notifications about your tasks and AI assistant
          activities. This is collected with your explicit consent during account
          setup or in your account settings.
        </P>
        <P id="sensitiveinfo">
          <Strong>Sensitive Information.</Strong> When necessary, with your
          consent or as otherwise permitted by applicable law, we process the
          following categories of sensitive information: [Note: The original
          HTML didn&apos;t list specific sensitive info categories here, add if
          applicable]
        </P>
        <P>
          <Strong>Social Media Login Data.</Strong> We may provide you with the
          option to register with us using your existing social media account
          details, like your Facebook, X, or other social media account. If you
          choose to register in this way, we will collect certain profile
          information about you from the social media provider, as described in
          the section called &apos;
          <SectionLink href="#sociallogins">
            HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </SectionLink>
          &apos; below.
        </P>
        <P>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </P>
        <H3>Information automatically collected</H3>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            Some information — such as your Internet Protocol (IP) address
            and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </em>
        </P>
        <P>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </P>
        <P>
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </P>
        <P>The information we collect includes:</P>
        <UL>
          <LI>
            <em className="text-stone-300">Log and Usage Data.</em> Log and
            usage data is service-related, diagnostic, usage, and performance
            information our servers automatically collect when you access or use
            our Services and which we record in log files. Depending on how you
            interact with us, this log data may include your IP address, device
            information, browser type, and settings and information about your
            activity in the Services (such as the date/time stamps associated
            with your usage, pages and files viewed, searches, and other actions
            you take such as which features you use), device event information
            (such as system activity, error reports (sometimes called
            &apos;crash dumps&apos;), and hardware settings).
          </LI>
          <LI>
            <em className="text-stone-300">Device Data.</em> We collect device
            data such as information about your computer, phone, tablet, or
            other device you use to access the Services. Depending on the device
            used, this device data may include information such as your IP
            address (or proxy server), device and application identification
            numbers, location, browser type, hardware model, Internet service
            provider and/or mobile carrier, operating system, and system
            configuration information.
          </LI>
          <LI>
            <em className="text-stone-300">Location Data.</em> We collect
            location data such as information about your device&apos;s location,
            which can be either precise or imprecise. How much information we
            collect depends on the type and settings of the device you use to
            access the Services. For example, we may use GPS and other
            technologies to collect geolocation data that tells us your current
            location (based on your IP address). You can opt out of allowing us
            to collect this information either by refusing access to the
            information or by disabling your Location setting on your device.
            However, if you choose to opt out, you may not be able to use
            certain aspects of the Services.
          </LI>
        </UL>
        <H3>Google API</H3>
        <P>
          Our use of information received from Google APIs will adhere to{" "}
          <A href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </A>
          , including the{" "}
          <A href="https://developers.google.com/terms/api-services-user-data-policy#limited-use">
            Limited Use requirements
          </A>
          . We affirm that information obtained via Google Workspace APIs is not
          used to develop, improve, or train generalized AI and/or ML models.
        </P>

        {/* --- Section 2 --- */}
        <H2 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent.
          </em>
        </P>
        <P>
          <Strong>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </Strong>
        </P>
        <UL>
          <LI>
            <Strong>
              To facilitate account creation and authentication and otherwise
              manage user accounts.
            </Strong>{" "}
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
          </LI>
          <LI>
            <Strong>
              To deliver and facilitate delivery of services to the user.
            </Strong>{" "}
            We may process your information to provide you with the requested
            service.
          </LI>
          {/* Add other processing reasons as needed */}
          <LI>
            <Strong>
              To save or protect an individual&apos;s vital interest.
            </Strong>{" "}
            We may process your information when necessary to save or protect an
            individual&apos;s vital interest, such as to prevent harm.
          </LI>
          <LI>
            <Strong>SMS Communications.</Strong> We use your phone number to send
            automated text messages about:
            <UL>
              <LI>Task creation and updates</LI>
              <LI>Reminders and notifications</LI>
              <LI>AI assistant activity alerts</LI>
              <LI>Account security notifications</LI>
              <LI>Responses to your text message inquiries</LI>
            </UL>
            We only send SMS messages to users who have explicitly opted in.
            Message frequency varies based on your activity.
          </LI>
        </UL>

        {/* --- Section 3 --- */}
        <H2 id="legalbases">
          3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
        </H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We only process your personal information when we believe it is
            necessary and we have a valid legal reason (i.e. legal basis) to do
            so under applicable law, like with your consent, to comply with
            laws, to provide you with services to enter into or fulfil our
            contractual obligations, to protect your rights, or to fulfil our
            legitimate business interests.
          </em>
        </P>
        <P>
          <em className="text-stone-300">
            <u>
              If you are located in the EU or UK, this section applies to you.
            </u>
          </em>
        </P>
        <P>
          The General Data Protection Regulation (GDPR) and UK GDPR require us
          to explain the valid legal bases we rely on in order to process your
          personal information. As such, we may rely on the following legal
          bases to process your personal information:
        </P>
        <UL>
          <LI>
            <Strong>Consent.</Strong> We may process your information if you
            have given us permission (i.e. consent) to use your personal
            information for a specific purpose. You can withdraw your consent at
            any time. Learn more about{" "}
            <SectionLink href="#withdrawconsent">
              withdrawing your consent
            </SectionLink>
            .
          </LI>
          <LI>
            <Strong>Performance of a Contract.</Strong> We may process your
            personal information when we believe it is necessary to fulfil our
            contractual obligations to you, including providing our Services or
            at your request prior to entering into a contract with you.
          </LI>
          <LI>
            <Strong>Legal Obligations.</Strong> We may process your information
            where we believe it is necessary for compliance with our legal
            obligations, such as to cooperate with a law enforcement body or
            regulatory agency, exercise or defend our legal rights, or disclose
            your information as evidence in litigation in which we are involved.
          </LI>
          <LI>
            <Strong>Vital Interests.</Strong> We may process your information
            where we believe it is necessary to protect your vital interests or
            the vital interests of a third party, such as situations involving
            potential threats to the safety of any person.
          </LI>
        </UL>
        <P>
          <em className="text-stone-300">
            <u>If you are located in Canada, this section applies to you.</u>
          </em>
        </P>
        <P>
          We may process your information if you have given us specific
          permission (i.e. express consent) to use your personal information for
          a specific purpose, or in situations where your permission can be
          inferred (i.e. implied consent). You can{" "}
          <SectionLink href="#withdrawconsent">
            withdraw your consent
          </SectionLink>{" "}
          at any time.
        </P>
        <P>
          In some exceptional cases, we may be legally permitted under
          applicable law to process your information without your consent,
          including, for example:
        </P>
        <UL>
          <LI>
            If collection is clearly in the interests of an individual and
            consent cannot be obtained in a timely way
          </LI>
          <LI>For investigations and fraud detection and prevention</LI>
          <LI>For business transactions provided certain conditions are met</LI>
          <LI>
            If it is contained in a witness statement and the collection is
            necessary to assess, process, or settle an insurance claim
          </LI>
          <LI>
            For identifying injured, ill, or deceased persons and communicating
            with next of kin
          </LI>
          <LI>
            If we have reasonable grounds to believe an individual has been, is,
            or may be victim of financial abuse
          </LI>
          <LI>
            If it is reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and
            the collection is reasonable for purposes related to investigating a
            breach of an agreement or a contravention of the laws of Canada or a
            province
          </LI>
          <LI>
            If disclosure is required to comply with a subpoena, warrant, court
            order, or rules of the court relating to the production of records
          </LI>
          <LI>
            If it was produced by an individual in the course of their
            employment, business, or profession and the collection is consistent
            with the purposes for which the information was produced
          </LI>
          <LI>
            If the collection is solely for journalistic, artistic, or literary
            purposes
          </LI>
          <LI>
            If the information is publicly available and is specified by the
            regulations
          </LI>
        </UL>

        {/* --- Section 4 --- */}
        <H2 id="whoshare">
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We may share information in specific situations described in this
            section and/or with the following third parties.
          </em>
        </P>
        <P>
          We may need to share your personal information in the following
          situations:
        </P>
        <UL>
          <LI>
            <Strong>Business Transfers.</Strong> We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </LI>
          <LI>
            <Strong>When we use Google Maps Platform APIs.</Strong> We may share
            your information with certain Google Maps Platform APIs (e.g. Google
            Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers
            to estimate your location. GPS is accurate to about 20 meters, while
            Wi-Fi and cell towers help improve accuracy when GPS signals are
            weak, like indoors. This data helps Google Maps provide directions,
            but it is not always perfectly precise.
          </LI>
          {/* Add other sharing situations if needed */}
        </UL>

        {/* --- Section 5 --- */}
        <H2 id="cookies">
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We may use cookies and other tracking technologies to collect and
            store your information.
          </em>
        </P>
        <P>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to gather information when you interact with our Services.
          Some online tracking technologies help us maintain the security of our
          Services and your account, prevent crashes, fix bugs, save your
          preferences, and assist with basic site functions.
        </P>
        <P>
          We also permit third parties and service providers to use online
          tracking technologies on our Services for analytics and advertising,
          including to help manage and display advertisements, to tailor
          advertisements to your interests, or to send abandoned shopping cart
          reminders (depending on your communication preferences). The third
          parties and service providers use their technology to provide
          advertising about products and services tailored to your interests
          which may appear either on our Services or on other websites.
        </P>
        <P>
          To the extent these online tracking technologies are deemed to be a
          &apos;sale&apos;/&apos;sharing&apos; (which includes targeted
          advertising, as defined under the applicable laws) under applicable US
          state laws, you can opt out of these online tracking technologies by
          submitting a request as described below under section &apos;
          <SectionLink href="#uslaws">
            DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </SectionLink>
          &apos;.
        </P>
        <P>
          Specific information about how we use such technologies and how you
          can refuse certain cookies is set out in our Cookie Notice [Note: Link
          to Cookie Notice if you have one].
        </P>
        <H3>Google Analytics</H3>
        <P>
          We may share your information with Google Analytics to track and
          analyse the use of the Services. The Google Analytics Advertising
          Features that we may use include: Google Analytics Demographics and
          Interests Reporting and Google Display Network Impressions Reporting.
          To opt out of being tracked by Google Analytics across the Services,
          visit{" "}
          <A href="https://tools.google.com/dlpage/gaoptout">
            https://tools.google.com/dlpage/gaoptout
          </A>
          . You can opt out of Google Analytics Advertising Features through{" "}
          <A href="https://adssettings.google.com/">Ads Settings</A> and Ad
          Settings for mobile apps. Other opt out means include{" "}
          <A href="http://optout.networkadvertising.org/">
            http://optout.networkadvertising.org/
          </A>{" "}
          and{" "}
          <A href="http://www.networkadvertising.org/mobile-choice">
            http://www.networkadvertising.org/mobile-choice
          </A>
          . For more information on the privacy practices of Google, please
          visit the{" "}
          <A href="https://policies.google.com/privacy">
            Google Privacy & Terms page
          </A>
          .
        </P>

        {/* --- Section 6 --- */}
        <H2 id="ai">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We offer products, features, or tools powered by artificial
            intelligence, machine learning, or similar technologies.
          </em>
        </P>
        <P>
          As part of our Services, we offer products, features, or tools powered
          by artificial intelligence, machine learning, or similar technologies
          (collectively, &apos;AI Products&apos;). These tools are designed to
          enhance your experience and provide you with innovative solutions. The
          terms in this Privacy Notice govern your use of the AI Products within
          our Services.
        </P>
        <P>
          <Strong>Use of AI Technologies</Strong>
        </P>
        <P>
          We provide the AI Products through third-party service providers
          (&apos;AI Service Providers&apos;), including Anthropic, Google Cloud
          AI and OpenAI. As outlined in this Privacy Notice, your input, output,
          and personal information will be shared with and processed by these AI
          Service Providers to enable your use of our AI Products for purposes
          outlined in &apos;
          <SectionLink href="#legalbases">
            WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
          </SectionLink>
          &apos; You must not use the AI Products in any way that violates the
          terms or policies of any AI Service Provider.
        </P>
        <P>
          <Strong>Our AI Products</Strong>
        </P>
        <P>Our AI Products are designed for the following functions:</P>
        <UL>
          <LI>AI automation</LI>
          {/* Add other AI functions if needed */}
        </UL>
        <P>
          <Strong>How We Process Your Data Using AI</Strong>
        </P>
        <P>
          All personal information processed using our AI Products is handled in
          line with our Privacy Notice and our agreement with third parties.
          This ensures high security and safeguards your personal information
          throughout the process, giving you peace of mind about your
          data&apos;s safety.
        </P>

        {/* --- Section 7 --- */}
        <H2 id="sociallogins">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            If you choose to register or log in to our Services using a social
            media account, we may have access to certain information about you.
          </em>
        </P>
        <P>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or X
          logins). Where you choose to do this, we will receive certain profile
          information about you from your social media provider. The profile
          information we receive may vary depending on the social media provider
          concerned, but will often include your name, email address, friends
          list, and profile picture, as well as other information you choose to
          make public on such a social media platform.
        </P>
        <P>
          We will use the information we receive only for the purposes that are
          described in this Privacy Notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </P>

        {/* --- Section 8 --- */}
        <H2 id="smsdata">8. SMS DATA AND COMMUNICATIONS</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We collect and process your phone number to send you SMS notifications
            when you opt-in to this feature.
          </em>
        </P>
        <P>When you opt-in to receive text messages:</P>
        <UL>
          <LI>We store your phone number securely in our database</LI>
          <LI>We log SMS delivery status and opt-in/out preferences</LI>
          <LI>We process inbound messages (like STOP or task updates)</LI>
        </UL>
        <P>
          You control your SMS preferences and can opt-out anytime by:
        </P>
        <UL>
          <LI>Texting STOP to any message</LI>
        </UL>
        <P>
          Standard message and data rates apply. Message frequency varies based on
          account activity.
        </P>

        {/* --- Section 9 --- */}
        <H2 id="inforetain">9. HOW LONG DO WE KEEP YOUR INFORMATION?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We keep your information for as long as necessary to fulfil the
            purposes outlined in this Privacy Notice unless otherwise required
            by law.
          </em>
        </P>
        <P>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </P>
        <P>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymise such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </P>

        {/* --- Section 10 --- */}
        <H2 id="infosafe">10. HOW DO WE KEEP YOUR INFORMATION SAFE?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We aim to protect your personal information through a system of
            organisational and technical security measures.
          </em>
        </P>
        <P>
          We have implemented appropriate and reasonable technical and
          organisational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorised third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </P>

        {/* --- Section 11 --- */}
        <H2 id="infominors">11. DO WE COLLECT INFORMATION FROM MINORS?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            We do not knowingly collect data from or market to children under 18
            years of age.
          </em>
        </P>
        <P>
          We do not knowingly collect, solicit data from, or market to children
          under 18 years of age, nor do we knowingly sell such personal
          information. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent&apos;s use of the Services. If we
          learn that personal information from users less than 18 years of age
          has been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>.
        </P>

        {/* --- Section 12 --- */}
        <H2 id="privacyrights">12. WHAT ARE YOUR PRIVACY RIGHTS?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            Depending on your state of residence in the US or in some regions,
            such as the European Economic Area (EEA), United Kingdom (UK),
            Switzerland, and Canada, you have rights that allow you greater
            access to and control over your personal information. You may
            review, change, or terminate your account at any time, depending on
            your country, province, or state of residence.
          </em>
        </P>
        <P>
          In some regions (like the EEA, UK, Switzerland, and Canada), you have
          certain rights under applicable data protection laws. These may
          include the right (i) to request access and obtain a copy of your
          personal information, (ii) to request rectification or erasure; (iii)
          to restrict the processing of your personal information; (iv) if
          applicable, to data portability; and (v) not to be subject to
          automated decision-making. In certain circumstances, you may also have
          the right to object to the processing of your personal information.
          You can make such a request by contacting us by using the contact
          details provided in the section &apos;
          <SectionLink href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </SectionLink>
          &apos; below.
        </P>
        <P>
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </P>
        <P>
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your{" "}
          <A href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
            Member State data protection authority
          </A>{" "}
          or{" "}
          <A href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
            UK data protection authority
          </A>
          .
        </P>
        <P>
          If you are located in Switzerland, you may contact the{" "}
          <A href="https://www.edoeb.admin.ch/edoeb/en/home.html">
            Federal Data Protection and Information Commissioner
          </A>
          .
        </P>
        <H3 id="withdrawconsent">Withdrawing your consent</H3>
        <P>
          If we are relying on your consent to process your personal
          information, which may be express and/or implied consent depending on
          the applicable law, you have the right to withdraw your consent at any
          time. You can withdraw your consent at any time by contacting us by
          using the contact details provided in the section &apos;
          <SectionLink href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </SectionLink>
          &apos; below.
        </P>
        <P>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </P>
        <H3>Opting out of marketing and promotional communications</H3>
        <P>
          You can unsubscribe from our marketing and promotional communications
          at any time by clicking on the unsubscribe link in the emails that we
          send, or by contacting us using the details provided in the section
          &apos;
          <SectionLink href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </SectionLink>
          &apos; below. You will then be removed from the marketing lists.
          However, we may still communicate with you — for example, to send you
          service-related messages that are necessary for the administration and
          use of your account, to respond to service requests, or for other
          non-marketing purposes.
        </P>
        <H3>Account Information</H3>
        <P>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </P>
        <UL>
          <LI>Contact us using the contact information provided.</LI>
        </UL>
        <P>
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </P>
        <H3>Cookies and similar technologies</H3>
        <P>
          Most Web browsers are set to accept cookies by default. If you prefer,
          you can usually choose to set your browser to remove cookies and to
          reject cookies. If you choose to remove cookies or reject cookies,
          this could affect certain features or services of our Services.
        </P>
        <P>
          If you have questions or comments about your privacy rights, you may
          email us at{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>.
        </P>

        {/* --- Section 13 --- */}
        <H2 id="DNT">13. CONTROLS FOR DO-NOT-TRACK FEATURES</H2>
        <P>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&apos;DNT&apos;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At
          this stage, no uniform technology standard for recognising and
          implementing DNT signals has been finalised. As such, we do not
          currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the
          future, we will inform you about that practice in a revised version of
          this Privacy Notice.
        </P>
        <P>
          California law requires us to let you know how we respond to web
          browser DNT signals. Because there currently is not an industry or
          legal standard for recognising or honouring DNT signals, we do not
          respond to them at this time.
        </P>

        {/* --- Section 14 --- */}
        <H2 id="uslaws">
          14. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            If you are a resident of California, Colorado, Connecticut,
            Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota,
            Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island,
            Tennessee, Texas, Utah, or Virginia, you may have the right to
            request access to and receive details about the personal information
            we maintain about you and how we have processed it, correct
            inaccuracies, get a copy of, or delete your personal information.
            You may also have the right to withdraw your consent to our
            processing of your personal information. These rights may be limited
            in some circumstances by applicable law. More information is
            provided below.
          </em>
        </P>
        <H3>Categories of Personal Information We Collect</H3>
        <P>
          We have collected the following categories of personal information in
          the past twelve (12) months:
        </P>
        {/* Table Styling */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-stone-700 text-sm">
            <thead>
              <tr className="bg-stone-800">
                <th className="border border-stone-700 p-2 text-left text-stone-300 font-semibold">
                  Category
                </th>
                <th className="border border-stone-700 p-2 text-left text-stone-300 font-semibold">
                  Examples
                </th>
                <th className="border border-stone-700 p-2 text-center text-stone-300 font-semibold">
                  Collected
                </th>
              </tr>
            </thead>
            <tbody className="bg-stone-900">
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  A. Identifiers
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Contact details, such as real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address, and account name
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  B. Personal information as defined in the California Customer
                  Records statute
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Name, contact information, education, employment, employment
                  history, and financial information
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  C. Protected classification characteristics under state or
                  federal law
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Gender, age, date of birth, race and ethnicity, national
                  origin, marital status, and other demographic data
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  D. Commercial information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Transaction information, purchase history, financial details,
                  and payment information
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  E. Biometric information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Fingerprints and voiceprints
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  F. Internet or other similar network activity
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Browsing history, search history, online behaviour, interest
                  data, and interactions with our and other websites,
                  applications, systems, and advertisements
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  G. Geolocation data
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Device location
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  H. Audio, electronic, sensory, or similar information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Images and audio, video or call recordings created in
                  connection with our business activities
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  I. Professional or employment-related information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Business contact details in order to provide you our Services
                  at a business level or job title, work history, and
                  professional qualifications if you apply for a job with us
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  J. Education Information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Student records and directory information
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  K. Inferences drawn from collected personal information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Inferences drawn from any of the collected personal
                  information listed above to create a profile or summary about,
                  for example, an individual&apos;s preferences and
                  characteristics
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  NO
                </td>
              </tr>
              <tr>
                <td className="border border-stone-700 p-2 align-top">
                  L. Sensitive personal Information
                </td>
                <td className="border border-stone-700 p-2 align-top">
                  Account login information
                </td>
                <td className="border border-stone-700 p-2 text-center align-middle">
                  YES
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          We only collect sensitive personal information, as defined by
          applicable privacy laws or the purposes allowed by law or with your
          consent. Sensitive personal information may be used, or disclosed to a
          service provider or contractor, for additional, specified purposes.
          You may have the right to limit the use or disclosure of your
          sensitive personal information. We do not collect or process sensitive
          personal information for the purpose of inferring characteristics
          about you.
        </P>
        <P>
          We may also collect other personal information outside of these
          categories through instances where you interact with us in person,
          online, or by phone or mail in the context of:
        </P>
        <UL>
          <LI>Receiving help through our customer support channels;</LI>
          <LI>Participation in customer surveys or contests; and</LI>
          <LI>
            Facilitation in the delivery of our Services and to respond to your
            inquiries.
          </LI>
        </UL>
        <P>
          We will use and retain the collected personal information as needed to
          provide the Services or for:
        </P>
        <UL>
          {/* <LI>Category A - [Retention Period]</LI> */}
          {/* <LI>Category B - [Retention Period]</LI> */}
          {/* ... add retention periods for categories collected ... */}
          <LI>Category L - As long as the user has an account with us</LI>
        </UL>
        <H3>Sources of Personal Information</H3>
        <P>
          Learn more about the sources of personal information we collect in
          &apos;
          <SectionLink href="#infocollect">
            WHAT INFORMATION DO WE COLLECT?
          </SectionLink>
          &apos;.
        </P>
        <H3>How We Use and Share Personal Information</H3>
        <P>
          Learn more about how we use your personal information in the section,
          &apos;
          <SectionLink href="#infouse">
            HOW DO WE PROCESS YOUR INFORMATION?
          </SectionLink>
          &apos;.
        </P>
        <P>
          <Strong>Will your information be shared with anyone else?</Strong>
        </P>
        <P>
          We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Learn more about how we disclose personal information to in the
          section, &apos;
          <SectionLink href="#whoshare">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </SectionLink>
          &apos;.
        </P>
        <P>
          We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological
          development and demonstration. This is not considered to be
          &apos;selling&apos; of your personal information.
        </P>
        <P>
          We have not disclosed, sold, or shared any personal information to
          third parties for a business or commercial purpose in the preceding
          twelve (12) months. We will not sell or share personal information in
          the future belonging to website visitors, users, and other consumers.
        </P>
        <H3>Your Rights</H3>
        <P>
          You have rights under certain US state data protection laws. However,
          these rights are not absolute, and in certain cases, we may decline
          your request as permitted by law. These rights include:
        </P>
        <UL>
          <LI>
            <Strong>Right to know</Strong> whether or not we are processing your
            personal data
          </LI>
          <LI>
            <Strong>Right to access</Strong> your personal data
          </LI>
          <LI>
            <Strong>Right to correct</Strong> inaccuracies in your personal data
          </LI>
          <LI>
            <Strong>Right to request</Strong> the deletion of your personal data
          </LI>
          <LI>
            <Strong>Right to obtain a copy</Strong> of the personal data you
            previously shared with us
          </LI>
          <LI>
            <Strong>Right to non-discrimination</Strong> for exercising your
            rights
          </LI>
          <LI>
            <Strong>Right to opt out</Strong> of the processing of your personal
            data if it is used for targeted advertising (or sharing as defined
            under California&apos;s privacy law), the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects (&apos;profiling&apos;)
          </LI>
        </UL>
        <P>
          Depending upon the state where you live, you may also have the
          following rights:
        </P>
        <UL>
          <LI>
            Right to access the categories of personal data being processed (as
            permitted by applicable law, including the privacy law in Minnesota)
          </LI>
          <LI>
            Right to obtain a list of the categories of third parties to which
            we have disclosed personal data (as permitted by applicable law,
            including the privacy law in California, Delaware, and Maryland)
          </LI>
          <LI>
            Right to obtain a list of specific third parties to which we have
            disclosed personal data (as permitted by applicable law, including
            the privacy law in Minnesota and Oregon)
          </LI>
          <LI>
            Right to review, understand, question, and correct how personal data
            has been profiled (as permitted by applicable law, including the
            privacy law in Minnesota)
          </LI>
          <LI>
            Right to limit use and disclosure of sensitive personal data (as
            permitted by applicable law, including the privacy law in
            California)
          </LI>
          <LI>
            Right to opt out of the collection of sensitive data and personal
            data collected through the operation of a voice or facial
            recognition feature (as permitted by applicable law, including the
            privacy law in Florida)
          </LI>
        </UL>
        <H3>How to Exercise Your Rights</H3>
        <P>
          To exercise these rights, you can contact us by submitting a{" "}
          <A href="https://app.termly.io/notify/73066a53-fc68-426a-a358-420a6ddf6f3b">
            data subject access request
          </A>
          , by emailing us at{" "}
          <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>, or
          by referring to the contact details at the bottom of this document.
        </P>
        <P>
          Under certain US state data protection laws, you can designate an
          authorised agent to make a request on your behalf. We may deny a
          request from an authorised agent that does not submit proof that they
          have been validly authorised to act on your behalf in accordance with
          applicable laws.
        </P>
        <H3>Request Verification</H3>
        <P>
          Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information
          in our system. We will only use personal information provided in your
          request to verify your identity or authority to make the request.
          However, if we cannot verify your identity from the information
          already maintained by us, we may request that you provide additional
          information for the purposes of verifying your identity and for
          security or fraud-prevention purposes.
        </P>
        <P>
          If you submit the request through an authorised agent, we may need to
          collect additional information to verify your identity before
          processing your request and the agent will need to provide a written
          and signed permission from you to submit such request on your behalf.
        </P>
        <H3>Appeals</H3>
        <P>
          Under certain US state data protection laws, if we decline to take
          action regarding your request, you may appeal our decision by emailing
          us at <A href="mailto:manas@kairos.computer">manas@kairos.computer</A>
          . We will inform you in writing of any action taken or not taken in
          response to the appeal, including a written explanation of the reasons
          for the decisions. If your appeal is denied, you may submit a
          complaint to your state attorney general.
        </P>
        <H3>California &apos;Shine The Light&apos; Law</H3>
        <P>
          California Civil Code Section 1798.83, also known as the &apos;Shine
          The Light&apos; law, permits our users who are California residents to
          request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any) we
          disclosed to third parties for direct marketing purposes and the names
          and addresses of all third parties with which we shared personal
          information in the immediately preceding calendar year. If you are a
          California resident and would like to make such a request, please
          submit your request in writing to us by using the contact details
          provided in the section &apos;
          <SectionLink href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </SectionLink>
          &apos;.
        </P>

        {/* --- Section 15 --- */}
        <H2 id="otherlaws">
          15. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
        </H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            You may have additional rights based on the country you reside in.
          </em>
        </P>
        <H3>Australia and New Zealand</H3>
        <P>
          We collect and process your personal information under the obligations
          and conditions set by Australia&apos;s Privacy Act 1988 and New
          Zealand&apos;s Privacy Act 2020 (Privacy Act).
        </P>
        <P>
          This Privacy Notice satisfies the notice requirements defined in both
          Privacy Acts, in particular: what personal information we collect from
          you, from which sources, for which purposes, and other recipients of
          your personal information.
        </P>
        <P>
          If you do not wish to provide the personal information necessary to
          fulfil their applicable purpose, it may affect our ability to provide
          our services, in particular:
        </P>
        <UL>
          <LI>offer you the products or services that you want</LI>
          <LI>respond to or help with your requests</LI>
          <LI>manage your account with us</LI>
          <LI>confirm your identity and protect your account</LI>
        </UL>
        <P>
          At any time, you have the right to request access to or correction of
          your personal information. You can make such a request by contacting
          us by using the contact details provided in the section &apos;
          <SectionLink href="#request">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </SectionLink>
          &apos;.
        </P>
        <P>
          If you believe we are unlawfully processing your personal information,
          you have the right to submit a complaint about a breach of the
          Australian Privacy Principles to the{" "}
          <A href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us">
            Office of the Australian Information Commissioner
          </A>{" "}
          and a breach of New Zealand&apos;s Privacy Principles to the{" "}
          <A href="https://www.privacy.org.nz/your-rights/making-a-complaint/">
            Office of New Zealand Privacy Commissioner
          </A>
          .
        </P>
        <H3>Republic of South Africa</H3>
        <P>
          At any time, you have the right to request access to or correction of
          your personal information. You can make such a request by contacting
          us by using the contact details provided in the section &apos;
          <SectionLink href="#request">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </SectionLink>
          &apos;.
        </P>
        <P>
          If you are unsatisfied with the manner in which we address any
          complaint with regard to our processing of personal information, you
          can contact the office of the regulator, the details of which are:
        </P>
        <P>
          <A href="https://inforegulator.org.za/">
            The Information Regulator (South Africa)
          </A>
          <br />
          General enquiries:{" "}
          <A href="mailto:enquiries@inforegulator.org.za">
            enquiries@inforegulator.org.za
          </A>
          <br />
          Complaints (complete POPIA/PAIA form 5):{" "}
          <A href="mailto:PAIAComplaints@inforegulator.org.za">
            PAIAComplaints@inforegulator.org.za
          </A>{" "}
          &{" "}
          <A href="mailto:POPIAComplaints@inforegulator.org.za">
            POPIAComplaints@inforegulator.org.za
          </A>
        </P>

        {/* --- Section 16 --- */}
        <H2 id="policyupdates">16. DO WE MAKE UPDATES TO THIS NOTICE?</H2>
        <P>
          <Strong>
            <em className="text-stone-300">In Short:</em>
          </Strong>{" "}
          <em className="text-stone-400">
            Yes, we will update this notice as necessary to stay compliant with
            relevant laws.
          </em>
        </P>
        <P>
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated &apos;Revised&apos; date at
          the top of this Privacy Notice. If we make material changes to this
          Privacy Notice, we may notify you either by prominently posting a
          notice of such changes or by directly sending you a notification. We
          encourage you to review this Privacy Notice frequently to be informed
          of how we are protecting your information.
        </P>

        {/* --- Section 17 --- */}
        <H2 id="contact">17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</H2>
        <P>
          If you have questions or comments about this notice, you may email us
          at <A href="mailto:manas@kairos.computer">manas@kairos.computer</A> or
          contact us by post at:
        </P>
        <P>
          Kairos Computer Inc.
          <br />
          1626 Washington Street
          <br />
          San Francisco, CA 94109
          <br />
          United States
        </P>

        {/* --- Section 18 --- */}
        <H2 id="request">
          18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </H2>
        <P>
          Based on the applicable laws of your country or state of residence in
          the US, you may have the right to request access to the personal
          information we collect from you, details about how we have processed
          it, correct inaccuracies, or delete your personal information. You may
          also have the right to withdraw your consent to our processing of your
          personal information. These rights may be limited in some
          circumstances by applicable law. To request to review, update, or
          delete your personal information, please fill out and submit a{" "}
          <A href="https://app.termly.io/notify/73066a53-fc68-426a-a358-420a6ddf6f3b">
            data subject access request
          </A>
          .
        </P>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 mt-12 py-8 text-stone-500 text-sm">
        <div className="max-w-4xl mx-auto flex justify-center items-center px-8">
          <div>© {new Date().getFullYear()} Kairos Computer Inc.</div>
          {/* Add other footer links if needed */}
        </div>
      </footer>
    </div>
  );
}
