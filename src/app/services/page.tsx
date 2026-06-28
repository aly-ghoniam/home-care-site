import { getServicesPageData } from '../../controllers/servicesController'
import { getMetadata } from '../../controllers/seoController'
import { ServicesGrid } from '../../views/sections/ServicesGrid'
import { PhoneCTA } from '../../views/layout/PhoneCTA'
import { Container } from '../../views/ui/Container'
import { Heading } from '../../views/ui/Heading'

export const metadata = getMetadata('services')

export default function ServicesPage() {
  const { services, phone } = getServicesPageData()

  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <Heading as="h1" className="text-white mb-4">
            Our Care Services
          </Heading>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Every service we offer is tailored to the individual — designed around their needs,
            routines, and preferences. All services listed are [PLACEHOLDER] pending confirmation
            with the client.
          </p>
        </Container>
      </section>

      <ServicesGrid services={services} heading="What We Offer" />

      <section className="py-16 bg-blue-pale">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-2xl font-semibold text-navy">
              Not sure what you need? Call us and we'll help.
            </p>
            <PhoneCTA phone={phone} size="large" />
          </div>
        </Container>
      </section>
    </>
  )
}
