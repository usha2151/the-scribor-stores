import Link from 'next/link'

export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        aria-label="THE SCRIBOR Logo"
      >
        {/* Stylized paper/book icon with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#6DD3FF" />
          </linearGradient>
        </defs>
        
        {/* Book/Paper shape */}
        <rect x="8" y="6" width="24" height="28" rx="2" fill="url(#logoGradient)" />
        <rect x="12" y="10" width="16" height="2" rx="1" fill="white" opacity="0.8" />
        <rect x="12" y="15" width="16" height="2" rx="1" fill="white" opacity="0.8" />
        <rect x="12" y="20" width="12" height="2" rx="1" fill="white" opacity="0.8" />
        
        {/* Pen accent */}
        <path
          d="M28 25 L35 32 L33 34 L26 27 Z"
          fill="#FF758C"
        />
        <circle cx="34" cy="33" r="2" fill="#FFB199" />
      </svg>
      
      <div className="flex flex-col leading-tight">
        <span className="font-poppins font-bold text-xl text-gradient-primary">
          THE SCRIBOR
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-inter">
          House of Paper
        </span>
      </div>
    </Link>
  )
}
