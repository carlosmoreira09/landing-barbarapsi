"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { HOTMART_CHECKOUT_URL } from "@/lib/nav-content"
import { trackCTAClick } from "@/components/GoogleAnalytics"

const painPoints = [
  { tag: "Dúvida", text: "Viu um vídeo sobre TDAH, se identificou com quase tudo, mas não tem certeza se é TDAH, ansiedade ou cansaço." },
  { tag: "Travamento", text: "Começa várias coisas e não termina. Sabe o que precisa fazer, mas trava mesmo assim." },
  { tag: "Esquecimento", text: "Esquece compromissos, perde o fio das conversas, vive no piloto automático com culpa." },
  { tag: "Rótulo", text: "Já te chamaram de preguiçoso, irresponsável ou intenso demais. Uma parte de você ainda acredita nisso." },
]

const doubts = ["É TDAH?", "É ansiedade?", "Sobrecarga?", "Burnout?", "Sou eu?"]

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function IdentitySection() {
  return (
    <section
      id="identidade"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #091228 0%, #0B1A3A 50%, #122A5C 100%)" }}
    >
      {/* Ambient electric glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--electric) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <FadeIn className="max-w-2xl">
          <p className="font-sans font-semibold text-[11px] tracking-[0.28em] uppercase mb-4" style={{ color: "var(--electric)" }}>
            Você se reconhece?
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-medium text-white leading-[1.08] text-balance">
            A identificação é imediata.<br />
            <span style={{ color: "var(--electric)", fontStyle: "italic" }}>A clareza, nunca.</span>
          </h2>
          <p className="font-sans text-[17px] text-white/70 leading-relaxed mt-6 max-w-xl">
            A internet gera identificação, mas não gera critério. E ficar preso na dúvida também cansa.
          </p>
        </FadeIn>

        {/* Pain grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {painPoints.map((p, i) => (
            <FadeIn key={p.tag} delay={i * 0.08}>
              <div
                className="h-full p-6 md:p-7 rounded-2xl transition-all duration-300 hover:scale-[1.015] group"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all"
                    style={{
                      backgroundColor: "var(--electric)",
                      boxShadow: "0 0 10px var(--electric-glow)",
                    }}
                  />
                  <span className="font-sans font-semibold text-[10.5px] tracking-[0.22em] uppercase" style={{ color: "var(--electric)" }}>
                    {p.tag}
                  </span>
                </div>
                <p className="font-sans text-[15.5px] leading-relaxed text-white/85">
                  {p.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Doubt chips */}
        <FadeIn delay={0.2} className="mt-14">
          <div
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(46,168,255,0.08), rgba(30,58,138,0.18))",
              border: "1px solid rgba(46,168,255,0.22)",
            }}
          >
            <p className="font-serif text-[22px] md:text-[28px] text-white/90 mb-6">
              E a pergunta que não sai da cabeça:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-8">
              {doubts.map((d, i) => (
                <motion.span
                  key={d}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="px-5 py-2.5 rounded-full font-sans text-[14px] font-medium text-white"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  {d}
                </motion.span>
              ))}
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Identity - Descobrir agora", HOTMART_CHECKOUT_URL)}
              className="group inline-flex items-center gap-3 font-sans font-semibold text-[14px] tracking-wide px-7 py-4 rounded-full text-white transition-all duration-300 hover:scale-[1.04]"
              style={{
                backgroundColor: "var(--electric)",
                boxShadow: "0 10px 32px var(--electric-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              Descobrir agora
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
