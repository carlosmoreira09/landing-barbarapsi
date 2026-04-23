"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const faqs = [
  {
    q: "Esse guia é só para quem já tem o diagnóstico de TDAH?",
    a: "Não. O foco principal é para quem suspeita de TDAH e ainda não sabe o que fazer com essa dúvida. Também é útil para quem já tem o diagnóstico e quer entender melhor como lidar com as dificuldades do dia a dia, você começa de onde está.",
  },
  {
    q: "Este guia substitui uma consulta com psicólogo ou psiquiatra?",
    a: "Não, e deixo isso muito claro dentro do material. É um guia educativo e prático que complementa, nunca substitui, o acompanhamento profissional. Essa honestidade é central na minha abordagem.",
  },
  {
    q: "Vou conseguir acompanhar mesmo tendo dificuldade de foco?",
    a: "Sim. O conteúdo foi estruturado em módulos curtos, com versões em áudio e vídeo justamente para respeitar diferentes formas de consumir informação. Vale dizer: o vídeo e o áudio foram produzidos com IA usando minha imagem e voz, então a experiência é diferente de um vídeo gravado por mim diretamente, mas o conteúdo é todo meu.",
  },
  {
    q: "Como recebo o material após a compra?",
    a: "Após a confirmação do pagamento pela Hotmart, você recebe o acesso imediato no e-mail cadastrado e também pode acessar diretamente pela sua conta na plataforma.",
  },
  {
    q: "Existe garantia?",
    a: "Sim. Você tem 7 dias de garantia incondicional pela Hotmart, se não gostar é só solicitar o reembolso diretamente na plataforma. 100% do valor investido, sem perguntas.",
  },
]

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span
          className="font-sans text-lg font-medium leading-snug"
          style={{ color: "var(--text-main)" }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: open ? "var(--sage)" : "var(--sage-ultra)",
            color: open ? "#ffffff" : "var(--sage)",
          }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--muted-bg)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <FadeIn className="mb-12">
          <p
            className="font-sans text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--sage)" }}
          >
            Dúvidas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance" style={{ color: "var(--text-main)" }}>
            Perguntas frequentes
          </h2>
        </FadeIn>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
