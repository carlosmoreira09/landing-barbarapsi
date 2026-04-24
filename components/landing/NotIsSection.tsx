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

const notItems = [
  "Não é um teste online para dizer se você tem TDAH",
  "Não substitui avaliação médica ou psicológica",
  "Não fornece diagnóstico",
  "Não promete cura",
  "Não promete produtividade perfeita",
  "Não simplifica uma condição complexa",
]

export function NotIsSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--muted-bg)" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p
            className="font-sans text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--warm-red)" }}
          >
            Transparência
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance" style={{ color: "var(--text-main)" }}>
            O que este produto NÃO é
          </h2>
          <p className="font-sans text-base mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Clareza também é saber o que esperar, e o que não esperar.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-0">
          {notItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="flex items-start gap-5 py-5 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#FAE8E8", minWidth: "1.5rem" }}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="var(--warm-red)" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="font-sans text-lg leading-relaxed" style={{ color: "var(--text-main)" }}>
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing statement */}
        <FadeIn delay={0.3} className="mt-16">
          <div
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{ backgroundColor: "var(--sage-ultra)", border: "1px solid var(--sage-light)" }}
          >
            <p className="font-serif text-2xl md:text-3xl leading-relaxed" style={{ color: "var(--text-main)" }}>
              Não é sobre rótulos.
            </p>
            <p
              className="font-serif text-2xl md:text-3xl mt-2 font-semibold"
              style={{ color: "var(--sage)" }}
            >
              É sobre entender o que está acontecendo com você.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
