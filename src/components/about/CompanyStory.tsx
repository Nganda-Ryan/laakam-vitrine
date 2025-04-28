import Image from 'next/image'
import React from 'react'
export function CompanyStory() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pioneering Digital
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {' Innovation'}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 -z-10" />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Since 2008, we&apos;ve been at the forefront of digital transformation,
              helping businesses evolve and thrive in an ever-changing
              technological landscape.
            </p>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                What started as a small team of passionate developers has grown
                into a global technology consultancy, trusted by Fortune 500
                companies and innovative startups alike.
              </p>
              <p>
                Our mission is simple: to deliver exceptional software solutions
                that drive real business value. We combine technical expertise
                with deep industry knowledge to create transformative digital
                experiences.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Team collaboration"
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border p-6 rounded-lg shadow-lg max-w-sm">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">15+</span>
                <span className="text-muted-foreground">
                  Years of Excellence
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Delivering innovative solutions and driving digital
                transformation across industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
