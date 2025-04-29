import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'
import { PlanCardProps } from '@/types/cardsTypes'
import { Check, X } from 'lucide-react'

const PlanCard = ({description, features, name, price} : PlanCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            <div
              className="bg-background rounded-lg border border-border overflow-hidden"
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="text-3xl font-bold text-primary">
                  {price}
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span
                        className={
                          !feature.included ? 'text-muted-foreground' : ''
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default PlanCard