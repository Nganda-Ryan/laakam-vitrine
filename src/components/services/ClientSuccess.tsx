import React from 'react'
import { Users, TrendingUp, Award, Globe } from 'lucide-react'
import SimpleTestimonialCard from '../cards/SimpleTestimonialCard'
import MetricCard from '../cards/MetricCard'
export function ClientSuccess() {
  const metrics = [
    {
      icon: <Users className="h-8 w-8" />,
      value: 500,
      suffix: '+',
      label: 'Clients Served',
      description: 'Across various industries',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'In project delivery',
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 150,
      suffix: '+',
      label: 'Awards Won',
      description: 'Industry recognition',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: 30,
      suffix: '+',
      label: 'Countries',
      description: 'Global presence',
    },
  ]
  const testimonials = [
    {
      quote:
        "LAAKAM Cloud's expertise in custom software development helped us increase operational efficiency by 40%.",
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'Global Retail Solutions',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
    {
      quote:
        'Their cloud migration services were seamless and resulted in significant cost savings for our organization.',
      author: 'Michael Chen',
      position: 'VP of Technology',
      company: 'FinTech Innovations',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    },
  ]
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground">
            Our success is measured by the success of our clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <SimpleTestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
