import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'
import { DevProcessCardProps } from '@/types/cardsTypes'
import { CheckCircle2 } from 'lucide-react'

const DevProccessCard = ({index, description,items,title}: DevProcessCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            <div key={index} className="relative flex items-start gap-4 group">
                <div className="hidden md:flex items-center absolute top-0 left-[20px] h-full -z-10">
                    <div className="w-px h-full bg-border group-hover:bg-primary transition-colors duration-300" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background border border-border group-hover:border-primary group-hover:text-primary flex items-center justify-center transition-colors duration-300">
                    {index + 1}
                </div>


                <div className="flex-1 bg-background p-6 rounded-lg border border-border group-hover:border-primary/20 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-3">{title}</h3>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <ul className="space-y-2">
                    {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                            {item}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default DevProccessCard