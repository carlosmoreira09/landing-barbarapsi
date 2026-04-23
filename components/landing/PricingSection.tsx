"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/U104539766E"

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

export function PricingSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--muted-bg)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Emotional closing */}
        <FadeIn>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed" style={{ color: "var(--text-main)" }}>
            A dúvida não desaparece sozinha.
          </p>
          <p className="font-serif text-2xl md:text-3xl mt-3 leading-relaxed" style={{ color: "var(--text-main)" }}>
            Mas quando você entende o que está acontecendo,{" "}
            <span style={{ color: "var(--sage)" }}>ela deixa de te paralisar.</span>
          </p>
          <p className="font-sans text-lg mt-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Você ganha clareza, direção, critério, e começa a agir com mais segurança.
          </p>
        </FadeIn>

        {/* Price block */}
        <FadeIn delay={0.2}>
          <div
            className="mt-14 rounded-3xl p-10 md:p-14"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 40px rgba(44,62,58,0.08)",
            }}
          >
            <p className="font-sans text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Tudo por
            </p>
            <div className="flex items-baseline justify-center gap-2 mt-4">
              <span className="font-sans text-2xl" style={{ color: "var(--text-muted)" }}>R$</span>
              <span className="font-serif text-7xl md:text-8xl font-semibold" style={{ color: "var(--text-main)" }}>47</span>
            </div>
            <p className="font-sans text-sm mt-3" style={{ color: "var(--text-muted)" }}>
              ou em até 5x de R$&nbsp;10,31 no cartão
            </p>
            <p
              className="font-sans text-xs mt-2 font-semibold tracking-wide"
              style={{ color: "var(--sage)" }}
            >
              Preço de lançamento. Sobe em breve.
            </p>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-3 px-8 py-5 rounded-full font-sans font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
              style={{
                backgroundColor: "var(--sage)",
                color: "#ffffff",
                boxShadow: "0 6px 32px rgba(88,130,193,0.4)",
              }}
            >
              Garantir meu acesso
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { label: "Pagamento seguro" },
                { label: "Acesso imediato" },
                { label: "Garantia de 7 dias" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 font-sans text-sm" style={{ color: "var(--text-muted)" }}>
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--sage)" }}
                    aria-hidden="true"
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
