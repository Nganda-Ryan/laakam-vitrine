import React from 'react'
interface CaseStudyFiltersProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}
export function CaseStudyFilters({
  activeFilter,
  setActiveFilter,
}: CaseStudyFiltersProps) {
  const filters = [
    {
      id: 'all',
      label: 'All Projects',
    },
    {
      id: 'web',
      label: 'Web Development',
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
    },
    {
      id: 'cloud',
      label: 'Cloud Solutions',
    },
    {
      id: 'enterprise',
      label: 'Enterprise Systems',
    },
  ]
  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-2 rounded-full transition-colors ${activeFilter === filter.id ? 'bg-primary text-primary-foreground' : 'bg-accent hover:bg-accent/80 text-foreground'}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}