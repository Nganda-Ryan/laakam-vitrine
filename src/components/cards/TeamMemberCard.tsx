import React from 'react'
import ScrollAnimation from '../animations/ScrollAnimation'
import { TeamMemberCardProps } from '@/types/cardsTypes'
import Tilt from '../animations/Tilt'
import Image from 'next/image'
import { Linkedin, Mail, Twitter } from 'lucide-react'

const TeamMemberCard = ({bio, email, image, linkedin, name, role, twitter}: TeamMemberCardProps) => {
  return (
    <Tilt>
        <ScrollAnimation animation="fade-up">
            <div
              className="group relative bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={image}
                  width={800}
                  height={800}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-primary mb-3">{role}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {bio}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={linkedin}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={twitter}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${name}'s Twitter profile`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Email ${name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
        </ScrollAnimation>
    </Tilt>
  )
}

export default TeamMemberCard