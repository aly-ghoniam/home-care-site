import { Phone } from '@phosphor-icons/react/dist/ssr'

interface PhoneCTAProps {
  phone: string
  size?: 'compact' | 'large'
  variant?: 'dark' | 'light'
}

export function PhoneCTA({ phone, size = 'compact', variant = 'dark' }: PhoneCTAProps) {
  const tel = `tel:${phone.replace(/\s/g, '')}`
  const isLight = variant === 'light'

  if (size === 'large') {
    return (
      <a
        href={tel}
        className={[
          'inline-flex items-center gap-3 font-bold text-2xl rounded-xl px-8 py-5 transition-all duration-200 active:scale-[0.97]',
          isLight
            ? 'bg-blue-baby text-navy hover:bg-white [animation:pulse-cta_2.5s_ease-out_infinite]'
            : 'bg-navy text-white hover:bg-navy-rich',
        ].join(' ')}
        aria-label={`Call us on ${phone}`}
      >
        <Phone size={28} weight="fill" aria-hidden="true" />
        <span>{phone}</span>
      </a>
    )
  }

  return (
    <a
      href={tel}
      className={[
        'inline-flex items-center gap-2 font-semibold text-lg rounded-lg px-5 py-2.5 transition-colors duration-200 active:scale-[0.97]',
        isLight
          ? 'bg-blue-baby text-navy hover:bg-blue-pale'
          : 'bg-navy text-white hover:bg-navy-rich',
      ].join(' ')}
      aria-label={`Call us on ${phone}`}
    >
      <Phone size={18} weight="fill" aria-hidden="true" />
      <span>{phone}</span>
    </a>
  )
}
