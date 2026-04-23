"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
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

const credentials = [
  {
    label: "Formação",
    value: "Psicologia, Universidade Federal Fluminense (UFF)",
  },
  {
    label: "Pós-Graduação",
    value: "Neuropsicologia Clínica",
  },
  {
    label: "Mestrado",
    value: "Psicologia Clínica, PUC-Rio",
  },
  {
    label: "Doutorado",
    value: "Bolsista RTP (PhD em Psicologia do Esporte, Austrália)",
  },
  {
    label: "Experiência",
    value: "8 anos de atuação clínica, mais de 80 avaliações neuropsicológicas",
  },
]

const registrations = [
  { flag: "🇧🇷", label: "CRP 05/56240", sub: "Conselho Regional de Psicologia, Rio de Janeiro" },
  { flag: "🇦🇺", label: "ACA Level 4, n. 30303", sub: "Australia Counselling Association, Counsellor registrada" },
  { flag: "🇦🇺", label: "AHPRA, PSY0004022953", sub: "Australian Health Practitioner Regulation Agency, Provisional Psychologist" },
]

export function AboutSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Label */}
        <FadeIn className="text-center mb-16">
          <p
            className="font-sans text-sm font-semibold tracking-widest uppercase"
            style={{ color: "var(--sage)" }}
          >
            Sobre a autora
          </p>
        </FadeIn>

        {/* Top: photo + name + intro */}
        <div className="flex flex-col md:flex-row items-start gap-14 md:gap-20 mb-16">
          {/* Photo */}
          <FadeIn delay={0.1} className="w-full md:w-5/12 flex justify-center shrink-0">
            <div className="relative w-72 md:w-full max-w-sm">
              <div
                className="absolute -inset-4 rounded-3xl rotate-2"
                style={{ backgroundColor: "var(--lilac-light)" }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9927-NnnoZxoOXLIrA6WJRfqo1I5bg1572S.jpg"
                  alt="Bárbara Leal Reis, neuropsicóloga"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 40vw"
                />
              </div>
            </div>
          </FadeIn>

          {/* Name + intro paragraph */}
          <div className="flex-1 space-y-5 pt-2">
            <FadeIn delay={0.15}>
              <h2
                className="font-serif text-4xl md:text-5xl text-balance"
                style={{ color: "var(--text-main)" }}
              >
                Bárbara Leal Reis
              </h2>
              <p className="font-sans text-base font-semibold mt-2 tracking-wide" style={{ color: "var(--lilac)" }}>
                Neuropsicóloga &amp; Psicóloga
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="font-sans text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Com mais de 8 anos de experiência clínica, atuo com avaliação neuropsicológica e atendimento de pessoas neurodivergentes, especialmente pessoas com TDAH e Transtorno do Espectro Autista (TEA). Ao longo da minha prática, já realizei mais de 80 avaliações neuropsicológicas completas, com emissão de laudos e foco em diagnósticos precisos e baseados em evidências.
              </p>
            </FadeIn>

            <FadeIn delay={0.30}>
              <p className="font-sans text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Na prática clínica, também atuo com mulheres em contextos de violências e relacionamentos abusivos, utilizando a Terapia Cognitivo-Comportamental (TCC) como base. Meu trabalho é marcado por uma abordagem acolhedora, estruturada e orientada pela ciência, sempre adaptada às necessidades individuais de cada pessoa.
              </p>
            </FadeIn>

            {/* Credentials grid */}
            <FadeIn delay={0.38}>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl px-4 py-3"
                    style={{
                      backgroundColor: "var(--sage-ultra)",
                      border: "1px solid var(--sage-light)",
                    }}
                  >
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--sage)" }}>
                      {c.label}
                    </p>
                    <p className="font-sans text-sm leading-snug" style={{ color: "var(--text-main)" }}>
                      {c.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Divider */}
        <FadeIn delay={0.1}>
          <div className="w-full h-px mb-12" style={{ backgroundColor: "var(--sage-light)" }} />
        </FadeIn>

        {/* Australia block */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-12">
            <div
              className="shrink-0 rounded-2xl px-5 py-4 self-start"
              style={{ backgroundColor: "var(--lilac-light)", border: "1px solid var(--lilac)" }}
            >
              <p className="font-serif text-3xl" style={{ color: "var(--lilac)" }}>🇦🇺</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl md:text-3xl text-balance" style={{ color: "var(--text-main)" }}>
                Uma trajetória além das fronteiras
              </h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Em janeiro de 2025, me mudei para a Austrália e, em menos de um ano, conquistei uma bolsa de doutorado altamente competitiva (RTP, Research Training Program) para o PhD em Psicologia do Esporte. Nesse mesmo período, validei o diploma brasileiro e passei a atuar como Counsellor (ACA Level 4) e Provisional Psychologist (AHPRA) no país e com atendimentos online.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Registrations */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {registrations.map((r) => (
              <div
                key={r.label}
                className="rounded-xl px-5 py-4 flex flex-col gap-1"
                style={{
                  backgroundColor: "var(--sage-ultra)",
                  border: "1px solid var(--sage-light)",
                }}
              >
                <span className="text-xl">{r.flag}</span>
                <p className="font-sans text-sm font-semibold" style={{ color: "var(--text-main)" }}>
                  {r.label}
                </p>
                <p className="font-sans text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
                  {r.sub}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Instagram link */}
        <FadeIn delay={0.25}>
          <p className="font-sans text-sm text-center" style={{ color: "var(--text-muted)" }}>
            Acompanhe no Instagram:{" "}
            <a
              href="https://instagram.com/psi.barbarareis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
              style={{ color: "var(--sage)" }}
            >
              @psi.barbarareis
            </a>
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
