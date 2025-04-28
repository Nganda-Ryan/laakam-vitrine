import React from 'react'
import { CheckCircle2 } from 'lucide-react'
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
            <div key={index} className="relative flex items-start gap-4 group">
              <div className="hidden md:flex items-center absolute top-0 left-[20px] h-full -z-10">
                <div className="w-px h-full bg-border group-hover:bg-primary transition-colors duration-300" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background border border-border group-hover:border-primary group-hover:text-primary flex items-center justify-center transition-colors duration-300">
                {index + 1}
              </div>


              <div className="flex-1 bg-background p-6 rounded-lg border border-border group-hover:border-primary/20 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
