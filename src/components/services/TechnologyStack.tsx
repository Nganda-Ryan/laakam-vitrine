import React from 'react'
import TechStakCard from '../cards/TechStakCard'
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
            <TechStakCard
              key={index}
              title={category.title}
              technologies={category.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  )
}