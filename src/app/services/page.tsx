import { getServicesPageData } from '../../controllers/servicesController'
import { getMetadata } from '../../controllers/seoController'
import { ServicesGrid } from '../../views/sections/ServicesGrid'
import { PageHero } from '../../views/sections/PageHero'
import { PhoneCTA } from '../../views/layout/PhoneCTA'
import { Container } from '../../views/ui/Container'

export const metadata = getMetadata('services')

export default function ServicesPage() {
  const { services, phone } = getServicesPageData()

  return (
    <>
      <PageHero
        eyebrow="How we help"
        title="Our Care Services"
        description="Every service we offer is tailored to the individual — designed around their needs, routines, and preferences, and shaped together with each family."
      />

      <ServicesGrid services={services} eyebrow="The full range" heading="What We Offer" />

      <section className="py-20 bg-blue-pale">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="eyebrow text-navy/70 mb-3 justify-center sm:justify-start">Still deciding?</p>
              <p className="font-heading text-2xl sm:text-3xl font-semibold text-navy leading-snug">
                Not sure what you need? Call us and we&rsquo;ll help.
              </p>
            </div>
            <PhoneCTA phone={phone} size="large" />
          </div>
        </Container>
      </section>
    </>
  )
}
