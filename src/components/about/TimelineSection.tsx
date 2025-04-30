import React from 'react'
import MileStoneCard from '../cards/MileStoneCard'
export function TimelineSection() {
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description:
        'Started as a small web development agency with three developers.',
    },
    {
      year: '2012',
      title: 'Enterprise Solutions',
      description:
        'Expanded into enterprise software development and Salesforce consulting.',
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description:
        'Opened offices in London and Singapore, serving clients worldwide.',
    },
    {
      year: '2018',
      title: 'Cloud Innovation',
      description:
        'Launched our cloud solutions division, focusing on digital transformation.',
    },
    {
      year: '2020',
      title: 'Remote Excellence',
      description:
        'Pioneered remote-first culture while maintaining exceptional service quality.',
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Introduced AI-powered solutions to our service offerings.',
    },
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Key milestones that have shaped our growth and success
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-border" />
          {/* Timeline entries */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <MileStoneCard
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}