import type { Metadata } from 'next'
import { SEO } from '../models/content/seo'

export function getMetadata(pageKey: string): Metadata {
  const meta = SEO[pageKey] ?? SEO['home']
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonicalPath },
  }
}
