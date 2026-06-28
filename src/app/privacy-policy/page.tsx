import { getPrivacyPolicy } from '../../controllers/legalController'
import { getMetadata } from '../../controllers/seoController'
import { LegalBody } from '../../views/sections/LegalBody'

export const metadata = getMetadata('privacy')

export default function PrivacyPolicyPage() {
  return <LegalBody document={getPrivacyPolicy()} />
}
