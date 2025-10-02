'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    file: null,
    consent: false,
    honeypot: '', // Invisible field to catch bots
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState('')

  const interestOptions = [
    { value: 'general', label: 'General Inquiry', icon: '💬' },
    { value: 'product', label: 'Product Information', icon: '📦' },
    { value: 'corporate', label: 'Corporate Gifting', icon: '🎁' },
    { value: 'bulk', label: 'Bulk Orders', icon: '📊' },
    { value: 'custom', label: 'Custom Orders', icon: '✨' },
    { value: 'event', label: 'Event/Return Gifts', icon: '🎉' },
    { value: 'workshop', label: 'Workshop/Event Inquiry', icon: '🎨' },
    { value: 'other', label: 'Other', icon: '📝' },
  ]

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check honeypot field
    if (formData.honeypot) {
      console.log('Bot detected')
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      Object.keys(formData).forEach(key => {
        if (key !== 'honeypot' && formData[key]) {
          submitData.append(key, formData[key])
        }
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
          file: null,
          consent: false,
          honeypot: '',
        })
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="block font-semibold text-neutral-text dark:text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
            required
            placeholder="John Doe"
            className={`w-full px-4 py-3.5 rounded-xl border-2 ${
              focusedField === 'name'
                ? 'border-primary-teal bg-primary-teal/5'
                : 'border-gray-200 dark:border-gray-600'
            } bg-white dark:bg-slate-700 text-neutral-text dark:text-white focus:outline-none transition-all duration-300 placeholder:text-gray-400`}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="block font-semibold text-neutral-text dark:text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
            required
            placeholder="john@example.com"
            className={`w-full px-4 py-3.5 rounded-xl border-2 ${
              focusedField === 'email'
                ? 'border-primary-teal bg-primary-teal/5'
                : 'border-gray-200 dark:border-gray-600'
            } bg-white dark:bg-slate-700 text-neutral-text dark:text-white focus:outline-none transition-all duration-300 placeholder:text-gray-400`}
          />
        </div>
      </div>

      {/* Phone & Interest Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="relative">
          <label htmlFor="phone" className="block font-semibold text-neutral-text dark:text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField('')}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full px-4 py-3.5 rounded-xl border-2 ${
              focusedField === 'phone'
                ? 'border-primary-teal bg-primary-teal/5'
                : 'border-gray-200 dark:border-gray-600'
            } bg-white dark:bg-slate-700 text-neutral-text dark:text-white focus:outline-none transition-all duration-300 placeholder:text-gray-400`}
          />
        </div>

        {/* Interest */}
        <div className="relative">
          <label htmlFor="interest" className="block font-semibold text-neutral-text dark:text-white mb-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            I&apos;m Interested In <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              onFocus={() => setFocusedField('interest')}
              onBlur={() => setFocusedField('')}
              required
              className={`w-full px-4 py-3.5 rounded-xl border-2 ${
                focusedField === 'interest'
                  ? 'border-primary-teal bg-primary-teal/5'
                  : 'border-gray-200 dark:border-gray-600'
              } bg-white dark:bg-slate-700 text-neutral-text dark:text-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer`}
            >
              <option value="">Select an option</option>
              {interestOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.icon} {option.label}
                </option>
              ))}
            </select>
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <label htmlFor="message" className="block font-semibold text-neutral-text dark:text-white mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField('')}
          required
          rows={5}
          placeholder="Tell us how we can help you..."
          className={`w-full px-4 py-3.5 rounded-xl border-2 ${
            focusedField === 'message'
              ? 'border-primary-teal bg-primary-teal/5'
              : 'border-gray-200 dark:border-gray-600'
          } bg-white dark:bg-slate-700 text-neutral-text dark:text-white focus:outline-none transition-all duration-300 resize-none placeholder:text-gray-400`}
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-400">
          {formData.message.length} characters
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 w-5 h-5 text-primary-teal border-gray-300 rounded focus:ring-primary-teal cursor-pointer"
        />
        <label htmlFor="consent" className="ml-3 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
          I agree to the{' '}
          <a href="/privacy" className="text-primary-teal hover:underline font-semibold">
            Privacy Policy
          </a>{' '}
          and consent to being contacted by THE SCRIBOR team. <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Status Message */}
      {status.message && (
        <div
          className={`p-4 rounded-xl border-2 ${
            status.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300'
              : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
          } flex items-start gap-3 animate-slide-up`}
        >
          {status.type === 'success' ? (
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <div>
            <p className="font-semibold mb-1">
              {status.type === 'success' ? 'Message Sent Successfully!' : 'Oops! Something went wrong'}
            </p>
            <p className="text-sm">{status.message}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full py-4 px-6 bg-gradient-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Your Message...
            </>
          ) : (
            <>
              Send Message
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </button>

      {/* Help Text */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        We typically respond within 24 hours during business days
      </p>
    </form>
  )
}
