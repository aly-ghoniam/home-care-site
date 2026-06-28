'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cookie-banner-dismissed'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-50 bg-ink text-white px-4 py-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          This website uses only essential cookies required for it to function. No tracking or
          analytics cookies are set.{' '}
          <a href="/cookie-policy" className="underline hover:text-white transition-colors duration-150">
            Cookie Policy
          </a>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 bg-white text-ink text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-pale transition-colors duration-150 active:scale-[0.97]"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
