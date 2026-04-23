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

export function GuaranteeSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#F7F8FB" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <div
            className="inline-flex flex-col items-center gap-6 p-10 md:p-14 rounded-3xl w-full relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0B1A3A 0%, #122A5C 100%)",
              border: "1px solid rgba(46,168,255,0.3)",
              boxShadow: "0 20px 60px rgba(11,26,58,0.3)",
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--electric) 0%, transparent 65%)" }}
              aria-hidden="true"
            />

            <div
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--electric), #1E3A8A)",
                boxShadow: "0 0 32px var(--electric-glow)",
              }}
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

            <div className="relative space-y-3">
              <p className="font-sans font-semibold text-[11px] tracking-[0.28em] uppercase" style={{ color: "var(--electric)" }}>
                O risco é todo meu
              </p>
              <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] text-white leading-tight">
                Garantia incondicional de 7 dias
              </h2>
              <p className="font-sans text-[15px] leading-relaxed max-w-md mx-auto text-white/75">
                Se nos primeiros 7 dias você sentir que o guia não faz sentido pra você, é só pedir reembolso direto na Hotmart. 100% do valor de volta, sem perguntas e sem burocracia.
              </p>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Guarantee - Garantir meu acesso agora", HOTMART_CHECKOUT_URL)}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-semibold text-[14px] tracking-wide text-white transition-all duration-300 hover:scale-[1.04]"
              style={{
                backgroundColor: "var(--electric)",
                boxShadow: "0 10px 32px var(--electric-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              Quero começar agora
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
