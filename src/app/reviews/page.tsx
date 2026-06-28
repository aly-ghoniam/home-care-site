import { getReviewsPageData } from '../../controllers/reviewsController'
import { getMetadata } from '../../controllers/seoController'
import { TestimonialsRow } from '../../views/sections/TestimonialsRow'
import { Container } from '../../views/ui/Container'
import { Heading } from '../../views/ui/Heading'

export const metadata = getMetadata('reviews')

export default function ReviewsPage() {
  const { testimonials, hasRealTestimonials } = getReviewsPageData()

  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <Heading as="h1" className="text-white mb-4">
            Reviews
          </Heading>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Hear from the families we work with. [PLACEHOLDER — real testimonials will replace
            these before launch. This section can be removed if real reviews are not available.]
          </p>
        </Container>
      </section>

      <TestimonialsRow testimonials={testimonials} hasRealTestimonials={hasRealTestimonials} />
    </>
  )
}
