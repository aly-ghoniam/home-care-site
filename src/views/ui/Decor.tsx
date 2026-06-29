/**
 * Purely decorative, aria-hidden layered-depth helpers built from the
 * existing palette — no image assets. Position them inside a `relative`
 * parent that also sets `overflow-hidden`.
 */

interface OrbProps {
  /** Tailwind colour class for the orb fill, e.g. 'bg-blue-baby/40'. */
  color?: string
  /** Tailwind positioning + size classes, e.g. 'top-0 -left-24 h-72 w-72'. */
  position: string
  /** Apply the gentle drift animation. */
  drift?: boolean
  className?: string
}

export function Orb({
  color = 'bg-blue-baby/40',
  position,
  drift = false,
  className = '',
}: OrbProps) {
  const animation = drift ? '[animation:orb-drift_14s_ease-in-out_infinite]' : ''
  return (
    <span
      aria-hidden="true"
      className={`orb ${color} ${position} ${animation} ${className}`}
    />
  )
}

interface DotGridProps {
  /** 'dark' dots for light backgrounds, 'light' dots for dark backgrounds. */
  tone?: 'dark' | 'light'
  /** Tailwind positioning classes; defaults to covering the parent. */
  position?: string
  className?: string
}

export function DotGrid({
  tone = 'dark',
  position = 'inset-0',
  className = '',
}: DotGridProps) {
  const pattern = tone === 'light' ? 'dot-grid-light' : 'dot-grid'
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${position} ${pattern} ${className}`}
    />
  )
}
