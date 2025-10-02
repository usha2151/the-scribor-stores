import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for THE SCRIBOR — House of Paper. Learn how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-teal to-primary-sky text-white">
          <div className="container-custom text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your privacy is important to us
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                Last Updated: October 2, 2025 {/* EDITABLE: Update date */}
              </p>
              
              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to THE SCRIBOR — House of Paper (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our store, use our website, or engage with our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Payment Information:</strong> Credit/debit card details, UPI information (processed securely through payment processors)</li>
                <li><strong>Order Information:</strong> Purchase history, product preferences, delivery details</li>
                <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data when you visit our website</li>
              </ul>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders, inquiries, and requests</li>
                <li>To send you promotional materials, newsletters, and updates (with your consent)</li>
                <li>To improve our products, services, and customer experience</li>
                <li>To personalize your shopping experience</li>
                <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                <li>To comply with legal obligations and enforce our terms and conditions</li>
              </ul>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> Payment processors, delivery partners, and technology service providers who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                7. Data Retention
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                8. Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &lsquo;Last Updated&rsquo; date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-neutral-bg dark:bg-slate-900 p-6 rounded-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>THE SCRIBOR — House of Paper</strong><br />
                  {/* EDITABLE: Add your contact information */}
                  Email: <a href="mailto:privacy@thescribor.com" className="text-primary-teal hover:underline">privacy@thescribor.com</a><br />
                  Phone: +91-XXXXXXXXXX<br />
                  Address: [Street Address], Ahmedabad, Gujarat 380001, India
                </p>
              </div>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
              </p>

              <div className="bg-primary-teal/10 dark:bg-primary-teal/20 border-l-4 border-primary-teal p-6 rounded mt-8">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Your Consent:</strong> By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
