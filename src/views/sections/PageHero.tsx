import type { ReactNode } from 'react'
import { Container } from '../ui/Container'
import { Orb, DotGrid } from '../ui/Decor'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
}

/**
 * Shared navy header used at the top of inner pages (Services, Team, About).
 * Adds an eyebrow label plus layered decorative depth over the flat navy block.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-navy py-24 overflow-hidden">
      <DotGrid tone="light" className="opacity-40" />
      <Orb color="bg-blue-baby/15" position="top-[-7rem] right-[-5rem] h-80 w-80" drift />
      <Container className="relative">
        <p className="eyebrow text-blue-baby mb-5">{eyebrow}</p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl">{description}</p>
        )}
      </Container>
    </section>
  )
}
