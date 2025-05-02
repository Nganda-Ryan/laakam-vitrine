"use client"

import React from 'react'

import OfficeCard from '../cards/OfficeCard'
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

export function OfficeLocations() {
  return (
    <section className="py-20 bg-accent/50 ">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Global Offices
          </h2>
          <p className="text-lg text-muted-foreground">
            Find us in these locations around the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offices.map((office, index) => (
            <OfficeCard 
              key={index}
              city={office.city}
              country={office.country}
              address={office.address}
              phone={office.phone}
              email={office.email}
              hours={office.hours}
              image={office.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
