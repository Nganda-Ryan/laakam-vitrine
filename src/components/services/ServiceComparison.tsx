import React from 'react'
import PlanCard from '../cards/PlanCard'
export function ServiceComparison() {
  const plans = [
    {
      name: 'Startup',
      description: 'Perfect for emerging businesses',
      price: '$5,000',
      features: [
        {
          name: 'Requirements Analysis',
          included: true,
        },
        {
          name: 'UI/UX Design',
          included: true,
        },
        {
          name: 'Basic Development',
          included: true,
        },
        {
          name: 'Testing & QA',
          included: true,
        },
        {
          name: 'Deployment',
          included: true,
        },
        {
          name: '24/7 Support',
          included: false,
        },
        {
          name: 'Custom Integrations',
          included: false,
        },
        {
          name: 'Advanced Security',
          included: false,
        },
      ],
    },
    {
      name: 'Business',
      description: 'For growing companies',
      price: '$15,000',
      features: [
        {
          name: 'Requirements Analysis',
          included: true,
        },
        {
          name: 'UI/UX Design',
          included: true,
        },
        {
          name: 'Advanced Development',
          included: true,
        },
        {
          name: 'Testing & QA',
          included: true,
        },
        {
          name: 'Deployment',
          included: true,
        },
        {
          name: '24/7 Support',
          included: true,
        },
        {
          name: 'Custom Integrations',
          included: true,
        },
        {
          name: 'Advanced Security',
          included: false,
        },
      ],
    },
    {
      name: 'Enterprise',
      description: 'Full-scale solutions',
      price: 'Custom',
      features: [
        {
          name: 'Requirements Analysis',
          included: true,
        },
        {
          name: 'UI/UX Design',
          included: true,
        },
        {
          name: 'Enterprise Development',
          included: true,
        },
        {
          name: 'Testing & QA',
          included: true,
        },
        {
          name: 'Deployment',
          included: true,
        },
        {
          name: '24/7 Support',
          included: true,
        },
        {
          name: 'Custom Integrations',
          included: true,
        },
        {
          name: 'Advanced Security',
          included: true,
        },
      ],
    },
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Service Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect service package for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
