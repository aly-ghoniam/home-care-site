export interface HoursRow {
  days: string
  hours: string
}

export interface Company {
  name: string
  tagline: string
  phone: string
  email: string
  address: string
  businessHours: HoursRow[]
  aiReceptionistNote: string
  cqcNumber: string | null
  icoNumber: string | null
  yearsExperience: number | null
}
