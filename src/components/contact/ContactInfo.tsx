import React from 'react'
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react'
export function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'info@laakam.it',
      link: 'mailto:info@laakam.it',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      link: null,
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Headquarters',
      value: '123 Tech Avenue, San Francisco, CA 94107',
      link: 'https://maps.google.com',
    },
  ]
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: '#',
      label: 'Twitter',
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: '#',
      label: 'GitHub',
    },
  ]
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Contact Information</h3>
        <div className="grid gap-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                {method.icon}
              </div>
              <div>
                <h4 className="font-medium mb-1">{method.title}</h4>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{method.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}