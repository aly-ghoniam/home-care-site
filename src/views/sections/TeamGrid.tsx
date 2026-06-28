import type { TeamMember } from '../../models/types/teamMember'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'

interface TeamGridProps {
  members: TeamMember[]
  hasRealPhotos: boolean
}

export function TeamGrid({ members, hasRealPhotos }: TeamGridProps) {
  return (
    <section aria-labelledby="team-heading" className="py-20">
      <Container>
        <div className="mb-12">
          <Heading as="h2" id="team-heading" className="text-navy mb-4">
            Meet the Team
          </Heading>
          {!hasRealPhotos && (
            <p className="text-sm text-ink/50 italic">
              [PLACEHOLDER — This section is removed if the client does not provide real photos and consent]
            </p>
          )}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {members.map((member) => (
            <li key={member.id}>
              <article className="flex flex-col gap-4">
                {/* Photo placeholder */}
                <div
                  className="w-full aspect-[4/3] rounded-xl bg-blue-pale border border-blue-baby flex flex-col items-center justify-center gap-2"
                  aria-label="Photo pending"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-baby/60" aria-hidden="true" />
                  <span className="text-sm text-ink/40 italic">Photo pending</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                  <p className="text-base text-ink/60 font-medium mb-2">{member.role}</p>
                  <p className="text-base text-ink/70 leading-relaxed">{member.bio}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
