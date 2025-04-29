import React from 'react'
import {
  Code2,
  Cloud,
  Database,
  Lock,
  Smartphone,
  Globe,
  Cpu,
  BarChart,
} from 'lucide-react'
import ExpertiseCard from '../cards/ExpertiseCard'
export function ServicesList() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Custom Software Development',
      description:
        'Tailored solutions built to address your unique business challenges and requirements.',
      features: [
        'Full-stack development',
        'API integration',
        'Legacy system modernization',
        'Scalable architecture',
      ],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services to modernize your infrastructure and optimize operations.',
      features: [
        'Cloud migration',
        'Infrastructure optimization',
        'Serverless architecture',
        'DevOps automation',
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile App Development',
      description:
        'Cross-platform and native mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS & Android development',
        'React Native expertise',
        'Mobile UI/UX design',
        'App store optimization',
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business intelligence',
        'Data visualization',
        'Predictive analytics',
        'Real-time reporting',
      ],
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Cybersecurity',
      description:
        'Protect your digital assets with comprehensive security solutions and best practices.',
      features: [
        'Security audits',
        'Penetration testing',
        'Compliance consulting',
        'Security training',
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Digital Transformation',
      description:
        'Strategic consulting and implementation to drive your digital evolution.',
      features: [
        'Digital strategy',
        'Process automation',
        'Technology roadmap',
        'Change management',
      ],
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description:
        'Leverage artificial intelligence to automate processes and gain competitive advantage.',
      features: [
        'ML model development',
        'Natural language processing',
        'Computer vision',
        'AI integration',
      ],
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Enterprise Solutions',
      description:
        'Comprehensive enterprise-grade solutions to streamline your business operations.',
      features: [
        'ERP implementation',
        'CRM customization',
        'Workflow automation',
        'System integration',
      ],
    },
  ]
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Services & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions tailored to meet your business objectives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
           <ExpertiseCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
           />
          ))}
        </div>
      </div>
    </section>
  )
}
