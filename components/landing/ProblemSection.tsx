"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { trackCTAClick } from "@/components/GoogleAnalytics"
import { HOTMART_CHECKOUT_URL } from "@/lib/nav-content"

const painPoints = [
  "Você começa várias coisas e não termina. Sabe exatamente o que precisa fazer, mas trava mesmo assim.",
  "Esquece compromissos, perde o fio das conversas, vive no piloto automático acompanhado de culpa.",
  "Já foi chamado de preguiçoso, irresponsável ou \"intenso demais\". E, no fundo, uma parte de você ainda acredita nisso.",
]

const doubts = ["É TDAH?", "É ansiedade?", "Sobrecarga?", "Exaustão mental?"]

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

export function ProblemSection() {
  return (
    <>
      {/* Context section */}
      <section id="problema" className="py-20 md:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="font-sans text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              O TDAH virou um dos assuntos mais falados na internet e, de repente, muita gente começa a se identificar. Isso gera dúvida. E a dúvida, muitas vezes, gera ainda mais ansiedade.
            </p>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-6">
            <p className="font-sans text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Se reconhecer em alguns sintomas não é o mesmo que ter um diagnóstico. Mas também não é fácil ficar preso nessa incerteza, sem saber se o que você sente tem um nome, ou se vale a pena buscar ajuda.
            </p>
          </FadeIn>
          <FadeIn delay={0.22} className="mt-8">
            <p className="font-sans text-xl md:text-2xl font-semibold" style={{ color: "var(--text-main)" }}>
              Este guia foi feito principalmente para quem suspeita de TDAH e precisa de mais clareza antes de dar o próximo passo, mas também para quem já recebeu o diagnóstico e ainda se sente perdido no processo.
            </p>
          </FadeIn>
          <FadeIn delay={0.42} className="mt-10">
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Problem - Quero adquirir o guia", HOTMART_CHECKOUT_URL)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100"
              style={{
                backgroundColor: "var(--sage)",
                color: "#ffffff",
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

      {/* Pain points section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--muted-bg)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p
              className="font-sans text-sm font-semibold tracking-widest uppercase mb-10"
              style={{ color: "var(--sage)" }}
            >
              Você se reconhece aqui?
            </p>
          </FadeIn>

          <div className="space-y-0">
            {painPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.09}>
                <div
                  className="flex items-start gap-5 py-5 border-b font-sans text-lg md:text-xl leading-relaxed"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-main)",
                  }}
                >
                  <span
                    className="rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--lilac)", width: "6px", height: "6px", marginTop: "12px" }}
                    aria-hidden="true"
                  />
                  {point}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* The doubt card */}
          <FadeIn delay={0.3} className="mt-16">
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{ backgroundColor: "var(--lilac-light)" }}
            >
              <p className="font-serif text-2xl md:text-3xl text-center mb-4" style={{ color: "var(--text-main)" }}>
                E a pergunta que não sai da cabeça:
              </p>
              <p
                className="font-serif text-4xl md:text-5xl text-center font-semibold mb-8"
                style={{ color: "var(--lilac)" }}
              >
                Será que sou eu, ou é TDAH?
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {doubts.map((d, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="px-5 py-2.5 rounded-full font-sans text-base font-medium"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "var(--text-main)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {d}
                  </motion.span>
                ))}
              </div>
              <p className="font-sans text-base text-center" style={{ color: "var(--text-muted)" }}>
                E agora você não sabe: vale a pena buscar ajuda? Será que é exagero? Ou será que isso finalmente explica o que está acontecendo com você? Será que realmente é TDAH ou outra coisa?
              </p>
            </div>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn delay={0.2} className="mt-16 text-center">
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed italic" style={{ color: "var(--text-main)" }}>
              &ldquo;A internet gera identificação,<br className="hidden md:block" />
              mas não gera critério.&rdquo;
            </blockquote>
            <p className="font-sans text-base mt-4" style={{ color: "var(--text-muted)" }}>
              Identificação não é diagnóstico. Mas clareza muda tudo.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
