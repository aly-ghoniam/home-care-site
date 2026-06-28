import { TEAM } from '../models/content/team'
import type { TeamMember } from '../models/types/teamMember'

export interface TeamPageData {
  members: TeamMember[]
  hasRealPhotos: boolean
}

export function getTeamPageData(): TeamPageData {
  return {
    members: TEAM,
    hasRealPhotos: TEAM.some((m) => m.photoUrl !== null),
  }
}
