import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Lora } from 'next/font/google'
import './globals.css'
import { Header } from '../views/layout/Header'
import { Footer } from '../views/layout/Footer'
import { CookieBanner } from '../views/layout/CookieBanner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Home Care Services London',
  description: 'Compassionate domiciliary home care across London.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
