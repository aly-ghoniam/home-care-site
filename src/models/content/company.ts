import type { Company } from '../types/company'

// These must be filled before going live.
// cqcNumber  — legally required for registered domiciliary care providers (CQC, England)
// icoNumber  — legally required under UK GDPR / DPA 2018 for data controllers
// name/email/address — appear in the privacy policy and footer

export const COMPANY: Company = {
  name: '[PLACEHOLDER: Business Name]',
  tagline: 'Compassionate Home Care Across London',
  phone: '+44 20 0000 0000',
  email: 'hello@[PLACEHOLDER].co.uk',
  address: '[PLACEHOLDER: Street Address], London, [PLACEHOLDER: Postcode]',
  businessHours: [
    { days: 'Monday – Friday', hours: '8:00am – 6:00pm' },
    { days: 'Saturday', hours: '9:00am – 4:00pm' },
    { days: 'Sunday', hours: 'By appointment' },
  ],
  aiReceptionistNote:
    'Outside office hours, calls are handled by our AI receptionist — so someone is always available when you need us.',
  cqcNumber: null,
  icoNumber: null,
  yearsExperience: null,
}
