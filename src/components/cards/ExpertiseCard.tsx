import React from 'react'
import { Service } from '@/types'
import Tilt from '../animations/Tilt';
import ScrollAnimation from '../animations/ScrollAnimation';

const ExpertiseCard = ({description, icon, title, features}: Service & { index: number; features: string[]; }) => {
  return (
    <Tilt>
      <ScrollAnimation animation='fade-up'>
        <div className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <ul className="space-y-2">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                {feature}
                </li>
            ))}
          </ul>
        </div>
      </ScrollAnimation>
    </Tilt>
  )
}

export default ExpertiseCard