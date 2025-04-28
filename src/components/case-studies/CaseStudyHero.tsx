import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
export function CaseStudyHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our Success&nbsp;
            <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {'Stories'}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 -z-10" />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore how we&apos;ve helped businesses transform and grow through
            innovative technology solutions.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            height={800}
            width={800}
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1024"
            alt="Featured case study"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium mb-4">
                Featured Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Transformation for Fortune 500 Retail Company
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mb-6">
                How we helped a major retail chain modernize their digital
                infrastructure and increase online sales by 200%.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-primary/80 text-primary-foreground  rounded-md hover:bg-white/90 transition-colors">
                Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}