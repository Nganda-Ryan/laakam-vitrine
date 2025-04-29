import Image from 'next/image'
import React from 'react'
export function TechStackSection() {
  const techLogos = [
    {
      name: 'Salesforce',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    },
    {
      name: 'React',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'Angular',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    },
    {
      name: 'Vue.js',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    },
    {
      name: 'Node.js',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'AWS',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'Azure',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
    },
    {
      name: 'Google Cloud',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    },
    {
      name: 'Flutter',
      url: '/images/flutter-logo.svg',
    },
    {
      name: 'TypeScript',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
  ]
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage cutting-edge technologies to deliver scalable,
            efficient, and future-proof solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {techLogos.map((tech, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-32 h-16 flex items-center justify-center group">
                <Image
                    height={400}
                    width={400}
                  src={tech.url}
                  alt={`${tech.name} logo`}
                  className="max-h-12 max-w-full object-contain transition-all duration-300 sm:grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
