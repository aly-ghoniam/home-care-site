import { Phone, Envelope, MapPin } from '@phosphor-icons/react/dist/ssr'
import { getGlobalLayoutData } from '../../controllers/layoutController'
import { COMPANY } from '../../models/content/company'

export function Footer() {
  const { phone, email, address } = getGlobalLayoutData()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-150"
                  aria-label={`Call us on ${phone}`}
                >
                  <Phone size={16} weight="fill" aria-hidden="true" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-150"
                >
                  <Envelope size={16} weight="fill" aria-hidden="true" />
                  <span>{email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-white/80">
                <MapPin size={16} weight="fill" aria-hidden="true" className="mt-0.5 shrink-0" />
                <span>{address}</span>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-white">Pages</h2>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/team', label: 'Our Team' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Note */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-white">Legal</h2>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/cookie-policy', label: 'Cookie Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-white/60 mt-2 max-w-xs">
              {COMPANY.aiReceptionistNote}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-white/50">
          © {year} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
