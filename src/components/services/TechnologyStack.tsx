"use client"

import React from 'react'
import { motion } from 'framer-motion'
export function TechnologyStack() {
  const categories = [
    {
      title: 'Frontend Development',
      technologies: [
        'React.js',
        'TypeScript',
        'Next.js',
        'Vue.js',
        'Angular',
        'Tailwind CSS',
        'Material UI',
        'Redux',
        'GraphQL',
      ],
    },
    {
      title: 'Backend Development',
      technologies: [
        'Node.js',
        'Python',
        'Java',
        'C#',
        '.NET Core',
        'Express.js',
        'Django',
        'Spring Boot',
      ],
    },
    {
      title: 'Mobile Development',
      technologies: [
        'React Native',
        'Flutter',
        'iOS (Swift)',
        'Android (Kotlin)',
        'Xamarin',
        'Ionic',
      ],
    },
    {
      title: 'Cloud & DevOps',
      technologies: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Terraform',
        'GitHub Actions',
      ],
    },
  ]
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            We use cutting-edge technologies to build modern, scalable solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
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
              className="bg-background rounded-lg p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}