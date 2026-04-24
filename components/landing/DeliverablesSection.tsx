"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

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

const deliverables = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "PDF completo",
    desc: "Conteúdo estruturado para você ler no seu tempo, com explicações claras e aprofundadas.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 10l7 4-7 4V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Áudio",
    desc: "Para ouvir quando quiser, ideal para absorver o conteúdo de forma mais leve no dia a dia.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 10.5l6 3.5-6 3.5V10.5z" fill="currentColor" />
      </svg>
    ),
    title: "Vídeo",
    desc: "Uma versão mais visual e acessível, facilitando a compreensão dos pontos principais.",
  },
]

export function DeliverablesSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16">
          <p
            className="font-sans text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--sage)" }}
          >
            O que você recebe
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance" style={{ color: "var(--text-main)" }}>
            Ao adquirir este guia, você recebe:
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex items-start gap-5 p-6 rounded-2xl transition-shadow duration-300 hover:shadow-md"
                style={{
                  backgroundColor: "var(--sage-ultra)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="flex-shrink-0 mt-1 p-3 rounded-xl"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "var(--sage)",
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-lg" style={{ color: "var(--text-main)" }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed mt-1" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* AI disclaimer */}
        <FadeIn delay={0.5} className="mt-10">
          <div
            className="rounded-2xl px-6 py-5 flex items-start gap-4"
            style={{
              backgroundColor: "var(--sage-ultra)",
              border: "1px solid var(--sage-light)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
              <circle cx="10" cy="10" r="9" stroke="var(--sage)" strokeWidth="1.5"/>
              <path d="M10 9v5M10 7h.01" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text-main)" }}>Transparência importante:</strong> as versões em áudio e vídeo foram produzidas com inteligência artificial, utilizando minha imagem e voz. Todo o conteúdo é 100% meu, mas a experiência pode ser diferente de um vídeo gravado de forma tradicional. Preferi deixar isso claro para que você saiba exatamente o que esperar antes da compra.
            </p>
          </div>
        </FadeIn>

        {/* Closing statement */}
        <FadeIn delay={0.65} className="mt-14 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed" style={{ color: "var(--text-main)" }}>
            A dúvida não desaparece sozinha.
          </p>
          <p className="font-serif text-2xl md:text-3xl mt-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Mas quando você entende o que está acontecendo, ela deixa de te paralisar.
          </p>
          <p className="font-sans text-lg mt-4" style={{ color: "var(--sage)" }}>
            Você ganha clareza, direção, critério, e começa a agir com mais segurança.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
