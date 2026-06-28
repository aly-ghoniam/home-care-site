'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { PhoneCTA } from '../layout/PhoneCTA'
import { Container } from '../ui/Container'

interface HeroSectionProps {
  companyName: string
  tagline: string
  phone: string
  trustSignals: string[]
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function HeroSection({ tagline, phone, trustSignals }: HeroSectionProps) {
  return (
    <section aria-label="Welcome" className="relative flex items-center min-h-[100dvh] overflow-hidden bg-navy-deep">

      {/* Background photo with slow ken-burns zoom */}
      <div className="absolute inset-0">
        <Image
          src="/images/care-companion.webp"
          alt="A caregiver and elderly woman sharing a warm conversation on a sofa at home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center [animation:ken-burns_28s_linear_forwards]"
        />
        {/* Left-to-right depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/72 to-navy/38" />
        {/* Bottom vignette for scroll bleed */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-28 lg:py-36">
        <div className="max-w-2xl">

          <motion.h1
            className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            Care That Feels<br />
            Like{' '}
            <em className="not-italic text-blue-baby">Home</em>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-white/72 leading-relaxed mb-10 max-w-[52ch]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.13, ease: EASE }}
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
          >
            <PhoneCTA phone={phone} size="large" variant="light" />
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            aria-label="Why families choose us"
          >
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-baby shrink-0" aria-hidden="true" />
                <span className="text-white/60 text-base">{signal}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 [animation:float-pulse_2.4s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <CaretDown size={30} />
      </div>
    </section>
  )
}
