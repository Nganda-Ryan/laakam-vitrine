"use client"

import React, { useEffect, useState } from 'react'
import { Menu, X} from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/theme/theme-toggle'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            LAAKAM CLOUD
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}