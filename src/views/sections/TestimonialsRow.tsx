'use client'

import { motion } from 'motion/react'
import { Quotes } from '@phosphor-icons/react/dist/ssr'
import type { Testimonial } from '../../models/types/testimonial'
import { Container } from '../ui/Container'

interface TestimonialsRowProps {
  testimonials: Testimonial[]
  hasRealTestimonials?: boolean
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function TestimonialsRow({ testimonials, hasRealTestimonials = false }: TestimonialsRowProps) {
  return (
    <section aria-labelledby="testimonials-heading" className="relative py-24 bg-blue-pale overflow-hidden">
      {/* Oversized decorative quote mark bleeding off the top-right */}
      <Quotes
        size={260}
        weight="fill"
        className="pointer-events-none absolute -top-10 -right-6 text-navy/[0.04]"
        aria-hidden="true"
      />

      <Container className="relative">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="eyebrow text-navy/70 mb-4">In their words</p>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-navy mb-3"
          >
            What Families Say
          </h2>
          {!hasRealTestimonials && (
            <p className="text-sm text-ink/40 italic">
              [PLACEHOLDER — Real testimonials will replace these before launch]
            </p>
          )}
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              <blockquote
                className="group flex flex-col gap-5 rounded-2xl bg-white border border-blue-baby/50 p-8 h-full
                  shadow-sm transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
                  hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] hover:border-blue-baby"
              >
                <Quotes
                  size={36}
                  weight="fill"
                  className="text-blue-baby transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <p className="text-lg text-ink/80 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3 pt-5 border-t border-blue-baby/60">
                  <div
                    className="h-9 w-9 rounded-full bg-blue-baby flex items-center justify-center text-navy font-bold text-sm shrink-0"
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy leading-snug">{t.author}</p>
                    <p className="text-xs text-ink/50">{t.location} · {t.year}</p>
                  </div>
                </footer>
              </blockquote>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
