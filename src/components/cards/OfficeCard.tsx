import React from 'react'
import Tilt from '../animations/Tilt'
import ScrollAnimation from '../animations/ScrollAnimation'
import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { OfficeCardProps } from '@/types/cardsTypes'

const OfficeCard = ({address, city, country, email, hours, image, phone}: OfficeCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation='fade-up'>
            <div className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image
                    height={800}
                    width={800}
                    src={image}
                    alt={`${city} office`}
                    className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{city}</h3>
                <p className="text-primary mb-4">{country}</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <a
                      href={`tel:${phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <a
                      href={`mailto:${email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <p className="text-muted-foreground">{hours}</p>
                  </div>
                </div>
              </div>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default OfficeCard