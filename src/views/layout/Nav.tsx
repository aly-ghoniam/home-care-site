'use client'

import { usePathname } from 'next/navigation'
import type { NavLink } from '../../controllers/layoutController'

interface NavProps {
  links: NavLink[]
  transparent?: boolean
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Nav({ links, transparent = false }: NavProps) {
  const pathname = usePathname()

  return (
    <nav aria-label="Main navigation">
      <ul className="hidden md:flex items-center gap-7">
        {links.map((link) => {
          const active = isActive(pathname, link.href)
          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'group relative py-1 text-base font-medium transition-colors duration-300',
                  transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink/75 hover:text-navy',
                  active ? (transparent ? 'text-white' : 'text-navy') : '',
                ].join(' ')}
              >
                {link.label}
                {/* Animated underline — full width when active, expands on hover */}
                <span
                  aria-hidden="true"
                  className={[
                    'absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300 ease-out',
                    transparent ? 'bg-blue-baby' : 'bg-navy',
                    active ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
