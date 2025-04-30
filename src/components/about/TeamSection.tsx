import React from 'react'
import TeamMemberCard from '../cards/TeamMemberCard'
export function TeamSection() {
  const team = [
    {
      name: 'Sarah Anderson',
      role: 'CEO & Founder',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: '15+ years of experience in technology consulting and enterprise solutions.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@laakam.it',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Former Google engineer with expertise in cloud architecture and AI.',
      linkedin: '#',
      twitter: '#',
      email: 'michael@here.com',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Award-winning UX designer with a passion for user-centered design.',
      linkedin: '#',
      twitter: '#',
      email: 'emily@laakam.it',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      bio: 'Full-stack expert specializing in scalable enterprise applications.',
      linkedin: '#',
      twitter: '#',
      email: 'david@laakam.it',
    },
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground">
            The talented individuals behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              linkedin={member.linkedin}
              twitter={member.twitter}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  )
}