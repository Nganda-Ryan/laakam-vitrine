import Image from 'next/image'
import React from 'react'
export function CertificationsSection() {
    const certifications = [
        {
            name: 'AWS Advanced Consulting Partner',
            image:'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            year: '2023',
        },
        {
            name: 'Microsoft Gold Partner',
            image:'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
            year: '2023',
        },
        {
            name: 'Salesforce Platinum Partner',
            image:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
            year: '2023',
        },
        {
            name: 'Google Cloud Partner',
            image:'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
            year: '2023',
        },
    ]
    return (
        <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Certifications & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
                Industry recognitions that validate our expertise and commitment to
                quality
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
                <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center"
                >
                <div className="h-20 flex items-center justify-center mb-4">
                    <Image
                        height={800}
                        width={800}
                        src={cert.image}
                        alt={cert.name}
                        className="max-h-full max-w-[180px] object-contain"
                    />
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">
                    Certified {cert.year}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
