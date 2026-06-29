import Image from 'next/image'
import { getHomePageData } from '../controllers/homeController'
import { getMetadata } from '../controllers/seoController'
import { HeroSection } from '../views/sections/HeroSection'
import { TrustBar } from '../views/sections/TrustBar'
import { ServicesGrid } from '../views/sections/ServicesGrid'
import { TestimonialsRow } from '../views/sections/TestimonialsRow'
import { PhoneCTA } from '../views/layout/PhoneCTA'
import { Container } from '../views/ui/Container'
import { Orb, DotGrid } from '../views/ui/Decor'

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
        eyebrow="What we offer"
        heading="Our Care Services"
        subheading="We provide a range of personalised home care services across London, tailored to each individual's needs."
      />

      {/* Photo break — caregiver in action */}
      <section className="relative h-72 lg:h-96 overflow-hidden" aria-label="Our approach">
        <Image
          src="/images/hero-care.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/30" />
        <Container className="relative h-full flex items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-blue-baby mb-4">Our promise</p>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white leading-snug">
              Enabling independence, dignity and comfort — in the place you call home.
            </p>
          </div>
        </Container>
      </section>

      <TestimonialsRow testimonials={featuredTestimonials} hasRealTestimonials={false} />

      {/* Closing call-to-action banner */}
      <section aria-label="Call us" className="py-20 bg-navy-deep">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-rich px-8 py-12 sm:px-12 sm:py-14 ring-1 ring-white/10">
            <DotGrid tone="light" className="opacity-50" />
            <Orb color="bg-blue-baby/25" position="top-[-5rem] right-[-3rem] h-64 w-64" drift />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="eyebrow text-blue-baby mb-4">Get in touch</p>
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
                  Ready to talk? We&rsquo;re here 24 hours a day.
                </p>
                <p className="mt-3 text-lg text-white/65">
                  Speak to a real person about your family&rsquo;s care — no obligation, no pressure.
                </p>
              </div>
              <PhoneCTA phone={phone} size="large" variant="light" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
