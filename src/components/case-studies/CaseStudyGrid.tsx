import React from 'react'
import { ComplexeCaseStudyType } from '@/types'
import ComplexeCaseStudyCard from '../cards/ComplexeCaseStudyCard'
interface CaseStudyGridProps {
  filter: string
}
export function CaseStudyGrid({ filter }: CaseStudyGridProps) {
  const caseStudies: ComplexeCaseStudyType [] = [
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
        <ComplexeCaseStudyCard
          key={index}
          title={study.title}
          image={study.image}
          description={study.description}
          metrics={study.metrics}
          client={study.client}
          link={study.link}
        />
      ))}
    </div>
  )
}
