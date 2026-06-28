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
      className="group flex flex-col gap-5 rounded-2xl bg-white p-7 h-full
        [box-shadow:var(--shadow-card)]
        hover:[box-shadow:var(--shadow-card-hover)]
        hover:-translate-y-1.5
        transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
    >
      <div
        className="w-14 h-14 rounded-xl bg-blue-pale flex items-center justify-center shrink-0
          group-hover:bg-blue-baby transition-colors duration-300"
        aria-hidden="true"
      >
        <IconComponent size={26} weight="duotone" className="text-navy" />
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold text-navy mb-2">{service.name}</h3>
        <p className="text-lg text-ink/72 leading-relaxed">{service.shortDescription}</p>
      </div>
    </article>
  )
}
