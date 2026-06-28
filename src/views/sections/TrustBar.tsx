'use client'

import { motion } from 'motion/react'
import { Clock, Robot, Certificate } from '@phosphor-icons/react/dist/ssr'
import { Container } from '../ui/Container'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const ITEMS = [
  { icon: Clock,       text: 'Available 24 hours a day, 7 days a week' },
  { icon: Robot,       text: 'Calls after hours answered by our AI receptionist (6pm–9am)' },
  { icon: Certificate, text: 'Registered with the Care Quality Commission' },
]

export function TrustBar() {
  return (
    <div className="bg-navy-deep border-y border-white/8" aria-label="Trust highlights">
      <Container>
        <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 sm:divide-x divide-white/12 py-6">
          {ITEMS.map(({ icon: Icon, text }, i) => (
            <motion.li
              key={text}
              className="flex items-center gap-3.5 sm:px-10 first:pl-0 last:pr-0 py-1 sm:py-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <Icon size={22} weight="duotone" className="text-blue-baby shrink-0" aria-hidden="true" />
              <span className="text-white/78 font-medium text-base">{text}</span>
            </motion.li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
