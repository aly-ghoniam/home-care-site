import { COMPANY } from '../models/content/company'
import { SERVICES } from '../models/content/services'
import { TESTIMONIALS } from '../models/content/testimonials'
import type { Service } from '../models/types/service'
import type { Testimonial } from '../models/types/testimonial'

export interface HomePageData {
  companyName: string
  tagline: string
  phone: string
  aiReceptionistNote: string
  featuredServices: Service[]
  featuredTestimonials: Testimonial[]
  trustSignals: string[]
}

export function getHomePageData(): HomePageData {
  return {
    companyName: COMPANY.name,
    tagline: COMPANY.tagline,
    phone: COMPANY.phone,
    aiReceptionistNote: COMPANY.aiReceptionistNote,
    featuredServices: SERVICES.filter((s) => s.featured),
    featuredTestimonials: TESTIMONIALS.filter((t) => t.featured).slice(0, 3),
    trustSignals: [
      COMPANY.cqcNumber ? `CQC Registered · ${COMPANY.cqcNumber}` : 'CQC Registration Pending',
      'London-based',
      COMPANY.yearsExperience ? `${COMPANY.yearsExperience} years' experience` : 'Experienced Care Team',
    ],
  }
}
