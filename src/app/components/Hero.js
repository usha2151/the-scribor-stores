'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const parallaxSpeed = 0.5
        heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-teal via-primary-sky to-accent-peach pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div ref={heroRef} className="container-custom px-4 md:px-8 py-16 relative z-10 parallax">
        <div className="max-w-4xl mx-auto text-center">
          {/* Promo Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8 animate-fade-up">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
              🎉 Flat 10% Off — Limited time {/* EDITABLE: Promo text */}
            </span>
            <span className="inline-block px-4 py-2 bg-accent-coral/90 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
              🎁 Free gift on purchases ₹500+ {/* EDITABLE: Free gift threshold */}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-up leading-tight">
            Curated stationery &<br />joyful gifts
          </h1>

          {/* Hindi Translation */}
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            चुनी हुई स्टेशनरी और खूबसूरत उपहार
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Everything for school, office, art & celebrations — locally handpicked with love in Ahmedabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/services"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Shop Collections
              <span className="ml-2 text-sm">कलेक्शन देखें</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-primary-teal transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto text-lg"
            >
              Visit Our Store
              <span className="ml-2 text-sm">दुकान पर आइए</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-white">
              <div className="text-3xl font-bold font-poppins">500+</div>
              <div className="text-sm text-white/80">Products</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold font-poppins">1000+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold font-poppins">5★</div>
              <div className="text-sm text-white/80">Rated Service</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold font-poppins">Local</div>
              <div className="text-sm text-white/80">Ahmedabad Store</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
