import { getContactPageData } from '../../controllers/contactController'
import { getMetadata } from '../../controllers/seoController'
import { ContactBlock } from '../../views/sections/ContactBlock'
import { Container } from '../../views/ui/Container'
import { Heading } from '../../views/ui/Heading'

export const metadata = getMetadata('contact')

export default function ContactPage() {
  const data = getContactPageData()

  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <Heading as="h1" className="text-white mb-4">
            Contact Us
          </Heading>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            We're available 24 hours a day, seven days a week. Give us a call — we'd love to help.
          </p>
        </Container>
      </section>

      <ContactBlock {...data} />
    </>
  )
}
