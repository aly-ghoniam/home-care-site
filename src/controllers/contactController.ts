import { COMPANY } from '../models/content/company'
import type { HoursRow } from '../models/types/company'

export interface ContactPageData {
  phone: string
  email: string
  address: string
  businessHours: HoursRow[]
  aiReceptionistNote: string
}

export function getContactPageData(): ContactPageData {
  return {
    phone: COMPANY.phone,
    email: COMPANY.email,
    address: COMPANY.address,
    businessHours: COMPANY.businessHours,
    aiReceptionistNote: COMPANY.aiReceptionistNote,
  }
}
