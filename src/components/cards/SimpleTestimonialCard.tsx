import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'
import Image from 'next/image'
import { SimpleTestimonialCardProps } from '@/types/cardsTypes'

const SimpleTestimonialCard = ({author, company, image, position, quote}: SimpleTestimonialCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation="fade-up">
        <div className="bg-background p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <Image
                    src={image}
                    alt={author}
                    height={50}
                    width={50}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <blockquote className="text-lg mb-4">
                        &quot;{quote}&quot;
                    </blockquote>
                    <div>
                        <div className="font-semibold">{author}</div>
                        <div className="text-sm text-muted-foreground">
                        {position}, {company}
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default SimpleTestimonialCard