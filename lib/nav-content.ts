export const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/U104539766E"

export type MenuItem = {
  id: string
  title: string
  eyebrow: string
  headline: string
  body: string
  bullets?: string[]
  accent?: "electric" | "warm"
  image?: string
}

export type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "por-que",
    label: "Por que esse guia",
    items: [
      {
        id: "duvida",
        eyebrow: "O problema",
        title: "Você vive na dúvida",
        headline: "Será que sou eu, ou é TDAH?",
        body: "Você abriu a internet, viu vídeos sobre TDAH, se identificou com quase tudo. E agora não consegue parar de pensar nisso. Não sabe se é ansiedade, cansaço ou realmente TDAH. A dúvida te paralisa mais que qualquer sintoma.",
        bullets: [
          "Começa várias coisas e não termina",
          "Esquece compromissos, perde o fio das conversas",
          "Já te chamaram de preguiçoso ou intenso demais",
          "Sente culpa todos os dias por não dar conta",
        ],
        accent: "electric",
      },
      {
        id: "pra-quem-e",
        eyebrow: "Pra quem é",
        title: "Para quem é esse guia",
        headline: "Feito pra quem precisa de clareza, não de mais achismo.",
        body: "Esse guia é principalmente para quem suspeita de TDAH e precisa de critério antes do próximo passo. Também serve para quem já tem diagnóstico e ainda se sente perdido na prática.",
        bullets: [
          "Suspeita de TDAH e quer entender o próprio funcionamento",
          "Está em dúvida entre TDAH, ansiedade ou outras possibilidades",
          "Já tem diagnóstico mas não sabe como aplicar no dia a dia",
        ],
        accent: "electric",
      },
      {
        id: "pra-quem-nao-e",
        eyebrow: "Transparência",
        title: "Pra quem NÃO é",
        headline: "Clareza também é saber o que não esperar.",
        body: "Preferi deixar isso claro antes da compra — respeitar seu tempo e seu dinheiro.",
        bullets: [
          "Não é um teste online para dizer se você tem TDAH",
          "Não substitui avaliação médica ou psicológica",
          "Não fornece diagnóstico nem promete cura",
          "Não promete produtividade perfeita",
        ],
        accent: "warm",
      },
    ],
  },
  {
    id: "dentro",
    label: "O que tem dentro",
    items: [
      {
        id: "aprende",
        eyebrow: "Conteúdo",
        title: "O que você vai aprender",
        headline: "Sai sabendo o que a internet não te conta.",
        body: "Conteúdo estruturado em módulos curtos, direto ao ponto, feito para quem tem dificuldade de foco.",
        bullets: [
          "O que realmente caracteriza o TDAH, além dos vídeos",
          "Como saber se é TDAH, ansiedade ou os dois juntos",
          "O caminho certo para buscar ajuda, sem atalhos",
          "Por que algumas dificuldades persistem mesmo com esforço",
        ],
        accent: "electric",
      },
      {
        id: "estrategias",
        eyebrow: "Prática",
        title: "Estratégias práticas",
        headline: "Para aplicar hoje, sem esperar diagnóstico.",
        body: "Estratégias estruturadas para respeitar como você funciona — e não para forçar um padrão que nunca funcionou antes.",
        bullets: [
          "Iniciar tarefas com menos resistência",
          "Reduzir a sobrecarga antes que vire paralisia",
          "Organizar a rotina de forma realista",
          "Se compreender sem culpa e sem rótulos simplistas",
        ],
        accent: "electric",
      },
      {
        id: "formatos",
        eyebrow: "Formatos",
        title: "PDF, áudio e vídeo",
        headline: "Consome do jeito que seu cérebro permite.",
        body: "4 formatos para o mesmo conteúdo. Você escolhe como consumir — lendo, ouvindo no trânsito ou assistindo.",
        bullets: [
          "Guia completo em PDF, organizado em módulos",
          "Versão em áudio para ouvir em movimento",
          "Versão em vídeo, narrada com apoio de IA",
          "Bônus práticos para aplicar no dia a dia",
        ],
        accent: "electric",
      },
    ],
  },
  {
    id: "sobre",
    label: "Sobre a Bárbara",
    items: [
      {
        id: "bio",
        eyebrow: "Quem é",
        title: "Bárbara Leal Reis",
        headline: "Neuropsicóloga, 8 anos de prática clínica.",
        body: "Atua com avaliação neuropsicológica e acompanhamento de pessoas neurodivergentes, em especial TDAH e TEA. Já fez mais de 80 avaliações neuropsicológicas completas, com laudo e diagnóstico baseado em evidências.",
        bullets: [
          "Psicologia — Universidade Federal Fluminense (UFF)",
          "Pós-graduação em Neuropsicologia Clínica",
          "Mestrado em Psicologia Clínica, PUC-Rio",
          "Doutorado em andamento (PhD, Austrália — bolsa RTP)",
        ],
        accent: "electric",
      },
      {
        id: "registros",
        eyebrow: "Registros",
        title: "Registro profissional",
        headline: "Atuação validada nos 2 países.",
        body: "Em 2025 mudou para a Austrália, validou o diploma e hoje atua como Counsellor e Provisional Psychologist registrada.",
        bullets: [
          "CRP 05/56240 — Conselho Regional de Psicologia, Rio de Janeiro",
          "ACA Level 4, n. 30303 — Australia Counselling Association",
          "AHPRA PSY0004022953 — Provisional Psychologist, Austrália",
        ],
        accent: "electric",
      },
      {
        id: "instagram",
        eyebrow: "Acompanhe",
        title: "@psi.barbarareis",
        headline: "Conteúdo gratuito no Instagram.",
        body: "Se quiser sentir o tom antes de comprar, dá uma olhada no Instagram. Posts frequentes sobre TDAH, neurodivergência e saúde mental.",
        bullets: [
          "Conteúdo educativo sobre TDAH adulto",
          "Desmistificação de diagnósticos",
          "Recortes de prática clínica e estudos recentes",
        ],
        accent: "electric",
      },
    ],
  },
  {
    id: "duvidas",
    label: "Dúvidas",
    items: [
      {
        id: "diagnostico",
        eyebrow: "FAQ",
        title: "Preciso ter diagnóstico?",
        headline: "Não. O guia foi feito exatamente para quem ainda não tem.",
        body: "O foco principal é quem suspeita de TDAH e não sabe o que fazer com a dúvida. Também ajuda quem já tem diagnóstico e quer entender como lidar na prática.",
        accent: "electric",
      },
      {
        id: "substitui",
        eyebrow: "FAQ",
        title: "Substitui consulta com psicólogo?",
        headline: "Não, e faço questão de deixar isso claro.",
        body: "É um guia educativo que complementa, nunca substitui, o acompanhamento de um profissional de saúde. Essa honestidade é central no meu trabalho.",
        accent: "electric",
      },
      {
        id: "foco",
        eyebrow: "FAQ",
        title: "Vou conseguir consumir mesmo com dificuldade de foco?",
        headline: "Sim. O formato foi pensado exatamente pra isso.",
        body: "Módulos curtos, versões em áudio e vídeo para respeitar diferentes formas de consumir informação. O vídeo e áudio foram produzidos com IA usando minha imagem e voz — o conteúdo é 100% meu.",
        accent: "electric",
      },
      {
        id: "acesso",
        eyebrow: "FAQ",
        title: "Como recebo o material?",
        headline: "Acesso imediato após confirmação do pagamento.",
        body: "Liberação instantânea pela Hotmart via e-mail cadastrado. Você também acessa diretamente pela sua conta na plataforma.",
        accent: "electric",
      },
      {
        id: "garantia",
        eyebrow: "FAQ",
        title: "Existe garantia?",
        headline: "7 dias incondicionais. Sem perguntas.",
        body: "Se nos primeiros 7 dias sentir que o guia não faz sentido pra você, é só pedir reembolso direto na Hotmart. 100% do valor de volta, sem burocracia. O risco é meu.",
        accent: "electric",
      },
    ],
  },
]
