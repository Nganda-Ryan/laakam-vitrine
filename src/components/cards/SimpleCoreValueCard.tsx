import { SimpleCoreValueCardProps } from '@/types/cardsTypes'
import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'

const SimpleCoreValueCard = ({description, icon, title}: SimpleCoreValueCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            <div
                className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default SimpleCoreValueCard