import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Davolifin — Cabinet comptable & fiscal (Nivelles, Belgique)',
  description: 'Comptabilité, fiscalité et conseil pour indépendants & PME. Forfait dès 350 €, FR/NL/EN. Davolifin — Nivelles, Belgique.',
  alternates: {
    canonical: 'https://ton-domaine.tld/en',
    languages: {
      'fr': 'https://ton-domaine.tld/fr',
      'nl': 'https://ton-domaine.tld/nl',
      'en': 'https://ton-domaine.tld/en',
      'x-default': 'https://ton-domaine.tld/'
    }
  },
  openGraph: {
    title: 'Davolifin — Cabinet comptable & fiscal (Nivelles, Belgique)',
    description: 'Comptabilité, fiscalité et conseil pour indépendants & PME. Forfait dès 350 €, FR/NL/EN.',
    url: 'https://ton-domaine.tld/en',
    siteName: 'Davolifin',
    images: [{ url: 'https://ton-domaine.tld/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davolifin — Cabinet comptable & fiscal (Nivelles, Belgique)',
    description: 'Comptabilité, fiscalité et conseil pour indépendants & PME.',
    images: ['https://ton-domaine.tld/og-image.jpg']
  }
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header locale="en" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
