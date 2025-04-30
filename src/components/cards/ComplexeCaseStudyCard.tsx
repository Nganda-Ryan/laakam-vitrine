import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'
import Link from 'next/link'
import Image from 'next/image'
import { ComplexeCaseStudyProps } from '@/types/cardsTypes'
import { ArrowRight } from 'lucide-react'

const ComplexeCaseStudyCard = ({ client, description, image, link, metrics, title}: ComplexeCaseStudyProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            {/* Wrapper div pour appliquer l'arrondi et le débordement */}
            <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <Link
                    href={link}
                    className="group block"
                >
                    <div className="aspect-video overflow-hidden">
                        <Image
                            height={800}
                            width={800}
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-primary mb-4">{client}</p>
                        <p className="text-muted-foreground mb-4">{description}</p>
                        <div className="space-y-2 mb-6">
                        {metrics.map((metric, i) => (
                            <div key={i} className="text-sm text-foreground/80">
                            • {metric}
                            </div>
                        ))}
                        </div>
                        <div className="flex items-center text-primary font-medium">
                        View Case Study{' '}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default ComplexeCaseStudyCard