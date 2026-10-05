import type { MetadataRoute } from 'next'

const BASE_URL = 'https://tdahnavidaadulta.barbaralealreis.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

// Sem servidor (output: export) a rota de metadata precisa ser gerada no build.
export const dynamic = 'force-static'
