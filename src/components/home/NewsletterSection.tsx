"use client"

import React, { useState } from 'react'
import { Send } from 'lucide-react'
export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email) {
      setError('Please enter your email address')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for the latest tech insights, industry
            trends, and company updates.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-md bg-background/10 border ${error ? 'border-red-400' : 'border-background/20'} text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-background/30 disabled:opacity-50 transition-colors`}
                  disabled={isSubmitting || isSubmitted}
                />
                {error && (
                  <p className="text-red-300 text-sm mt-1 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="px-6 py-3 bg-background text-primary rounded-md font-medium hover:bg-background/90 disabled:opacity-50 transition-all flex items-center justify-center whitespace-nowrap"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : isSubmitted ? (
                  'Subscribed!'
                ) : (
                  <>
                    Subscribe <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="text-green-300 mt-4">
              Thank you for subscribing! Check your inbox for confirmation.
            </p>
          )}
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
