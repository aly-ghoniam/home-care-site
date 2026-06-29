'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

type RevealDirection = 'up' | 'down' | 'none'

interface RevealProps {
  children: ReactNode
  /** Vertical offset direction for the entrance. Defaults to 'up'. */
  direction?: RevealDirection
  /** Stagger delay in seconds. */
  delay?: number
  /** Animation duration in seconds. */
  duration?: number
  className?: string
  /** Render as a list item instead of a div. */
  as?: 'div' | 'li'
}

const OFFSET: Record<RevealDirection, number> = {
  up: 28,
  down: -28,
  none: 0,
}

/**
 * Scroll-triggered fade/slide reveal using the shared site easing curve.
 * Collapses to a plain fade (no movement) when the user prefers reduced motion.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const y = reduceMotion ? 0 : OFFSET[direction]
  const Component = as === 'li' ? motion.li : motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Component>
  )
}
