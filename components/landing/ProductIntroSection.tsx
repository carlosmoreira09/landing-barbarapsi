"use client"

import { useRef } from "react"
import Image from "next/image"
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

const audience = [
  "Suspeita de TDAH e quer entender melhor o próprio funcionamento antes de tomar qualquer decisão",
  "Está em dúvida entre TDAH, ansiedade ou outras possibilidades, e precisa de clareza para diferenciar",
  "Já recebeu o diagnóstico, mas ainda se sente perdido sobre como lidar com isso na prática",
]

export function ProductIntroSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Image */}
          <FadeIn className="w-full md:w-5/12">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl rotate-1"
                style={{ backgroundColor: "var(--sage-ultra)" }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <Image
                  src="/images/foto_em_pe_office.jpeg"
                  alt="Bárbara Leal Reis com laptop"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <FadeIn delay={0.1}>
              <p className="font-sans text-base" style={{ color: "var(--text-muted)" }}>
                Foi por isso que eu criei o
              </p>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl mt-2 text-balance"
                style={{ color: "var(--text-main)" }}
              >
                TDAH na Vida Adulta
              </h2>
              <p className="font-serif text-xl md:text-2xl mt-4" style={{ color: "var(--lilac)" }}>
                Um guia para transformar dúvida em clareza, e confusão em direção. Para quem:
              </p>
            </FadeIn>

            <div className="space-y-4">
              {audience.map((item, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.1}>
                  <div className="flex items-start gap-4">
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
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
