import React from 'react'
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
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full" />
                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div
                    className={`bg-background p-6 rounded-lg border border-border ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                  >
                    <div className="text-primary font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}