import React from 'react'
import ScrollAnimation from '../animations/ScrollAnimation'
import { MileStoneCardProps } from '@/types/cardsTypes'

const MileStoneCard = ({description, index, title, year}: MileStoneCardProps) => {
  return (
    <ScrollAnimation animation="fade-up">
        <div
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
            >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full" />
            {/* Content */}
            <div className="ml-12 md:ml-0 md:w-1/2">
                <div
                className={`bg-background p-6 rounded-lg border border-border ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                >
                <div className="text-primary font-bold text-xl mb-2">
                    {year}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                    {title}
                </h3>
                <p className="text-muted-foreground">
                    {description}
                </p>
                </div>
            </div>
        </div>
    </ScrollAnimation>
  )
}

export default MileStoneCard