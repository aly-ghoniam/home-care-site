import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  /** Tone controls the text colour against light vs dark backgrounds. */
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Small uppercase tracked label used above section headings to add
 * editorial rhythm. The leading rule is drawn via the `.eyebrow` class.
 */
export function Eyebrow({ children, tone = 'dark', className = '' }: EyebrowProps) {
  const color = tone === 'light' ? 'text-blue-baby' : 'text-navy/70'
  return <p className={`eyebrow ${color} ${className}`}>{children}</p>
}
