import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
interface CaseStudyGridProps {
  filter: string
}
export function CaseStudyGrid({ filter }: CaseStudyGridProps) {
  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign',
      category: 'web',
      image:
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description:
        'Complete overhaul of UX/UI and backend systems, resulting in 50% higher conversion rate.',
      metrics: ['50% higher conversion', '35% more sales', '2x faster loading'],
      client: 'Global Retail Co.',
      link: '/case-studies/ecommerce-platform',
    },
    {
      title: 'Mobile Banking App',
      category: 'mobile',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description:
        'Innovative mobile banking solution with advanced security features and intuitive UX.',
      metrics: ['1M+ downloads', '4.8 star rating', '99.9% uptime'],
      client: 'FinTech Solutions',
      link: '/case-studies/mobile-banking',
    },
    {
      title: 'Cloud Migration Project',
      category: 'cloud',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description:
        'Successful migration of legacy systems to cloud infrastructure with zero downtime.',
      metrics: ['40% cost reduction', 'Zero downtime', '3x faster processing'],
      client: 'Enterprise Corp',
      link: '/case-studies/cloud-migration',
    },
    // Add more case studies as needed
  ].filter((study) => filter === 'all' || study.category === filter)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <Link
          key={index}
          href={study.link}
          className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
        >
          <div className="aspect-video overflow-hidden">
            <Image
                height={800}
                width={800}
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
            <p className="text-sm text-primary mb-4">{study.client}</p>
            <p className="text-muted-foreground mb-4">{study.description}</p>
            <div className="space-y-2 mb-6">
              {study.metrics.map((metric, i) => (
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
      ))}
    </div>
  )
}
