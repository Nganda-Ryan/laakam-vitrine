import React from 'react'
import { Trophy, Heart, Lightbulb, Users, Shield, Rocket } from 'lucide-react'
import SimpleCoreValueCard from '../cards/SimpleCoreValueCard'
export function ValuesSection() {
  const values = [
    {
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, from code quality to client service.',
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Passion',
      description:
        'Our team is driven by a genuine passion for technology and innovation.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: 'Innovation',
      description:
        'We constantly push boundaries to find creative solutions to complex problems.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork and open communication.',
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'Integrity',
      description:
        'We maintain the highest standards of honesty and ethical conduct.',
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-600" />,
      title: 'Growth',
      description:
        "We're committed to continuous learning and professional development.",
    },
  ]
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide our work and shape our culture
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <SimpleCoreValueCard
              key={index}
              description={value.description}
              icon={value.icon}
              title={value.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
