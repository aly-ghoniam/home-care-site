import type { ReactNode } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const SIZE_MAP: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
  h2: 'text-3xl sm:text-4xl font-bold leading-tight tracking-tight',
  h3: 'text-2xl sm:text-3xl font-semibold leading-snug',
  h4: 'text-xl sm:text-2xl font-semibold leading-snug',
  h5: 'text-lg sm:text-xl font-semibold',
  h6: 'text-base sm:text-lg font-semibold',
}

interface HeadingProps {
  as?: HeadingLevel
  children: ReactNode
  className?: string
  id?: string
}

export function Heading({ as: Tag = 'h2', children, className = '', id }: HeadingProps) {
  return (
    <Tag id={id} className={`${SIZE_MAP[Tag]} ${className}`}>
      {children}
    </Tag>
  )
}
