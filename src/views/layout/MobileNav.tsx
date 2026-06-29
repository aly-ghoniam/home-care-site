'use client'

import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react/dist/ssr'
import type { NavLink } from '../../controllers/layoutController'

interface MobileNavProps {
  links: NavLink[]
  transparent?: boolean
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function MobileNav({ links, transparent = false }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <details className="md:hidden group">
      <summary
        className={[
          'p-2 list-none cursor-pointer transition-colors duration-300',
          transparent ? 'text-white' : 'text-navy',
        ].join(' ')}
        aria-label="Toggle navigation"
      >
        <List size={24} weight="bold" className="group-open:hidden" aria-hidden="true" />
        <X size={24} weight="bold" className="hidden group-open:block" aria-hidden="true" />
      </summary>

      <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-blue-baby shadow-[0_12px_32px_rgba(15,30,55,0.12)] z-50">
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col py-2">
            {links.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={[
                      'flex items-center gap-3 px-6 py-3 text-base font-medium transition-colors duration-150',
                      active
                        ? 'text-navy bg-blue-pale'
                        : 'text-ink/80 hover:text-navy hover:bg-blue-pale',
                    ].join(' ')}
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        'h-1.5 w-1.5 rounded-full transition-colors',
                        active ? 'bg-blue-baby' : 'bg-transparent',
                      ].join(' ')}
                    />
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </details>
  )
}
