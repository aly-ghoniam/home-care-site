import Image from 'next/image'
import { getHomePageData } from '../controllers/homeController'
import { getMetadata } from '../controllers/seoController'
import { HeroSection } from '../views/sections/HeroSection'
import { TrustBar } from '../views/sections/TrustBar'
import { ServicesGrid } from '../views/sections/ServicesGrid'
import { TestimonialsRow } from '../views/sections/TestimonialsRow'
import { PhoneCTA } from '../views/layout/PhoneCTA'
import { Container } from '../views/ui/Container'

export const metadata = getMetadata('home')

export default function HomePage() {
  const { companyName, tagline, phone, featuredServices, featuredTestimonials, trustSignals } =
    getHomePageData()

  return (
    <>
      <HeroSection
        companyName={companyName}
        tagline={tagline}
        phone={phone}
        trustSignals={trustSignals}
      />

      <TrustBar />

      <ServicesGrid
        services={featuredServices}
        heading="Our Care Services"
        subheading="We provide a range of personalised home care services across London, tailored to each individual's needs."
      />

      {/* Photo break — caregiver in action */}
      <section className="relative h-64 lg:h-80 overflow-hidden" aria-label="Our approach">
        <Image
          src="/images/hero-care.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy/58" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-white italic text-center max-w-2xl leading-relaxed">
            Enabling independence, dignity and comfort — in the place you call home.
          </p>
        </div>
      </section>

      <TestimonialsRow testimonials={featuredTestimonials} hasRealTestimonials={false} />

      <section aria-label="Call us" className="py-20 bg-navy">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <p className="font-heading text-2xl sm:text-3xl font-semibold text-white text-center sm:text-left">
              Ready to talk? We're here 24 hours a day.
            </p>
            <PhoneCTA phone={phone} size="large" variant="light" />
          </div>
        </Container>
      </section>
    </>
  )
}
