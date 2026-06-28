import { SERVICES } from '../models/content/services'
import { COMPANY } from '../models/content/company'
import type { Service } from '../models/types/service'

export interface ServicesPageData {
  services: Service[]
  phone: string
}

export function getAllServices(): Service[] {
  return SERVICES
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featured)
}

export function getServicesPageData(): ServicesPageData {
  return {
    services: SERVICES,
    phone: COMPANY.phone,
  }
}
