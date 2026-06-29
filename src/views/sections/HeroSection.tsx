'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { CaretDown, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { PhoneCTA } from '../layout/PhoneCTA'
import { Container } from '../ui/Container'
import { Orb } from '../ui/Decor'

interface HeroSectionProps {
  companyName: string
  tagline: string
  phone: string
  trustSignals: string[]
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function HeroSection({ tagline, phone, trustSignals }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  // Gentle parallax: the photo drifts slower than the page as you scroll away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%'])

  return (
    <section
      ref={sectionRef}
      aria-label="Welcome"
      className="relative flex items-center min-h-[100dvh] overflow-hidden bg-navy-deep"
    >
      {/* Background photo with slow ken-burns zoom + scroll parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/care-companion.webp"
          alt="A caregiver and elderly woman sharing a warm conversation on a sofa at home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110 [animation:ken-burns_28s_linear_forwards]"
        />
        {/* Left-to-right depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/72 to-navy/38" />
        {/* Bottom vignette for scroll bleed */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
      </motion.div>

      {/* Decorative glow */}
      <Orb color="bg-blue-baby/20" position="top-[-6rem] right-[-4rem] h-80 w-80" drift />

      {/* Content */}
      <Container className="relative z-10 py-28 lg:py-36">
        <div className="max-w-2xl">
          <motion.p
            className="eyebrow text-blue-baby mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            Compassionate home care · London
          </motion.p>

          <motion.h1
            className="font-heading text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
          >
            Care That Feels<br />
            Like{' '}
            <em className="not-italic text-blue-baby">Home</em>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-white/72 leading-relaxed mb-10 max-w-[52ch]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            {tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          >
            <PhoneCTA phone={phone} size="large" variant="light" />
            <span className="inline-flex items-center gap-2 text-sm text-white/55">
              <ShieldCheck size={18} weight="duotone" className="text-blue-baby" aria-hidden="true" />
              CQC registered
            </span>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            aria-label="Why families choose us"
          >
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/75 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-baby shrink-0" aria-hidden="true" />
                {signal}
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
