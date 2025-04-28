"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Counter } from '../shared/Counter'
import { Users, TrendingUp, Award, Globe } from 'lucide-react'
import Image from 'next/image'
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-background p-6 rounded-lg border border-border text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-2">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  height={50}
                  width={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <blockquote className="text-lg mb-4">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
