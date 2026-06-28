'use client'

import { motion } from 'motion/react'
import type { Service } from '../../models/types/service'
import { ServiceCard } from '../ui/ServiceCard'
import { Container } from '../ui/Container'

interface ServicesGridProps {
  services: Service[]
  heading?: string
  subheading?: string
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function ServicesGrid({ services, heading = 'Our Services', subheading }: ServicesGridProps) {
  return (
    <section aria-labelledby="services-heading" className="py-24 bg-navy">
      <Container>
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <h2
            id="services-heading"
            className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white mb-4"
          >
            {heading}
          </h2>
          {subheading && (
            <p className="text-xl text-white/58 leading-relaxed max-w-[62ch]">{subheading}</p>
          )}
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, i) => (
            <motion.li
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            >
              <ServiceCard service={service} />
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
