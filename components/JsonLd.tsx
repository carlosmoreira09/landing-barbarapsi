const BASE_URL = 'https://tdahnavidaadulta.barbaralealreis.com'

const personSchema = {
  '@type': 'Person',
  name: 'Bárbara Leal Reis',
  jobTitle: 'Neuropsicóloga e Psicóloga',
  description:
    'Neuropsicóloga e psicóloga clínica e do esporte, especialista em TDAH e neurodivergência. Mestre em Psicologia Clínica pela PUC-Rio.',
  url: BASE_URL,
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Mestrado',
      name: 'Mestre em Psicologia Clínica',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)',
      },
    },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'TDAH na Vida Adulta',
  description:
    'Guia digital em PDF, áudio e vídeo com clareza e estratégias práticas sobre TDAH para adultos, criado pela neuropsicóloga Bárbara Leal Reis.',
  url: BASE_URL,
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9927-NnnoZxoOXLIrA6WJRfqo1I5bg1572S.jpg',
  brand: {
    '@type': 'Brand',
    name: 'Bárbara Leal Reis',
  },
  author: personSchema,
  offers: {
    '@type': 'Offer',
    price: '47.00',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: 'https://pay.hotmart.com/U104539766E',
    seller: {
      '@type': 'Person',
      name: 'Bárbara Leal Reis',
    },
  },
  inLanguage: 'pt-BR',
  audience: {
    '@type': 'Audience',
    audienceType: 'Adultos com suspeita ou diagnóstico de TDAH',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'TDAH na Vida Adulta, Bárbara Leal Reis',
  description:
    'Clareza e estratégias práticas entre a suspeita e o diagnóstico. Um guia técnico e prático criado por Bárbara Leal Reis, neuropsicóloga.',
  url: BASE_URL,
  inLanguage: 'pt-BR',
  publisher: {
    '@type': 'Person',
    name: 'Bárbara Leal Reis',
    url: BASE_URL,
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: BASE_URL,
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Este guia substitui uma consulta com psicólogo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. É um material educativo e prático que complementa, nunca substitui, o acompanhamento profissional.',
      },
    },
    {
      '@type': 'Question',
      name: 'O guia serve para quem ainda não tem diagnóstico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O material foi criado especialmente para quem está entre a suspeita e o diagnóstico, e também para quem já tem diagnóstico mas ainda não entende o que fazer com isso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tem garantia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Você tem 7 dias de garantia incondicional pela Hotmart. 100% do valor investido devolvido, sem perguntas.',
      },
    },
    {
      '@type': 'Question',
      name: 'O guia é só para mulheres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O conteúdo é para qualquer adulto que suspeite ou tenha diagnóstico de TDAH. Porém, como o TDAH em mulheres é frequentemente subdiagnosticado, há atenção especial para esse público.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como vou receber o material?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Após a confirmação do pagamento pela Hotmart, você recebe acesso imediato ao guia em PDF, áudio e vídeo diretamente na plataforma.',
      },
    },
  ],
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
