import { Service } from '@/types'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'

const SimpleServiceCard = ({ description, icon, title}: Service) => {
  return (
    <Tilt>
      <ScrollAnimation animation='fade-up'>
        <div className="group relative bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 text-primary">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
            <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </div>
        </div>
      </ScrollAnimation>
    </Tilt>
  )
}

export default SimpleServiceCard