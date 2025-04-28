"use client"
import React, { useEffect, useState } from 'react'
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero'
import { CaseStudyGrid } from '@/components/case-studies/CaseStudyGrid'
import { CaseStudyFilters } from '@/components/case-studies/CaseStudyFilters'
import { SuccessMetrics } from '@/components/case-studies/SuccessMetrics'
const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full">
      <CaseStudyHero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <CaseStudyFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <CaseStudyGrid filter={activeFilter} />
        </div>
      </section>
      <SuccessMetrics />
    </div>
  )
}

export default CaseStudies;