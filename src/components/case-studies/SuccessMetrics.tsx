import React from 'react'
import { motion } from 'framer-motion'
import { Counter } from '../shared/Counter'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'
export function SuccessMetrics() {
  const metrics = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 500,
      prefix: '$',
      suffix: 'M+',
      label: 'Revenue Generated',
      description: 'For our clients through digital transformation',
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 150,
      suffix: '+',
      label: 'Enterprise Clients',
      description: 'Trust us with their digital success',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: 45,
      suffix: '%',
      label: 'Efficiency Increase',
      description: 'Average improvement in business processes',
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Based on post-project surveys',
    },
  ]
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Impact Through Innovation
          </h2>
          <p className="text-lg opacity-90">
            Measurable results that demonstrate our commitment to client success
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                {metric.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-3">
                <Counter
                  prefix={metric.prefix}
                  end={metric.value}
                  suffix={metric.suffix}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm opacity-90">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}