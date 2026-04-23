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

const strategies = [
  "Entender se o que você sente realmente parece ser TDAH",
  "Parar de ficar preso na dúvida sobre buscar ou não ajuda para identificar",
  "Iniciar tarefas com menos resistência, mesmo sem um diagnóstico",
  "Reduzir a sobrecarga antes que ela vire paralisia",
  "Organizar a rotina de forma mais realista e possível para o seu funcionamento",
  "Se compreender melhor, sem culpa e sem rótulos simplistas",
]

export function StrategiesSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "var(--muted-bg)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
          {/* Content */}
          <div className="flex-1 space-y-8 order-2 md:order-1">
            <FadeIn>
              <p
                className="font-sans text-sm font-semibold tracking-widest uppercase"
                style={{ color: "var(--sage)" }}
              >
                Estratégias práticas
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-balance mt-3" style={{ color: "var(--text-main)" }}>
                Com este guia, você consegue:
              </h2>
            </FadeIn>

            <div className="space-y-4">
              {strategies.map((item, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.09}>
                  <div className="flex items-center gap-4">
                    <span
                      className="flex-shrink-0 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--sage)" }}
                      aria-hidden="true"
                    />
                    <p className="font-sans text-lg leading-relaxed" style={{ color: "var(--text-main)" }}>
                      {item}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.55}>
              <div
                className="mt-6 p-6 rounded-2xl font-sans text-base leading-relaxed"
                style={{
                  backgroundColor: "var(--sage-ultra)",
                  borderLeft: "4px solid var(--sage)",
                  color: "var(--text-main)",
                }}
              >
                Estratégias estruturadas para respeitar como você funciona, e não para forçar um padrão que nunca funcionou antes.
              </div>
            </FadeIn>
          </div>

          {/* Image */}
        </div>
      </div>
    </section>
  )
}
