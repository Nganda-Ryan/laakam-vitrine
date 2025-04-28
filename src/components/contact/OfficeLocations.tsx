"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'
const offices = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '123 Tech Avenue, San Francisco, CA 94107',
    phone: '+1 (123) 456-7890',
    email: 'sf@laakam.it',
    hours: 'Mon - Fri: 9AM - 6PM PST',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1000',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '456 Innovation Street, London, EC2A 1AF',
    phone: '+44 20 1234 5678',
    email: 'london@laakam.it',
    hours: 'Mon - Fri: 9AM - 6PM GMT',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '789 Tech Park Way, Singapore 123456',
    phone: '+65 6789 0123',
    email: 'singapore@laakam.it',
    hours: 'Mon - Fri: 9AM - 6PM SGT',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1000',
  },
]
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}
export function OfficeLocations() {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Global Offices
          </h2>
          <p className="text-lg text-muted-foreground">
            Find us in these locations around the world
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offices.map((office, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <Image
                    height={800}
                    width={800}
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{office.city}</h3>
                <p className="text-primary mb-4">{office.country}</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-1 text-primary" />
                    <p className="text-muted-foreground">{office.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
