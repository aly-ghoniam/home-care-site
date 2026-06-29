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
          ? 'bg-white/85 backdrop-blur-md border-b border-blue-baby/70 shadow-[0_4px_24px_rgba(15,30,55,0.08)]'
          : 'bg-navy/95 backdrop-blur-sm border-b border-white/10',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label={`${companyName} — home`}
          >
            <span
              className={[
                'grid h-9 w-9 place-items-center rounded-xl font-heading text-lg font-bold transition-colors duration-300',
                scrolled ? 'bg-navy text-blue-baby' : 'bg-blue-baby text-navy',
              ].join(' ')}
              aria-hidden="true"
            >
              {companyName.charAt(0)}
            </span>
            <span
              className={[
                'font-heading text-xl font-bold transition-colors duration-300',
                scrolled ? 'text-navy' : 'text-white',
              ].join(' ')}
            >
              {companyName}
            </span>
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
