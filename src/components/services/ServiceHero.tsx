import React from 'react'
import { Code2, Server, Cloud, Smartphone } from 'lucide-react'
import { Service } from '@/types'
import SimpleServiceCard from '../cards/SimpleServiceCard'
export function ServiceHero() {
  const serviceList: Service []= [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Enterprise Solutions',
      description:
        'Scalable and secure solutions for large organizations',
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Custom Development',
      description:
        'Tailored applications built for your specific needs',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Services',
      description: 'Modern cloud infrastructure and migration services',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
    },
  ]
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transform Your Business with
            <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {' Modern Technology'}
              </span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We deliver cutting-edge solutions that drive innovation and
            accelerate digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <SimpleServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
