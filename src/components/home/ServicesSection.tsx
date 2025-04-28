import React from 'react'
import { Server, Code, Smartphone, Cloud } from 'lucide-react'
import ServiceCard from '../cards/ServiceCard'
import { Service } from '@/types'
export function ServicesSection() {
  const services: Service [] = [
    {
      icon: <Server className="h-10 w-10 text-blue-600" />,
      title: 'Salesforce Development',
      description:
        'Custom implementations, integrations, and Lightning components tailored to your business needs.',
      link: '/services/salesforce',
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-600" />,
      title: 'Web Development',
      description:
        'Modern web applications built with React, Angular, Vue.js, and Node.js for optimal performance.',
      link: '/services/web',
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-600" />,
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      link: '/services/mobile',
    },
    {
      icon: <Cloud className="h-10 w-10 text-sky-600" />,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud Platform.',
      link: '/services/cloud',
    },
  ]
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver end-to-end software solutions that drive digital
            transformation and business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
           <ServiceCard
            key={index}
            description={service.description}
            icon={service.icon}
            link={service.link}
            title={service.title}
           />
          ))}
        </div>
      </div>
    </section>
  )
}