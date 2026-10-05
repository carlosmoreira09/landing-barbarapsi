import type { MetadataRoute } from 'next'

const BASE_URL = 'https://tdahnavidaadulta.barbaralealreis.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

// Sem servidor (output: export) a rota de metadata precisa ser gerada no build.
export const dynamic = 'force-static'
