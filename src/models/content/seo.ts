import type { PageMeta } from '../types/seo'

export const SEO: Record<string, PageMeta> = {
  home: {
    title: 'Heloai | Home Care Services in London',
    description:
      'Professional, compassionate domiciliary care for elderly and vulnerable people across London. Call us today.',
    canonicalPath: '/',
  },
  about: {
    title: 'About Us | Heloai',
    description:
      'Learn about our care team, our values, and our commitment to dignified, person-centred home care in London.',
    canonicalPath: '/about',
  },
  services: {
    title: 'Our Services | Heloai',
    description:
      'Personal care, companionship, medication support, dementia care, overnight care, and more — delivered at home across London.',
    canonicalPath: '/services',
  },
  team: {
    title: 'Our Team | Heloai',
    description:
      'Meet the experienced, compassionate carers who deliver our home care services across London.',
    canonicalPath: '/team',
  },
  reviews: {
    title: 'Client Reviews | Heloai',
    description:
      'Read what families say about our home care services in London.',
    canonicalPath: '/reviews',
  },
  contact: {
    title: 'Contact Us | Heloai',
    description:
      'Get in touch with our care team. Call us directly — we answer every call, including after hours.',
    canonicalPath: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Heloai',
    description: 'How we handle your data and protect your privacy.',
    canonicalPath: '/privacy-policy',
  },
  cookies: {
    title: 'Cookie Policy | Heloai',
    description: 'Information about cookies used on this website.',
    canonicalPath: '/cookie-policy',
  },
  terms: {
    title: 'Terms & Conditions | Heloai',
    description: 'Terms and conditions for using this website.',
    canonicalPath: '/terms',
  },
}