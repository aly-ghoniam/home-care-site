import { PRIVACY_POLICY } from '../models/content/legal/privacy'
import { COOKIE_POLICY } from '../models/content/legal/cookies'
import { TERMS } from '../models/content/legal/terms'

export interface LegalSection {
  heading: string
  body: string
}

export interface LegalDocument {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export function getPrivacyPolicy(): LegalDocument {
  return PRIVACY_POLICY
}

export function getCookiePolicy(): LegalDocument {
  return COOKIE_POLICY
}

export function getTerms(): LegalDocument {
  return TERMS
}
