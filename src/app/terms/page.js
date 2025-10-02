import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for THE SCRIBOR — House of Paper. Read our policies on orders, payments, shipping, and returns.',
}

export default function Terms() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-teal to-primary-sky text-white">
          <div className="container-custom text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                Last Updated: October 2, 2025 {/* EDITABLE: Update date */}
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Welcome to THE SCRIBOR — House of Paper. By accessing our store, website, or using our services, you agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree with any part of these Terms, please do not use our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes your acceptance of the modified Terms.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                2. Business Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {/* EDITABLE: Add your business registration details */}
                THE SCRIBOR — House of Paper is a retail business operating in Ahmedabad, Gujarat, India.<br />
                Business Registration Number: [Your Registration Number]<br />
                GST Number: [Your GST Number]<br />
                Registered Address: [Complete Address], Ahmedabad, Gujarat 380001
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                3. Products and Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We offer a curated selection of books, stationery, office supplies, art materials, gifts, and related products. We strive to display accurate product descriptions, images, and prices. However, we do not warrant that product descriptions, images, or other content are accurate, complete, reliable, current, or error-free.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We reserve the right to discontinue any product at any time without notice. Product availability is subject to change, and we cannot guarantee that items will be in stock at all times.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                4. Ordering and Payment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>4.1 Order Placement:</strong> When you place an order, you are making an offer to purchase products. We reserve the right to accept or decline your order for any reason, including product availability, errors in pricing or product information, or suspected fraudulent activity.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>4.2 Payment Methods:</strong> We accept the following payment methods:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                <li>Cash (in-store purchases)</li>
                <li>Credit and Debit Cards</li>
                <li>UPI (Unified Payments Interface)</li>
                <li>Net Banking</li>
                <li>Cash on Delivery (for local orders, subject to minimum order value)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>4.3 Payment Processing:</strong> All payments are processed securely through trusted payment gateways. We do not store your complete credit card or banking information on our servers.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                5. Pricing and Taxes
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated. We reserve the right to change prices at any time without prior notice. However, price changes will not affect orders that have already been confirmed.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                In the event of a pricing error, we will contact you to inform you of the correct price. You will have the option to proceed with the order at the correct price or cancel your order for a full refund.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                6. Shipping and Delivery
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>6.1 Delivery Areas:</strong> We currently offer delivery within Ahmedabad and surrounding areas. Delivery charges may apply based on your location and order value.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>6.2 Free Delivery:</strong> Orders above ₹500 qualify for free delivery within Ahmedabad city limits.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>6.3 Delivery Time:</strong> We aim to deliver orders within 2-5 business days. Delivery times may vary based on product availability and your location. We are not responsible for delays caused by unforeseen circumstances, courier service delays, or force majeure events.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>6.4 Delivery Confirmation:</strong> Please ensure that someone is available to receive the delivery at the provided address. If delivery cannot be completed, we will attempt redelivery or contact you for further instructions.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                7. Returns and Refunds
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>7.1 Return Policy:</strong> We accept returns within 7 days of purchase for unused items in their original packaging with the receipt. The following conditions apply:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                <li>Items must be in original, unused condition</li>
                <li>Original packaging and tags must be intact</li>
                <li>Receipt or proof of purchase is required</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>7.2 Non-Returnable Items:</strong> The following items cannot be returned for hygiene and safety reasons:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                <li>Opened stationery sets</li>
                <li>Personalized or customized items</li>
                <li>Gift cards</li>
                <li>Sale items marked &ldquo;Final Sale&rdquo;</li>
                <li>Opened or used consumable items</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>7.3 Refund Process:</strong> Once we receive and inspect your returned item, we will process your refund within 7-10 business days. Refunds will be issued to the original payment method. Shipping charges are non-refundable unless the return is due to our error or a defective product.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <strong>7.4 Damaged or Defective Items:</strong> If you receive a damaged or defective item, please contact us within 48 hours of delivery with photos of the damage. We will arrange for a replacement or full refund, including shipping charges.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                All content on our website and in our store, including text, graphics, logos, images, and software, is the property of THE SCRIBOR — House of Paper or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To the fullest extent permitted by law, THE SCRIBOR — House of Paper shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
              </ul>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                10. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.
              </p>

              <h2 className="font-poppins font-bold text-2xl text-neutral-text dark:text-white mt-8 mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For questions or concerns regarding these Terms and Conditions, please contact us:
              </p>
              <div className="bg-neutral-bg dark:bg-slate-900 p-6 rounded-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>THE SCRIBOR — House of Paper</strong><br />
                  {/* EDITABLE: Add your contact information */}
                  Email: <a href="mailto:legal@thescribor.com" className="text-primary-teal hover:underline">legal@thescribor.com</a><br />
                  Phone: +91-XXXXXXXXXX<br />
                  Address: [Street Address], Ahmedabad, Gujarat 380001, India
                </p>
              </div>

              <div className="bg-primary-teal/10 dark:bg-primary-teal/20 border-l-4 border-primary-teal p-6 rounded mt-8">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Acknowledgment:</strong> By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
