import React from 'react'
import ScrollAnimation from '../animations/ScrollAnimation'
import Tilt from '../animations/Tilt'
import { CertificationCardProps } from '@/types/cardsTypes'
import Image from 'next/image'

const CertificationCard = ({image, name, year}: CertificationCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
                <div
                    className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center"
                >
                    <div className="h-20 flex items-center justify-center mb-4">
                        <Image
                            height={800}
                            width={800}
                            src={image}
                            alt={name}
                            className="max-h-full max-w-[180px] object-contain"
                        />
                    </div>
                    <h3 className="font-semibold mb-2">{name}</h3>
                    <p className="text-sm text-muted-foreground">
                        Certified {year}
                    </p>
                </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default CertificationCard