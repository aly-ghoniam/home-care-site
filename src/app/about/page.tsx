import Image from 'next/image'
import { ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { getAboutPageData } from '../../controllers/aboutController'
import { getMetadata } from '../../controllers/seoController'
import { Container } from '../../views/ui/Container'
import { Reveal } from '../../views/ui/Reveal'
import { PageHero } from '../../views/sections/PageHero'
import { PhoneCTA } from '../../views/layout/PhoneCTA'

export const metadata = getMetadata('about')

export default function AboutPage() {
  const { companyName, phone, cqcNumber, values } = getAboutPageData()

  return (
    <>
      <PageHero
        eyebrow={`About ${companyName}`}
        title="Care built around the person, not the schedule"
        description="We believe everyone deserves to live well in the place they know best — their own home. That belief shapes every visit, every carer, and every conversation we have with the families who trust us."
      />

      {/* Story — text alongside imagery */}
      <section aria-label="Our story" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="eyebrow text-navy/70 mb-4">Why we exist</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-navy mb-5">
                A familiar face, a gentler day
              </h2>
              <div className="flex flex-col gap-4 text-lg text-ink/75 leading-relaxed">
                <p>
                  Good home care is about more than tasks on a checklist. It&rsquo;s the reassurance of
                  a familiar face, the dignity of being heard, and the comfort of staying somewhere
                  that feels like yours.
                </p>
                <p>
                  Our carers are matched thoughtfully, trained continually, and supported around the
                  clock — so the people we look after, and the families who love them, can breathe a
                  little easier.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-blue-baby/50 [box-shadow:var(--shadow-card)]">
                <Image
                  src="/images/care-joy.png"
                  alt="A carer sharing a warm, joyful moment with the person they support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="py-20 bg-blue-pale">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-navy/70 mb-4">What we stand for</p>
            <h2
              id="values-heading"
              className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-navy"
            >
              The principles behind every visit
            </h2>
          </Reveal>

          <div className="flex flex-col gap-px overflow-hidden rounded-2xl bg-blue-baby/40 ring-1 ring-blue-baby/50">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 bg-white p-8 sm:p-10">
                  <div className="flex items-start gap-5 sm:w-1/3 shrink-0">
                    <span
                      className="font-heading text-5xl font-bold text-blue-baby leading-none select-none"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-navy pt-1">{value.title}</h3>
                  </div>
                  <p className="sm:w-2/3 text-lg text-ink/75 leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CQC credential card */}
      <section className="py-20" aria-labelledby="cqc-heading">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-10 sm:px-12 sm:py-12 ring-1 ring-white/10">
            <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between">
              <div className="flex items-start gap-5">
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-baby/20"
                  aria-hidden="true"
                >
                  <ShieldCheck size={30} weight="duotone" className="text-blue-baby" />
                </span>
                <div>
                  <p className="eyebrow text-blue-baby mb-2">Regulated care</p>
                  <h2 id="cqc-heading" className="font-heading text-2xl font-bold text-white mb-2">
                    CQC Registered
                  </h2>
                  <p className="text-lg text-white/70 max-w-xl">
                    Registered with the Care Quality Commission.{' '}
                    {cqcNumber
                      ? `Registration number: ${cqcNumber}`
                      : '[PLACEHOLDER: CQC registration number]'}
                  </p>
                </div>
              </div>
              <PhoneCTA phone={phone} size="large" variant="light" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
