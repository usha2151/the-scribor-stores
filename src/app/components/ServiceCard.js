'use client'

export default function ServiceCard({ service, onCtaClick }) {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="text-5xl mb-4">{service.icon}</div>
      
      <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {service.description}
      </p>

      {service.features && (
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg
                className="w-4 h-4 mr-2 text-primary-teal flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {service.cta && (
        <button
          onClick={() => onCtaClick && onCtaClick(service)}
          className="btn-primary w-full mt-auto"
        >
          {service.cta}
        </button>
      )}
    </div>
  )
}
