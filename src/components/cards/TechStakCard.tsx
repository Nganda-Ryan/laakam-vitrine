import { TechStackCardProps } from '@/types/cardsTypes'
import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'

const TechStakCard = ({title, technologies} : TechStackCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                    <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default TechStakCard