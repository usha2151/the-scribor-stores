'use client'

import Link from 'next/link'
import { categories } from '@/lib/data'
import useReveal from '@/lib/useReveal'

export default function CategoryGrid() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="section-padding bg-neutral-bg dark:bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-4">
            Explore Our Collections
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From books to art supplies, find everything you need in our carefully curated categories.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
            isVisible ? 'reveal active' : 'reveal'
          }`}
        >
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.link}
              className="card p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-2 group-hover:text-primary-teal transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {category.shortDesc}
                  </p>
                  <span className="text-primary-teal font-semibold text-sm inline-flex items-center group-hover:gap-2 transition-all">
                    Explore
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
