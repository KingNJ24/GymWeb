'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">EliteFit</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </a>
          <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Start Your Journey
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#about"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your Journey
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
