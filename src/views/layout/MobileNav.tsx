import { List, X } from '@phosphor-icons/react/dist/ssr'
import type { NavLink } from '../../controllers/layoutController'

interface MobileNavProps {
  links: NavLink[]
  transparent?: boolean
}

export function MobileNav({ links, transparent = false }: MobileNavProps) {
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

      <div className="absolute top-full left-0 right-0 bg-white border-t border-blue-baby shadow-md z-50">
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-base font-medium text-ink/80 hover:text-navy hover:bg-blue-pale transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </details>
  )
}
