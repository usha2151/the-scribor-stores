'use client'

import { whyChooseUs } from '../../lib/data'
import useReveal from '../../lib/useReveal'

export default function WhyChooseUs() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-bg via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-teal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-coral/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary-teal/10 text-primary-teal dark:bg-primary-teal/20 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-text dark:text-white mb-6">
            Why Choose{' '}
            <span className="text-gradient-primary">THE SCRIBOR</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We&lsquo;re more than just a store &mdash; we&lsquo;re your partner in creativity and productivity. 
            Discover what makes us Ahmedabad&lsquo;s favorite stationery destination.
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ${
            isVisible ? 'reveal active' : 'reveal'
          }`}
        >
          {whyChooseUs.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card */}
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-teal/30 dark:hover:border-primary-teal/50 hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-teal/10 to-primary-sky/10 dark:from-primary-teal/20 dark:to-primary-sky/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </span>
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-coral rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-neutral-text dark:text-white mb-3 group-hover:text-primary-teal dark:group-hover:text-primary-sky transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-teal/0 via-primary-sky/0 to-accent-coral/0 group-hover:from-primary-teal/5 group-hover:via-primary-sky/5 group-hover:to-accent-coral/5 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-primary group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-neutral-text dark:text-white">500+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-neutral-text dark:text-white">5+ Years</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Serving Ahmedabad</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-2xl text-neutral-text dark:text-white">4.9/5</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-primary-teal dark:text-primary-sky font-semibold hover:gap-4 transition-all duration-300 group"
          >
            <span>Learn more about our story</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
