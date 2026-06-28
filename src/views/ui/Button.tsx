import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-navy-rich active:scale-[0.97] transition-colors duration-150',
  ghost:
    'border-2 border-navy text-navy hover:bg-blue-pale active:scale-[0.97] transition-colors duration-150',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-base rounded-lg',
  md: 'px-6 py-3 text-lg rounded-lg',
  lg: 'px-8 py-4 text-xl rounded-xl',
}

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-semibold transition-transform duration-150 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }

  return <button className={base}>{children}</button>
}
