import { LegalPage } from "@/components/landing/LegalPage";

const Privacy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      lastUpdated="5/5/2026"
    >
      <h2>1. Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, company information, and any other information you choose to provide.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our automation services</li>
        <li>Process transactions and send related information</li>
        <li>Send technical notices, updates, and support messages</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Analyze usage patterns and optimize our services</li>
        <li>Send SMS and phone communications with your consent, including appointment reminders, service updates, and promotional messages</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information in certain limited circumstances, such as with your consent, to comply with legal obligations, or to protect our rights and the rights of others.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access and update your personal information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to processing of your personal information</li>
        <li>Request data portability</li>
        <li>Withdraw consent where processing is based on consent</li>
        <li>Opt-out of SMS and phone marketing communications at any time by replying STOP to any message or contacting us directly</li>
      </ul>

      <h2>7. Cookies and Tracking</h2>
      <p>
        We use cookies and similar tracking technologies to improve your experience on our website, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences.
      </p>

      <h2>8. SMS and Phone Communications</h2>

      <h3>Consent and Opt-In</h3>
      <p>
        We obtain SMS consent through a <strong>separate, voluntary opt-in process</strong>. You may opt in to receive SMS communications from HLPR AI LLC by:
      </p>
      <ul>
        <li>Checking the SMS consent checkbox during checkout (optional)</li>
        <li>Signing up on our dedicated <a href="https://hlpr.io/sms-consent">SMS consent page</a></li>
        <li>Providing verbal or written consent during onboarding</li>
      </ul>
      <p>By opting in, you expressly consent to receive text messages from us, including:</p>
      <ul>
        <li>Appointment reminders and confirmations</li>
        <li>Service notifications and updates</li>
        <li>Account alerts and security notices</li>
        <li>Promotional offers and marketing messages (if opted in)</li>
        <li>Customer support responses</li>
      </ul>
      <p>
        <strong>Consent is NOT a condition of purchase.</strong> You can purchase our services without opting in to receive SMS communications. The SMS opt-in checkbox is unchecked by default and is entirely optional.
      </p>

      <h3>Message Frequency and Charges</h3>
      <p>
        Message frequency varies depending on your interaction with our services. You may receive up to 10 messages per month, though this may vary based on your account activity and selected preferences.
      </p>
      <p>
        <strong>Message and data rates may apply.</strong> Standard text messaging rates from your mobile carrier will apply to all SMS communications. Please consult your mobile service provider for details on your messaging plan.
      </p>

      <h3>How to Opt-Out</h3>
      <p>You may opt-out of receiving SMS communications at any time by:</p>
      <ul>
        <li><strong>Text STOP:</strong> Reply STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to any message</li>
        <li><strong>Email us:</strong> Send an opt-out request to support@hlpr.io</li>
        <li><strong>Call us:</strong> Contact us at +1 302-550-8521 to request removal</li>
        <li><strong>Account settings:</strong> Update your communication preferences in your account dashboard</li>
      </ul>
      <p>
        After you opt-out, you will receive one final confirmation message. For help or more information, text HELP to any message or contact us using the information above.
      </p>

      <h3>TCPA Compliance</h3>
      <p>
        We comply with the Telephone Consumer Protection Act (TCPA) and all applicable federal and state regulations regarding SMS and phone communications. We will not share your mobile phone number with third parties for their marketing purposes without your explicit consent. By providing your mobile number and opting in, you agree that we may contact you using an automatic telephone dialing system or artificial/prerecorded voice messages. Your consent is not required as a condition of purchasing any goods or services.
      </p>

      <h3>Mobile Information Sharing</h3>
      <p>
        We do not sell, share, or disclose your mobile phone number or any information collected through our SMS program to third parties or affiliates for marketing or promotional purposes. Your mobile information is used solely to deliver the transactional SMS messages you have consented to receive.
      </p>

      <h3>Supported Carriers</h3>
      <p>Our SMS service is available on major U.S. carriers including but not limited to:</p>
      <p>
        AT&amp;T, T-Mobile, Verizon, Sprint, Boost Mobile, Cricket Wireless, MetroPCS, U.S. Cellular, Virgin Mobile, and others. If you have questions about your carrier's compatibility, please contact your mobile service provider.
      </p>

      <h3>Data Security for Phone Communications</h3>
      <p>
        Your mobile phone number is stored securely and protected with industry-standard encryption. We use trusted third-party service providers (such as Twilio and similar platforms) to facilitate SMS delivery. These providers are contractually obligated to maintain the security and confidentiality of your information and may only use it to provide services on our behalf.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions about this privacy policy or our data practices, please contact us at:</p>
      <p><strong>Email:</strong> support@hlpr.io</p>
      <p><strong>Phone:</strong> +1 302-550-8521</p>
      <p><strong>Address:</strong> 4 Bootes Lane, Bear DE 19701</p>
    </LegalPage>
  );
};

export default Privacy;
