'use client'

import { motion } from 'motion/react'
import { Clock, Robot, Certificate } from '@phosphor-icons/react/dist/ssr'
import { Container } from '../ui/Container'
import { DotGrid } from '../ui/Decor'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const ITEMS = [
  { icon: Clock,       title: 'Always available', text: '24 hours a day, 7 days a week' },
  { icon: Robot,       title: 'AI receptionist', text: 'After-hours calls answered (6pm–9am)' },
  { icon: Certificate, title: 'CQC registered', text: 'Care Quality Commission regulated' },
]

export function TrustBar() {
  return (
    <div className="relative bg-navy-deep border-y border-white/8 overflow-hidden" aria-label="Trust highlights">
      <DotGrid tone="light" className="opacity-40" />
      <Container className="relative">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-white/10 py-7">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              className="group flex items-center gap-4 sm:px-8 first:sm:pl-0 last:sm:pr-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/8 transition-colors duration-300 group-hover:bg-blue-baby/20">
                <Icon
                  size={22}
                  weight="duotone"
                  className="text-blue-baby transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-white font-semibold text-base leading-snug">{title}</span>
                <span className="text-white/55 text-sm leading-snug">{text}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
