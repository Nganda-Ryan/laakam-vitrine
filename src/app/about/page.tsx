import React from 'react'
import { CompanyStory } from '@/components/about/CompanyStory'
import { TeamSection } from '@/components/about/TeamSection'
import { ValuesSection } from '@/components/about/ValuesSection'
import { TimelineSection } from '@/components/about/TimelineSection'
import { CertificationsSection } from '@/components/about/CertificationsSection'
import { WorkspaceSection } from '@/components/about/WorkspaceSection'
const About = () => {
  return (
    <div className="w-full">
      <CompanyStory />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CertificationsSection />
      <WorkspaceSection />
    </div>
  )
}

export default About;
