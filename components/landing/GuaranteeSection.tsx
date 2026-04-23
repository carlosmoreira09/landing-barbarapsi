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

export function GuaranteeSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <div
            className="inline-flex flex-col items-center gap-6 p-10 md:p-14 rounded-3xl w-full"
            style={{
              backgroundColor: "var(--sage-ultra)",
              border: "2px solid var(--sage-light)",
            }}
          >
            {/* Shield icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--sage)", flexShrink: 0 }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <path
                  d="M18 3L6 8v10c0 7.5 5 14.5 12 17 7-2.5 12-9.5 12-17V8L18 3z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M12 18l4 4 8-8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl md:text-4xl" style={{ color: "var(--text-main)" }}>
                Garantia incondicional de 7 dias
              </h2>
              <p className="font-sans text-base leading-relaxed max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
                Se nos primeiros 7 dias você sentir que o guia não faz sentido para você, basta solicitar o reembolso diretamente pela Hotmart. Devolvemos 100% do valor investido, sem perguntas e sem burocracia. O risco é todo nosso.
              </p>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100"
              style={{
                backgroundColor: "var(--sage)",
                color: "#ffffff",
                boxShadow: "0 4px 24px rgba(88,130,193,0.35)",
              }}
            >
              Garantir meu acesso agora
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
