import { CaseStudyCardType } from '@/types/cardsTypes'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollAnimation from '../animations/ScrollAnimation'

const CaseStudyCard = (study: CaseStudyCardType) => {
  return (
    <ScrollAnimation animation='fade-up'>
        <Link
            href={study.link}
            className="group relative block overflow-hidden rounded-lg"
        >
            <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                    src={study.image}
                    height={800}
                    width={800}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-sm font-medium px-3 py-1 bg-primary/80 text-primary-foreground rounded-full self-start mb-3">
                    {study.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {study.title}
                </h3>
                <p className="text-white/90 mb-4">{study.description}</p>
                <span className="inline-flex items-center text-white font-medium">
                    Read case study{' '}
                    <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                </span>
                </div>
            </div>
        </Link>
    </ScrollAnimation>
  )
}

export default CaseStudyCard