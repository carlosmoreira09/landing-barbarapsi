"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { trackCTAClick } from "@/components/GoogleAnalytics"
import { HOTMART_CHECKOUT_URL } from "@/lib/nav-content"

const painPoints = [
  "Você começa várias coisas e não termina. Sabe exatamente o que precisa fazer, mas trava mesmo assim.",
  "Esquece compromissos, perde o fio das conversas, vive no piloto automático acompanhado de culpa.",
  "Já foi chamado de preguiçoso, irresponsável ou \"intenso demais\". E, no fundo, uma parte de você ainda acredita nisso.",
]

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
      {/* Audience banner section */}
      <section id="problema" className="py-20 md:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: "linear-gradient(135deg, var(--sage-ultra) 0%, var(--lilac-light) 100%)",
                border: "1px solid var(--sage-light)",
              }}
            >
              <p className="font-serif text-2xl md:text-3xl mb-8" style={{ color: "var(--text-main)" }}>
                Ele é direcionado para quem:
              </p>

              <div className="space-y-5 mb-8">
                {[
                  "Suspeita de TDAH e quer entender melhor o próprio funcionamento antes de tomar qualquer decisão;",
                  "Está em dúvida entre TDAH, ansiedade ou outras possibilidades, e precisa de clareza para diferenciar;",
                  "Já recebeu o diagnóstico, mas ainda se sente perdido sobre como lidar com isso na prática.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--sage)", minWidth: "1.5rem" }}
                      aria-hidden="true"
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5l3.5 3.5L11 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="font-sans text-lg leading-relaxed" style={{ color: "var(--text-main)" }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-8 pt-8"
                style={{ borderTop: "1px solid var(--sage-light)" }}
              >
                <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  O objetivo é te ajudar a entender melhor o TDAH antes de tirar conclusões por conta própria, e te direcionar sobre como lidar com essa possibilidade de forma mais segura, clara e consciente.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pain points section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--muted-bg)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-12">

          {/* Banner card */}
          <FadeIn>
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: "linear-gradient(135deg, var(--lilac-light) 0%, var(--sage-ultra) 100%)",
                border: "1px solid var(--lilac)",
              }}
            >
              <p className="font-serif text-2xl md:text-3xl mb-8" style={{ color: "var(--text-main)" }}>
                Você se reconhece aqui?
              </p>

              <div className="space-y-5">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--lilac)", minWidth: "1.5rem" }}
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <p className="font-sans text-lg leading-relaxed" style={{ color: "var(--text-main)" }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Doubt text */}
          <FadeIn delay={0.2} className="mt-10">
            <p className="font-sans text-lg md:text-xl leading-relaxed text-center" style={{ color: "var(--text-muted)" }}>
              E agora você não sabe: vale a pena buscar ajuda? Será que é exagero? Ou será que isso finalmente explica o que está acontecendo com você? Será que realmente é TDAH ou outra coisa?
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.35} className="mt-10 flex justify-center">
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Problem - Quero adquirir o guia", HOTMART_CHECKOUT_URL)}
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
    </>
  )
}
