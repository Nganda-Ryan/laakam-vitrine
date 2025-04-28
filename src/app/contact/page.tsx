import React from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactMap } from '@/components/contact/ContactMap'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { OfficeLocations } from '@/components/contact/OfficeLocations'

function Contact() {

  return (
    <div className="w-full">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Build Something
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {' Amazing Together'}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 -z-10" />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your digital presence? Get in touch with our
              team of experts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <OfficeLocations />
      <ContactMap />
    </div>
  )
}

export default Contact