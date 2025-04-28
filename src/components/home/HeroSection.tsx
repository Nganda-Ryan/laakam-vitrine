import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Particule from '../animations/Particule'

export function HeroSection() {
  
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      <Particule />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-6">
            Transforming Ideas into
            <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {' Digital Excellence'}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 -z-10" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            We craft innovative software solutions that empower businesses to
            thrive in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity inline-flex items-center justify-center font-medium"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/80 transition-colors inline-flex items-center justify-center font-medium"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}