import { getCookiePolicy } from '../../controllers/legalController'
import { getMetadata } from '../../controllers/seoController'
import { LegalBody } from '../../views/sections/LegalBody'

export const metadata = getMetadata('cookies')

export default function CookiePolicyPage() {
  return <LegalBody document={getCookiePolicy()} />
}
