import { TESTIMONIALS } from '../models/content/testimonials'
import type { Testimonial } from '../models/types/testimonial'

export interface ReviewsPageData {
  testimonials: Testimonial[]
  hasRealTestimonials: boolean
}

export function getReviewsPageData(): ReviewsPageData {
  return {
    testimonials: TESTIMONIALS,
    hasRealTestimonials: false,
  }
}
