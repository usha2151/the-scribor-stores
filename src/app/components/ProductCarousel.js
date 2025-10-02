'use client'

import { useState, useEffect } from 'react'
import { products } from '@/lib/data'
import useReveal from '@/lib/useReveal'
import { useCart } from '../../contexts/CartContext'
import Toast from './Toast'

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, isVisible] = useReveal()
  const { addToCart } = useCart()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  
  const bestsellers = products.filter(p => p.bestseller)
  const itemsPerPage = 3
  const maxIndex = Math.max(0, bestsellers.length - itemsPerPage)

  useEffect(() => {
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [maxIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setToastMessage(`${product.title} added to cart!`)
    setShowToast(true)
  }

  return (
    <>
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    <section className="section-padding bg-white dark:bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-4">
            Bestsellers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Customer favorites — handpicked products that bring joy to your workspace and creativity.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative ${isVisible ? 'reveal active' : 'reveal'}`}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {bestsellers.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="card p-6 h-full">
                    {/* Product Image Placeholder */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-4 h-48 flex items-center justify-center overflow-hidden">
                      <span className="text-6xl">{product.category === 'Art Supplies' ? '🎨' : product.category === 'Books' ? '📚' : product.category === 'Gifts' ? '🎁' : '✏️'}</span>
                      {/* EDITABLE: Replace with actual product images */}
                    </div>

                    {/* Product Info */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-poppins font-semibold text-lg text-neutral-text dark:text-white">
                        {product.title}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-accent-coral/10 text-accent-coral text-xs font-semibold rounded">
                        Bestseller
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {product.shortDesc}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-poppins font-bold text-2xl text-primary-teal">
                        ₹{product.price}
                      </span>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {bestsellers.length > itemsPerPage && (
            <>
              <button
                onClick={goToPrev}
                aria-label="Previous products"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-teal"
              >
                <svg
                  className="w-6 h-6 text-primary-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                aria-label="Next products"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-teal"
              >
                <svg
                  className="w-6 h-6 text-primary-teal"
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
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-teal w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
