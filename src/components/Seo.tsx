import { useEffect } from 'react'
import { BUSINESS } from '../data/site'

type Props = { title: string; description: string; path?: string }

export default function Seo({ title, description, path = '/' }: Props) {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '')
    const canonical = `${siteUrl}${path === '/' ? '/' : path}`
    document.title = title

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = description

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    const existing = document.getElementById('hafiz-structured-data')
    if (existing) existing.remove()
    const script = document.createElement('script')
    script.id = 'hafiz-structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', name: BUSINESS.name, url: siteUrl, telephone: BUSINESS.phone },
        {
          '@type': 'LocalBusiness',
          name: BUSINESS.name,
          telephone: BUSINESS.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Pabla, Incholi',
            addressLocality: 'Meerut',
            addressRegion: 'Uttar Pradesh',
            addressCountry: 'IN',
          },
          url: canonical,
        },
      ],
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [title, description, path])

  return null
}
