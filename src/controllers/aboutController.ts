import { COMPANY } from '../models/content/company'

export interface AboutPageData {
  companyName: string
  phone: string
  cqcNumber: string | null
  values: { title: string; description: string }[]
}

export function getAboutPageData(): AboutPageData {
  return {
    companyName: COMPANY.name,
    phone: COMPANY.phone,
    cqcNumber: COMPANY.cqcNumber,
    values: [
      {
        title: 'Safety',
        description:
          'Every carer is DBS-checked, fully trained, and supervised. We follow strict safeguarding procedures to keep your loved ones safe at all times.',
      },
      {
        title: 'Compassion',
        description:
          'We treat every client as we would our own family — with warmth, patience, and genuine care for their wellbeing and dignity.',
      },
      {
        title: 'Reliability',
        description:
          'Consistent carers, punctual visits, and clear communication. You can count on us to be there when we say we will.',
      },
    ],
  }
}
