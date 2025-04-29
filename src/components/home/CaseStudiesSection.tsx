import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
// import Image from 'next/image'
import CaseStudyCard from '../cards/CaseStudyCard'
export function CaseStudiesSection() {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
            <CaseStudyCard 
              key={index}
              image={study.image}
              title={study.title}
              description={study.description}
              category={study.category}
              link={study.link}

            />
          ))}
        </div>
      </div>
    </section>
  )
}
