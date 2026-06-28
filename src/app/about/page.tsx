import { getAboutPageData } from '../../controllers/aboutController'
import { getMetadata } from '../../controllers/seoController'
import { Container } from '../../views/ui/Container'
import { Heading } from '../../views/ui/Heading'
import { PhoneCTA } from '../../views/layout/PhoneCTA'

export const metadata = getMetadata('about')

export default function AboutPage() {
  const { companyName, phone, cqcNumber, values } = getAboutPageData()

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <Container>
          <Heading as="h1" className="text-white mb-6">
            About {companyName}
          </Heading>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            [PLACEHOLDER: Business story — warm narrative about the founding, mission, and
            commitment to dignified, compassionate care in the home.]
          </p>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="py-20">
        <Container>
          <Heading as="h2" id="values-heading" className="text-navy mb-12">
            What We Stand For
          </Heading>

          <div className="grid grid-cols-1 gap-12">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start`}
              >
                <div className="lg:w-1/3 shrink-0">
                  <span className="text-6xl font-bold text-blue-baby select-none" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <Heading as="h3" className="text-navy mt-2">
                    {value.title}
                  </Heading>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-xl text-ink/80 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CQC */}
      <section className="py-16 bg-blue-pale" aria-labelledby="cqc-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <Heading as="h2" id="cqc-heading" className="text-navy mb-2">
                CQC Registered
              </Heading>
              <p className="text-lg text-ink/70">
                Registered with the Care Quality Commission.{' '}
                {cqcNumber
                  ? `Registration number: ${cqcNumber}`
                  : '[PLACEHOLDER: CQC registration number]'}
              </p>
            </div>
            <PhoneCTA phone={phone} size="large" />
          </div>
        </Container>
      </section>
    </>
  )
}
