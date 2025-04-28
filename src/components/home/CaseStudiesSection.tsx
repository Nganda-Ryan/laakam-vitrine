"use client"

import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
export function CaseStudiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const caseStudies = [
    {
      title: 'Enterprise CRM Transformation',
      category: 'Salesforce Development',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description:
        'Modernized CRM system for a Fortune 500 company, increasing sales efficiency by 35%.',
      link: '/case-studies/crm-transformation',
    },
    {
      title: 'E-commerce Platform Redesign',
      category: 'Web Development',
      image:
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description:
        'Complete overhaul of UX/UI and backend systems, resulting in 50% higher conversion rate.',
      link: '/case-studies/ecommerce-platform',
    },
    {
      title: 'Cloud Migration & Optimization',
      category: 'Cloud Solutions',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description:
        'Migrated legacy infrastructure to AWS, reducing operational costs by 40%.',
      link: '/case-studies/cloud-migration',
    },
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore how we&apos;ve helped businesses overcome challenges and
              achieve their goals through innovative technology solutions.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View all case studies <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={study.link}
              className="group relative block overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={study.image}
                  height={800}
                  width={800}
                  alt={study.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
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
          ))}
        </div>
      </div>
    </section>
  )
}
