import React from 'react'
import { Check, X } from 'lucide-react'
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
            <div
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden"
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span
                        className={
                          !feature.included ? 'text-muted-foreground' : ''
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
