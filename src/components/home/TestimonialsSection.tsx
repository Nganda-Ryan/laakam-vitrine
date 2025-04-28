'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from '../cards/TestimonialCard' 

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        'LAAKAM CLOUD transformed our outdated systems into a streamlined digital ecosystem. Their expertise in Salesforce development helped us increase our sales efficiency by 40% within just three months.',
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'Global Retail Inc.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
    {
      quote:
        "The mobile application LAAKAM CLOUD developed for us has revolutionized how we engage with customers. Their team's attention to detail and user experience expertise resulted in a 5-star rated app with over 100,000 downloads.",
      author: 'Michael Chen',
      position: 'VP of Digital',
      company: 'NexGen Solutions',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
    {
      quote:
        "Working with LAAKAM CLOUD on our cloud migration strategy saved us countless hours and resources. Their team's technical prowess and project management skills ensured a seamless transition with zero downtime.",
      author: 'Olivia Martinez',
      position: 'Director of Operations',
      company: 'Innovate Financial',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection('left')
    setIsAnimating(true)
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setDirection('right')
    setIsAnimating(true)
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [isAnimating, testimonials.length])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Hear from the businesses we&apos;ve
            helped transform.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? (direction === 'right' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'}`}
            >
              <div className="w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index === currentIndex) return
                  setDirection(index > currentIndex ? 'right' : 'left')
                  setIsAnimating(true)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-border hover:bg-primary/50'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <NavButton onClick={goToPrevious} icon={<ChevronLeft size={20} />} label="Previous testimonial" />
            <NavButton onClick={goToNext} icon={<ChevronRight size={20} />} label="Next testimonial" />
          </div>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 lg:left-0">
            <NavButton onClick={goToPrevious} icon={<ChevronLeft size={20} />} label="Previous testimonial" />
          </div>
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 lg:right-0">
            <NavButton onClick={goToNext} icon={<ChevronRight size={20} />} label="Next testimonial" />
          </div>
        </div>
      </div>
    </section>
  )
}

function NavButton({ onClick, icon, label }: { onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center hover:bg-accent transition-colors"
      aria-label={label}
    >
      {icon}
    </button>
  )
}
