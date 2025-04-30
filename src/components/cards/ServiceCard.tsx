import React from 'react';
import { ServiceCardType } from '@/types/cardsTypes';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Tilt from '../animations/Tilt';
import ScrollAnimation from '../animations/ScrollAnimation';

const ServiceCard = ({description, icon, link, title}: ServiceCardType) => {
  return (
    <Tilt>
      <ScrollAnimation animation='fade-up'>
        <div data-aos="fade-up" className="bg-background rounded-lg p-6 shadow-sm border border-border transition-colors duration-300 hover:shadow-md">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-5">{description}</p>
          <Link href={link} className="inline-flex items-center text-primary hover:underline font-medium">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

      </ScrollAnimation>
    </Tilt>
  )
}

export default ServiceCard