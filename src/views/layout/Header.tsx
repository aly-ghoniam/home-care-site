'use client'

import { useState, useEffect } from 'react'
import { getGlobalLayoutData } from '../../controllers/layoutController'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import { PhoneCTA } from './PhoneCTA'

export function Header() {
  const { companyName, phone, navLinks } = getGlobalLayoutData()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white border-b border-blue-baby shadow-sm'
          : 'bg-navy border-b border-white/10',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className={[
              'font-heading text-xl font-bold shrink-0 transition-colors duration-300',
              scrolled ? 'text-navy' : 'text-white',
            ].join(' ')}
            aria-label={`${companyName} — home`}
          >
            {companyName}
          </a>

          <Nav links={navLinks} transparent={!scrolled} />

          <div className="hidden md:flex items-center">
            <PhoneCTA phone={phone} size="compact" variant={scrolled ? 'dark' : 'light'} />
          </div>

          <MobileNav links={navLinks} transparent={!scrolled} />
        </div>
      </div>
    </header>
  )
}
