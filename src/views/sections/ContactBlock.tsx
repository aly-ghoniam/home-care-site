import { Phone, Envelope, MapPin, Clock } from '@phosphor-icons/react/dist/ssr'
import type { HoursRow } from '../../models/types/company'
import { PhoneCTA } from '../layout/PhoneCTA'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'

interface ContactBlockProps {
  phone: string
  email: string
  address: string
  businessHours: HoursRow[]
  aiReceptionistNote: string
}

export function ContactBlock({ phone, email, address, businessHours, aiReceptionistNote }: ContactBlockProps) {
  return (
    <section aria-labelledby="contact-heading" className="py-20">
      <Container>
        <Heading as="h2" id="contact-heading" className="text-navy mb-12">
          Get in Touch
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Phone + address */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-lg text-ink/70 mb-6 leading-relaxed">
                Our team is available around the clock. Call us any time — if it is outside office
                hours, our AI receptionist will take your details and ensure someone follows up.
              </p>
              <PhoneCTA phone={phone} size="large" />
            </div>

            <div className="flex flex-col gap-3 text-base text-ink/70">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 hover:text-navy transition-colors duration-150"
              >
                <Envelope size={18} weight="fill" className="text-navy shrink-0" aria-hidden="true" />
                {email}
              </a>
              <p className="inline-flex items-start gap-3">
                <MapPin size={18} weight="fill" className="text-navy shrink-0 mt-0.5" aria-hidden="true" />
                {address}
              </p>
            </div>

            <p className="text-sm text-ink/50 italic border-l-2 border-blue-baby pl-4">
              {aiReceptionistNote}
            </p>
          </div>

          {/* Hours table */}
          <div>
            <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
              <Clock size={20} weight="duotone" aria-hidden="true" />
              Business Hours
            </h3>
            <table className="w-full text-base text-ink/80" aria-label="Business hours">
              <tbody className="divide-y divide-blue-baby">
                {businessHours.map((row) => (
                  <tr key={row.days}>
                    <td className="py-3 font-medium text-navy pr-8">{row.days}</td>
                    <td className="py-3">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  )
}
