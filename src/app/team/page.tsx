import { getTeamPageData } from '../../controllers/teamController'
import { getMetadata } from '../../controllers/seoController'
import { TeamGrid } from '../../views/sections/TeamGrid'
import { Container } from '../../views/ui/Container'
import { Heading } from '../../views/ui/Heading'

export const metadata = getMetadata('team')

export default function TeamPage() {
  const { members, hasRealPhotos } = getTeamPageData()

  return (
    <>
      <section className="bg-navy py-20">
        <Container>
          <Heading as="h1" className="text-white mb-4">
            Meet the Team
          </Heading>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            Our carers are trained, vetted, and passionate about the work they do. [PLACEHOLDER:
            introduce the team with warmth and authenticity.]
          </p>
        </Container>
      </section>

      <TeamGrid members={members} hasRealPhotos={hasRealPhotos} />
    </>
  )
}
