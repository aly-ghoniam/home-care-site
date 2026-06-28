import { getTerms } from '../../controllers/legalController'
import { getMetadata } from '../../controllers/seoController'
import { LegalBody } from '../../views/sections/LegalBody'

export const metadata = getMetadata('terms')

export default function TermsPage() {
  return <LegalBody document={getTerms()} />
}
