import type { LegalDocument } from '../../controllers/legalController'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'

interface LegalBodyProps {
  document: LegalDocument
}

export function LegalBody({ document: doc }: LegalBodyProps) {
  return (
    <article className="py-16">
      <Container>
        <div className="max-w-3xl">
          <Heading as="h1" className="text-navy mb-2">
            {doc.title}
          </Heading>
          <p className="text-sm text-ink/50 mb-12">Last updated: {doc.lastUpdated}</p>

          <div className="flex flex-col gap-10">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <Heading as="h2" className="text-navy mb-4">
                  {section.heading}
                </Heading>
                <p className="text-lg text-ink/80 leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  )
}
