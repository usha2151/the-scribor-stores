'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import Accordion from '../components/Accordion'
import Modal from '../components/Modal'
import ContactForm from '../components/ContactForm'
import { services, faqs } from '@/lib/data'

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceCta = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <>
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-teal to-primary-sky text-white">
          <div className="container-custom text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              From retail shopping to corporate gifting, we offer comprehensive solutions for all your stationery needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-4">
                What We Offer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive stationery solutions tailored to your needs — from individual purchases to bulk corporate orders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={service.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ServiceCard service={service} onCtaClick={handleServiceCta} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section id="categories" className="section-padding bg-neutral-bg dark:bg-slate-900">
          <div className="container-custom">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-12 text-center">
              Product Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Books */}
              <div id="books" className="card p-6">
                <h3 className="font-poppins font-semibold text-2xl text-neutral-text dark:text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">📚</span>
                  Books
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Fiction, non-fiction, bestsellers, academic books, children&apos;s literature, and more. Carefully curated for every reader.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Fiction & Non-Fiction
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Academic & Reference
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Children&apos;s Books
                  </li>
                </ul>
              </div>

              {/* School Supplies */}
              <div id="school" className="card p-6">
                <h3 className="font-poppins font-semibold text-2xl text-neutral-text dark:text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">🎒</span>
                  School Supplies
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Everything students need — notebooks, pens, pencils, geometry sets, bags, lunch boxes, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Notebooks & Diaries
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Writing Instruments
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    School Bags & Accessories
                  </li>
                </ul>
              </div>

              {/* Office Supplies */}
              <div id="office" className="card p-6">
                <h3 className="font-poppins font-semibold text-2xl text-neutral-text dark:text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">💼</span>
                  Office Supplies
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Professional workspace essentials — planners, organizers, premium pens, desk accessories, and filing solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Planners & Organizers
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Premium Writing Tools
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Desk Organization
                  </li>
                </ul>
              </div>

              {/* Gifts */}
              <div id="gifts" className="card p-6">
                <h3 className="font-poppins font-semibold text-2xl text-neutral-text dark:text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">🎁</span>
                  Gifts
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Thoughtfully curated gift sets, hampers, and unique items perfect for birthdays, anniversaries, and celebrations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Gift Hampers
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Personalized Items
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Special Occasion Gifts
                  </li>
                </ul>
              </div>

              {/* Art Supplies */}
              <div id="art" className="card p-6">
                <h3 className="font-poppins font-semibold text-2xl text-neutral-text dark:text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">🎨</span>
                  Art Supplies
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Premium materials for artists and hobbyists — paints, brushes, canvases, sketchbooks, and specialty papers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Paints & Brushes
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Sketchbooks & Canvas
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Specialty Art Papers
                  </li>
                </ul>
              </div>

              {/* Corporate Gifts */}
              <div id="corporate" className="card p-6">
                <h3 className="font-poppins font-semibold text-2xl text-neutral-text dark:text-white mb-3 flex items-center">
                  <span className="text-3xl mr-3">🏢</span>
                  Corporate Gifts
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Bulk orders with logo customization for employee gifts, client appreciation, and corporate events.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Logo Printing
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Bulk Discounts
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-teal mr-2">•</span>
                    Custom Packaging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom max-w-4xl">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion items={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-accent text-white">
          <div className="container-custom text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Visit our store or get in touch for custom orders, bulk purchases, or any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-white text-accent-coral hover:bg-gray-100"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-accent-coral transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Quote Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedService ? `Request Quote: ${selectedService.title}` : 'Request Quote'}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Fill out the form below and we&apos;ll get back to you within 24 hours with a customized quote.
        </p>
        <ContactForm />
      </Modal>
    </>
  )
}
