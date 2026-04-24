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

export function PricingSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#F7F8FB" }}>
      {/* Soft blue ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(46,168,255,0.25) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <p className="font-sans font-semibold text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "var(--electric)" }}>
            Seu acesso
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] text-balance" style={{ color: "var(--navy)" }}>
            A dúvida não some sozinha.<br />
            <span style={{ color: "var(--electric)", fontStyle: "italic", fontSize: 26 }}>Mas ter clareza não custa caro.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="mt-12 rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #F7F8FB 100%)",
              border: "1px solid rgba(46,168,255,0.2)",
              boxShadow: "0 20px 60px rgba(11,26,58,0.1), 0 0 0 1px rgba(46,168,255,0.05)",
            }}
          >
            {/* Top electric accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(to right, transparent, var(--electric) 50%, transparent)",
              }}
            />

            <p className="font-sans font-semibold text-[10.5px] tracking-[0.3em] uppercase" style={{ color: "var(--text-muted)" }}>
              Investimento único
            </p>
            {/* Discount badge */}
            <div
              className="inline-flex items-center gap-1.5 mt-4 px-3.5 py-1.5 rounded-full"
              style={{
                background: "rgba(228,108,108,0.1)",
                border: "1px solid rgba(228,108,108,0.3)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#D94343", boxShadow: "0 0 6px rgba(228,108,108,0.6)" }}
                aria-hidden="true"
              />
              <span className="font-sans font-bold text-[11px] tracking-[0.22em] uppercase" style={{ color: "#C0392B" }}>
                Economize R$ 50 · 51% OFF
              </span>
            </div>

            <div className="flex items-baseline justify-center gap-5 md:gap-6 mt-5">
              {/* Old price — crossed out in red */}
              <div className="flex items-baseline gap-1">
                <span className="font-sans text-[13px] md:text-[15px] font-semibold" style={{ color: "#C0392B" }}>
                  De R$
                </span>
                <span
                  className="font-serif text-[2.25rem] md:text-[3rem] font-semibold leading-none line-through decoration-[2.5px]"
                  style={{ color: "#C0392B", textDecorationColor: "#D94343" }}
                >
                  97
                </span>
              </div>

              {/* New price — hero */}
              <div className="flex items-baseline gap-1">
                <span className="font-sans text-xl md:text-2xl font-medium" style={{ color: "var(--text-muted)" }}>
                  por R$
                </span>
                <span
                  className="font-serif text-[5rem] md:text-[6.5rem] font-semibold leading-none"
                  style={{
                    background: "linear-gradient(180deg, var(--navy) 0%, var(--electric) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  47
                </span>
              </div>
            </div>
            <p className="font-sans text-[14px] mt-3" style={{ color: "var(--text-muted)" }}>
              ou em até 5x de R$&nbsp;10,31 no cartão
            </p>
            <p className="font-sans text-[11px] mt-2 font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--electric)" }}>
              Preço de lançamento · Sobe em breve
            </p>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Pricing - Garantir meu acesso", HOTMART_CHECKOUT_URL)}
              className="group mt-8 w-full flex items-center justify-center gap-3 px-8 py-5 rounded-full font-sans font-semibold text-[15px] tracking-wide text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--electric)",
                boxShadow: "0 10px 36px var(--electric-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              Garantir meu acesso
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["Pagamento seguro", "Acesso imediato", "Garantia de 7 dias"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 font-sans text-[13px]" style={{ color: "var(--text-muted)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6.5l2.5 2.5L10 3" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
