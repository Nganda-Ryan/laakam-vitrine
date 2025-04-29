import React from 'react'
import DevProccessCard from '../cards/DevProccessCard'
export function ProcessSection() {
  const steps = [
    {
      title: 'Discovery & Planning',
      description:
        'We analyze your requirements and create a detailed roadmap.',
      items: [
        'Requirements gathering',
        'Technical analysis',
        'Project planning',
      ],
    },
    {
      title: 'Design & Architecture',
      description: 'Creating the blueprint for your solution.',
      items: [
        'System architecture',
        'UI/UX design',
        'Technical specifications',
      ],
    },
    {
      title: 'Development & Testing',
      description: 'Building and validating your solution.',
      items: ['Agile development', 'Quality assurance', 'Performance testing'],
    },
    {
      title: 'Deployment & Support',
      description: 'Launching and maintaining your solution.',
      items: ['Production deployment', 'Monitoring', 'Ongoing support'],
    },
  ]
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to delivering high-quality solutions
          </p>
        </div>
        <div className="grid gap-8 relative">
          {steps.map((step, index) => (
            <DevProccessCard
              key={index}
              index={index}
              title={step.title}
              description={step.description}
              items={step.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
