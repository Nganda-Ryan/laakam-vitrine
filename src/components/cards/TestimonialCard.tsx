"use client"

import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image: string
}

interface Props {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="bg-background rounded-xl p-6 md:p-10 shadow-sm border border-border">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent">
            <Image
                src={testimonial.image}
                height={400}
                width={400}
                alt={testimonial.author}
                className="w-full h-full object-cover"
                />
        </div>
        <div className="flex-1 text-center md:text-left">
          <Quote className="h-10 w-10 text-primary/20 mx-auto md:mx-0 mb-4" />
          <blockquote className="text-lg md:text-xl mb-6">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-muted-foreground">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
