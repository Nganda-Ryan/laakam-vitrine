import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'
import { MetricCardProps } from '@/types/cardsTypes'
import { Counter } from '../shared/Counter'

const MetricCard = ({description, icon, label, value, suffix}: MetricCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            <div className="bg-background p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {icon}
              </div>
              <div className="text-3xl font-bold mb-2">
                <Counter end={value} suffix={suffix} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{label}</h3>
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default MetricCard