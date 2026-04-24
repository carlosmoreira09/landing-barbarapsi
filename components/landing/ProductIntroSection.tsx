"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { trackCTAClick } from "@/components/GoogleAnalytics"
import { HOTMART_CHECKOUT_URL } from "@/lib/nav-content"

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

const learnItems = [
  {
    num: "01",
    title: "O que realmente caracteriza o TDAH, além dos vídeos",
    desc: "A diferença entre se identificar com sintomas e ter um quadro real. Você entende o que os critérios diagnósticos são, de fato, e não apenas as listas simplificadas da internet.",
  },
  {
    num: "02",
    title: "Como saber se é TDAH, ansiedade, ou os dois juntos",
    desc: "Muitos sintomas se sobrepõem. Entender a diferença é o que permite saber se vale buscar avaliação e com qual profissional começar.",
  },
  {
    num: "03",
    title: "O caminho certo para buscar ajuda, sem atalhos",
    desc: "Quando faz sentido buscar diagnóstico formal, como funciona o processo e o que esperar, sem urgência precipitada e sem paralisia por medo de parecer exagero.",
  },
  {
    num: "04",
    title: "Porque algumas dificuldades persistem mesmo com esforço",
    desc: "Se você tem TDAH ou suspeita ter, vai entender por que iniciar, sustentar e finalizar tarefas é difícil, e que isso não é falta de força de vontade.",
  },
]

const outcomes = [
  "Entender se o que você sente realmente parece ser TDAH",
  "Parar de ficar preso na dúvida sobre buscar ou não ajuda para identificar",
  "Iniciar tarefas com menos resistência, mesmo sem um diagnóstico",
  "Reduzir a sobrecarga antes que ela vire paralisia",
  "Organizar a rotina de forma mais realista e possível para o seu funcionamento",
  "Se compreender melhor, sem culpa e sem rótulos simplistas",
]

export function ProductIntroSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn>
          <p className="font-sans text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>
            Conteúdo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance" style={{ color: "var(--text-main)" }}>
            O que você vai encontrar no guia:
          </h2>
        </FadeIn>

        {/* Numbered items */}
        <div className="mt-14 space-y-0">
          {learnItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex items-start gap-6 md:gap-10 py-8 border-b group"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-serif text-4xl md:text-5xl font-semibold flex-shrink-0 leading-none select-none transition-colors duration-300"
                  style={{ color: "var(--sage-light)", minWidth: "3rem" }}
                >
                  {item.num}
                </span>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl" style={{ color: "var(--text-main)" }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Outcomes banner */}
        <FadeIn delay={0.2} className="mt-16">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, var(--sage-ultra) 0%, var(--lilac-light) 100%)",
              border: "1px solid var(--sage-light)",
            }}
          >
            <p className="font-serif text-2xl md:text-3xl mb-8" style={{ color: "var(--text-main)" }}>
              Com este guia, você consegue:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--sage)", minWidth: "1.5rem" }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5l3.5 3.5L11 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-main)" }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.35} className="mt-10 flex justify-center">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("ProductIntro - Quero adquirir o guia", HOTMART_CHECKOUT_URL)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100 text-white"
            style={{
              backgroundColor: "var(--sage)",
              boxShadow: "0 4px 24px rgba(37,99,235,0.3)",
            }}
          >
            QUERO ADQUIRIR O GUIA
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
