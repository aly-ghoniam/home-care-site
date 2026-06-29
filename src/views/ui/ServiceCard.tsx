import { Heart, Users, Pill, Brain, Moon, House } from '@phosphor-icons/react/dist/ssr'
import type { Icon } from '@phosphor-icons/react'
import type { Service } from '../../models/types/service'

const ICON_MAP: Record<string, Icon> = {
  Heart,
  Users,
  Pill,
  Brain,
  Moon,
  House,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.icon] ?? Heart

  return (
    <article
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white p-7 h-full
        ring-1 ring-transparent
        [box-shadow:var(--shadow-card)]
        hover:[box-shadow:var(--shadow-card-hover)]
        hover:ring-blue-baby/60
        hover:-translate-y-1.5
        transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
    >
      {/* Accent bar that wipes in across the top on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-navy to-blue-baby
          transition-transform duration-300 ease-out group-hover:scale-x-100"
      />

      <div
        className="w-14 h-14 rounded-xl bg-blue-pale flex items-center justify-center shrink-0
          group-hover:bg-blue-baby transition-colors duration-300"
        aria-hidden="true"
      >
        <IconComponent
          size={26}
          weight="duotone"
          className="text-navy transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold text-navy mb-2">{service.name}</h3>
        <p className="text-lg text-ink/72 leading-relaxed">{service.shortDescription}</p>
      </div>
    </article>
  )
}
