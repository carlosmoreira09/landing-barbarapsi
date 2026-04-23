import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TDAH na Vida Adulta, Bárbara Leal Reis',
    short_name: 'TDAH Adulta',
    description:
      'Guia digital com clareza e estratégias práticas sobre TDAH para adultos, criado pela neuropsicóloga Bárbara Leal Reis.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F8FB',
    theme_color: '#5882C1',
    lang: 'pt-BR',
    orientation: 'portrait',
    categories: ['education', 'health', 'lifestyle'],
    icons: [
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-uw98VpaoWHLfaHivD7bIE6bqLmT9ks.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-FfcSE43Fhq36usEANMv8ZPGyiblRK0.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}
