import { COMPANY } from '../models/content/company'

export interface NavLink {
  label: string
  href: string
}

export interface GlobalLayoutData {
  phone: string
  companyName: string
  email: string
  address: string
  navLinks: NavLink[]
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

export function getGlobalLayoutData(): GlobalLayoutData {
  return {
    phone: COMPANY.phone,
    companyName: COMPANY.name,
    email: COMPANY.email,
    address: COMPANY.address,
    navLinks: NAV_LINKS,
  }
}
