import type { Service } from '../types/service'

export const SERVICES: Service[] = [
  {
    id: 'personal-care',
    name: 'Personal Care',
    shortDescription: 'Dignified support with daily routines including washing, dressing, and grooming.',
    longDescription:
      'Our carers provide sensitive, respectful support with personal hygiene, dressing, and grooming — always preserving dignity and independence.',
    icon: 'Heart',
    featured: true,
  },
  {
    id: 'companionship',
    name: 'Companionship',
    shortDescription: 'Friendly visits, conversation, and social support to reduce isolation.',
    longDescription:
      'Loneliness affects health as much as physical conditions. Our carers provide genuine companionship — conversation, shared activities, and a friendly face.',
    icon: 'Users',
    featured: true,
  },
  {
    id: 'medication-support',
    name: 'Medication Support',
    shortDescription: 'Prompting and assistance with prescribed medications on schedule.',
    longDescription:
      'We help clients take the right medication at the right time, providing prompts and assistance while working within agreed care plans.',
    icon: 'Pill',
    featured: true,
  },
  {
    id: 'dementia-care',
    name: 'Dementia Care',
    shortDescription: 'Specialist support for those living with dementia, delivered with patience and understanding.',
    longDescription:
      'Our trained carers understand the unique challenges of dementia. We provide consistent, calm support that maintains routine and reduces anxiety.',
    icon: 'Brain',
    featured: true,
  },
  {
    id: 'overnight-care',
    name: 'Overnight Care',
    shortDescription: 'A carer present through the night for peace of mind and immediate support.',
    longDescription:
      'For clients and families who need reassurance through the night, our carers are present and alert — ready to assist whenever needed.',
    icon: 'Moon',
    featured: false,
  },
  {
    id: 'domestic-help',
    name: 'Domestic Help',
    shortDescription: 'Light household tasks including cleaning, laundry, and meal preparation.',
    longDescription:
      'Maintaining a comfortable home matters. We assist with cleaning, laundry, shopping, and meal preparation to keep daily life running smoothly.',
    icon: 'House',
    featured: false,
  },
]
