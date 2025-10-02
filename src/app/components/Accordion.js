'use client'

import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="card overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="font-poppins font-semibold text-neutral-text dark:text-white pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-primary-teal flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
