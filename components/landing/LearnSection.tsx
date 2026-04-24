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

const learnItems = [
  {
    num: "01",
    title: "O que realmente caracteriza o TDAH, além dos vídeos",
    desc: "A diferença entre se identificar com sintomas e ter um quadro real. Você entende o que os critérios diagnósticos são de fato, e não apenas as listas simplificadas da internet.",
  },
  {
    num: "02",
    title: "Como saber se é TDAH, ansiedade, ou os dois juntos",
    desc: "Muitos sintomas se sobrepõem. Entender a diferença é o que permite saber se vale buscar avaliação e com qual profissional começar.",
  },
  {
    num: "03",
    title: "O caminho certo para buscar ajuda, sem atalhos",
    desc: "Quando faz sentido buscar diagnóstico formal, como funciona o processo e o que esperar, sem urgência precipitada e sem paralisia por medo de parecer exagero.",
  },
  {
    num: "04",
    title: "Por que algumas dificuldades persistem mesmo com esforço",
    desc: "Se você tem TDAH ou suspeita ter, vai entender por que iniciar, sustentar e finalizar tarefas é difícil, e que isso não é falta de força de vontade.",
  },
]

export function LearnSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p
            className="font-sans text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--sage)" }}
          >
            Conteúdo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance" style={{ color: "var(--text-main)" }}>
            Você vai sair sabendo:
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-0">
          {learnItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex items-start gap-6 md:gap-10 py-8 border-b group"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-serif text-4xl md:text-5xl font-semibold flex-shrink-0 leading-none select-none transition-colors duration-300 group-hover:text-sage"
                  style={{ color: "var(--sage-light)", minWidth: "3rem" }}
                >
                  {item.num}
                </span>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl" style={{ color: "var(--text-main)" }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
