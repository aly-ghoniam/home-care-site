import type { NavLink } from '../../controllers/layoutController'

interface NavProps {
  links: NavLink[]
  transparent?: boolean
}

export function Nav({ links, transparent = false }: NavProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={[
                'text-base font-medium transition-colors duration-300',
                transparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-ink/80 hover:text-navy',
              ].join(' ')}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
