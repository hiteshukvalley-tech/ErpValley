import type { LegalDoc } from './types'

/*
 * Legal documents are TEMPLATES. They must be reviewed by a qualified legal advisor before publication.
 * Placeholders in square brackets ([Company legal name], [Registered address], [Contact email], [Jurisdiction])
 * must be replaced with verified details. Do not fill them with guesses.
 */

const templateNotice =
  'This document is a template and must be reviewed by a qualified legal advisor before publication. The company legal name, registered address and contact details will be added before it takes effect.'

export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  summary: `${templateNotice} It explains what personal information ERPVALLEY collects through this website and its services, how that information is used and the choices you have.`,
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        'This website and the ERPVALLEY platform and services are operated by [Company legal name], registered at [Registered address] ("ERPVALLEY", "we", "us" or "our").',
        'We are responsible for the personal information described in this policy. You can contact us about privacy at [Contact email].',
      ],
    },
    {
      heading: 'Information we collect',
      paragraphs: [
        'We collect information you give us directly and a limited amount of technical information generated when you use the website.',
      ],
      items: [
        'Contact, demo and quote request forms: your name, business email address, company name, phone number (optional) and the requirements or message you provide.',
        'Newsletter signup: your email address.',
        'Server logs: technical details such as IP address, browser type, pages requested, date and time, recorded automatically when you access the website.',
        'Preferences: your light or dark theme choice, stored locally in your browser and not sent to us.',
      ],
    },
    {
      heading: 'How we use your information',
      paragraphs: ['We use personal information for the following purposes:'],
      items: [
        'To respond to your enquiries, schedule demos and prepare quotes or proposals.',
        'To send the newsletter you subscribed to, until you unsubscribe.',
        'To provide, maintain and improve our website, platform and services.',
        'To protect the website and our users, including detecting and preventing misuse.',
        'To comply with legal obligations that apply to us.',
      ],
    },
    {
      heading: 'Legal bases for processing',
      paragraphs: [
        'Where the law requires a legal basis for processing personal information, we rely on one or more of the following: taking steps at your request before entering into a contract, performing a contract with you, our legitimate interests in running and protecting our business, compliance with legal obligations, and your consent where it is required.',
        'Where we rely on consent, you can withdraw it at any time without affecting processing that took place before withdrawal.',
      ],
    },
    {
      heading: 'Sharing your information',
      paragraphs: [
        'We do not sell your personal information. We share it only with service providers who help us operate the website and our services, and only to the extent they need it to do so.',
        'We may also disclose information where required by law, to protect our rights or the safety of others, or as part of a business transfer such as a merger or acquisition.',
      ],
      items: [
        'Hosting providers that serve the website.',
        'A form delivery provider (Web3Forms) that forwards the details you submit through our forms to our team by email.',
        'Email providers that we use to reply to enquiries and send the newsletter.',
        'A font provider (Google Fonts) that serves the typefaces used on the website; your browser requests them directly, which shares your IP address with that provider.',
        'A tag management service (Google Tag Manager) that loads the website measurement tools described in our Cookie Policy.',
      ],
    },
    {
      heading: 'Data retention',
      paragraphs: [
        'We keep personal information only for as long as needed for the purposes described in this policy, including to meet legal, accounting or reporting requirements.',
        'Enquiry information is kept while we are discussing your requirements and for a reasonable period afterwards. Newsletter addresses are kept until you unsubscribe. Server logs are kept for a limited period for security and troubleshooting.',
      ],
    },
    {
      heading: 'Security',
      paragraphs: [
        'We use reasonable technical and organizational measures to protect personal information, including encrypted connections (HTTPS) for every page and form, and limiting access to enquiries to the people who need them to respond.',
        'No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Depending on where you live, you may have rights over your personal information. To make a request, contact us at [Contact email]. We may need to verify your identity before responding.',
      ],
      items: [
        'Access: ask for a copy of the personal information we hold about you.',
        'Correction: ask us to correct information that is inaccurate or incomplete.',
        'Deletion: ask us to delete your personal information, subject to legal requirements.',
        'Objection: object to or ask us to restrict certain processing, including direct marketing.',
      ],
    },
    {
      heading: 'Cookies and local storage',
      paragraphs: [
        'The website sets a first-party cookie that remembers how you first reached us (for example the campaign link or website that referred you) for 30 days, and stores your theme preference locally in your browser. Measurement tools loaded through Google Tag Manager may set their own cookies. Details are set out in our Cookie Policy.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'Our website and services are intended for businesses and are not directed at children. We do not knowingly collect personal information from children. If you believe a child has provided us with information, contact us and we will delete it.',
      ],
    },
    {
      heading: 'Changes and contact',
      paragraphs: [
        'We may update this policy from time to time. When we do, we will publish the updated version on this page and, where changes are significant, take reasonable steps to let you know.',
        'If you have questions about this policy or how we handle personal information, contact [Company legal name] at [Contact email] or write to us at [Registered address].',
      ],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  summary: `${templateNotice} These terms govern your use of the ERPVALLEY website and related online services.`,
  sections: [
    {
      heading: 'Acceptance of these terms',
      paragraphs: [
        'These terms form an agreement between you and [Company legal name] ("ERPVALLEY", "we", "us" or "our"). By accessing or using this website, you agree to these terms.',
        'If you use the website on behalf of a business, you confirm that you are authorized to accept these terms for that business. If you do not agree, do not use the website.',
      ],
    },
    {
      heading: 'Our services',
      paragraphs: [
        'ERPVALLEY provides a modular ERP platform and related services, including implementation, custom development, consulting, integrations, data migration, quality assurance, support and dedicated developers.',
        'The website provides information about these services and lets you contact us, request demos and quotes, and subscribe to our newsletter. Delivery of platform access or professional services is governed by a separate signed agreement.',
      ],
    },
    {
      heading: 'Acceptable use',
      paragraphs: ['When using the website, you agree not to:'],
      items: [
        'Break any applicable law or infringe the rights of others.',
        'Attempt to gain unauthorized access to the website or our systems.',
        'Interfere with or disrupt the website, including by introducing malware or overloading our infrastructure.',
        'Scrape, copy or harvest content or data by automated means without our permission.',
        'Submit false, misleading or unlawful information through our forms.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'The website, its content, design, software and the ERPVALLEY name and logo are owned by or licensed to [Company legal name] and are protected by intellectual property laws.',
        'You may view and use the website for your own business evaluation. You may not copy, modify, distribute or create derivative works from it without our written permission.',
      ],
    },
    {
      heading: 'Quotes and proposals',
      paragraphs: [
        'Quotes, estimates, proposals and pricing information provided through the website or by our team are for information only. They are not binding offers and do not create any obligation for either party.',
        'A commitment to deliver services exists only once both parties have signed a written agreement setting out the scope, fees and terms.',
      ],
    },
    {
      heading: 'Third-party links',
      paragraphs: [
        'The website may contain links to third-party websites or services. We do not control them and are not responsible for their content, policies or practices. Your use of them is at your own risk.',
      ],
    },
    {
      heading: 'Disclaimers',
      paragraphs: [
        'The website and its content are provided on an "as is" and "as available" basis. To the extent permitted by law, we make no warranties, express or implied, about the website, including that it will be uninterrupted, error-free or fit for a particular purpose.',
        'Information on the website is provided for general purposes and may change without notice.',
      ],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: [
        'To the extent permitted by law, [Company legal name] will not be liable for any indirect, incidental, special or consequential loss, or for loss of profits, revenue, data or goodwill, arising from your use of the website.',
        'Nothing in these terms limits liability that cannot be limited under applicable law. Liability relating to platform access or professional services is governed by the relevant signed agreement.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of [Jurisdiction]. Any disputes arising from them will be subject to the jurisdiction of the courts of [Jurisdiction], unless applicable law requires otherwise.',
      ],
    },
    {
      heading: 'Changes and contact',
      paragraphs: [
        'We may update these terms from time to time. Updated terms apply from the date they are published on this page. Continued use of the website after that date means you accept the updated terms.',
        'Questions about these terms can be sent to [Company legal name] at [Contact email] or [Registered address].',
      ],
    },
  ],
}

export const cookiePolicy: LegalDoc = {
  title: 'Cookie Policy',
  summary: `${templateNotice} It explains how the ERPVALLEY website uses cookies and browser storage.`,
  sections: [
    {
      heading: 'What cookies and local storage are',
      paragraphs: [
        'Cookies are small text files that a website stores in your browser. Local storage is a similar browser feature that lets a website save small pieces of information on your device.',
        'This policy explains which of these technologies the ERPVALLEY website, operated by [Company legal name], uses and why.',
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: [
        'There are no accounts or sign-in on the website, so no session cookies are needed. The website sets one first-party cookie of its own, described below.',
        'We use Google Tag Manager to load website measurement tools. Those tools may set their own cookies; the tools in use are listed here [List of measurement tools and their cookies].',
      ],
      items: [
        'ev_attribution (30 days): records how you first arrived, such as campaign tags in the link (utm parameters), ad click identifiers and the referring website, so we can tell which campaigns bring enquiries. It contains no name, email address or other contact details.',
      ],
    },
    {
      heading: 'Local storage',
      paragraphs: [
        'We store your display preference in your browser so the website remembers it on your next visit. This information stays on your device and is not sent to our servers.',
      ],
      items: ['Theme preference: remembers whether you chose the light or dark theme.'],
    },
    {
      heading: 'What we do not use',
      paragraphs: [
        'We do not sell information collected through cookies. Analytics or advertising tools are added only through Google Tag Manager, and this policy will list each one before it is used.',
        'Where the law requires it, we ask for your consent before setting non-essential cookies.',
      ],
    },
    {
      heading: 'Managing cookies and storage',
      paragraphs: [
        'You can view, block or delete cookies and local storage through your browser settings. If you clear local storage, the website will return to its default theme.',
      ],
    },
    {
      heading: 'Changes and contact',
      paragraphs: [
        'We may update this policy if the way we use cookies or browser storage changes. The updated version will be published on this page.',
        'For questions about this policy, contact [Company legal name] at [Contact email]. More information about how we handle personal information is available in our Privacy Policy.',
      ],
    },
  ],
}
