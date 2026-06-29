import { getTeamPageData } from '../../controllers/teamController'
import { getMetadata } from '../../controllers/seoController'
import { TeamGrid } from '../../views/sections/TeamGrid'
import { PageHero } from '../../views/sections/PageHero'

export const metadata = getMetadata('team')

export default function TeamPage() {
  const { members, hasRealPhotos } = getTeamPageData()

  return (
    <>
      <PageHero
        eyebrow="The people behind the care"
        title="Meet the Team"
        description="Our carers are trained, vetted, and genuinely passionate about the work they do — the familiar, friendly faces who become part of your family's routine."
      />

      <TeamGrid members={members} hasRealPhotos={hasRealPhotos} />
    </>
  )
}
