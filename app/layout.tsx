import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { CookieBanner } from '@/components/landing/CookieBanner'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { JsonLd } from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz'],
})

const BASE_URL = 'https://tdahnavidaadulta.barbaralealreis.com'

export const viewport: Viewport = {
  themeColor: '#0B1A3A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'TDAH na Vida Adulta, Bárbara Leal Reis',
    template: '%s, Bárbara Leal Reis',
  },
  description:
    'Você não é preguiçoso. Seu cérebro só funciona diferente. Guia digital com clareza e estratégias práticas sobre TDAH para adultos, criado pela neuropsicóloga Bárbara Leal Reis (CRP 05/56240). R$ 47.',
  keywords: [
    'TDAH adulto',
    'diagnóstico TDAH',
    'TDAH mulheres',
    'TDAH na vida adulta',
    'guia TDAH',
    'psicologia TDAH',
    'Bárbara Leal Reis',
    'neuropsicologia',
    'neurodivergência adulto',
    'TCC TDAH',
    'avaliação neuropsicológica',
    'TDAH diagnóstico tardio',
  ],
  authors: [{ name: 'Bárbara Leal Reis', url: BASE_URL }],
  creator: 'Bárbara Leal Reis',
  publisher: 'Bárbara Leal Reis',
  category: 'psychology',
  alternates: {
    canonical: BASE_URL,
    languages: { 'pt-BR': BASE_URL },
  },
  openGraph: {
    title: 'TDAH na Vida Adulta, Bárbara Leal Reis',
    description:
      'Você não é preguiçoso. Seu cérebro só funciona diferente. Guia digital com clareza e estratégias práticas sobre TDAH para adultos. R$ 47.',
    url: BASE_URL,
    siteName: 'TDAH na Vida Adulta',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9927-NnnoZxoOXLIrA6WJRfqo1I5bg1572S.jpg',
        width: 1200,
        height: 630,
        alt: 'Bárbara Leal Reis, neuropsicóloga especialista em TDAH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDAH na Vida Adulta, Bárbara Leal Reis',
    description:
      'Guia digital com clareza e estratégias práticas sobre TDAH para adultos. R$ 47.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9927-NnnoZxoOXLIrA6WJRfqo1I5bg1572S.jpg'],
    creator: '@psi.barbarareis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-FfcSE43Fhq36usEANMv8ZPGyiblRK0.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-uw98VpaoWHLfaHivD7bIE6bqLmT9ks.png', sizes: '16x16', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
