"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/U104539766E"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Background image — blurred, low opacity, parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.13, filter: "blur(2px) saturate(0.6)" }}
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay to keep readability */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--background) 45%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 min-h-screen md:min-h-0 md:py-24">

          {/* Left: text content */}
          <motion.div
            style={{ y: textY }}
            className="flex-1 flex flex-col gap-6 md:gap-7 order-1 md:order-1"
          >
            {/* Mobile: small avatar + name strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex md:hidden items-center gap-3"
            >
              <div
                className="relative shrink-0 rounded-full overflow-hidden"
                style={{
                  width: 52,
                  height: 52,
                  border: "2px solid var(--sage-light)",
                }}
              >
                <Image
                  src="/images/foto_perfeita.jpeg"
                  alt="Bárbara Leal Reis"
                  fill
                  className="object-cover object-top"
                  sizes="52px"
                />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold leading-tight" style={{ color: "var(--text-main)" }}>
                  Bárbara Leal Reis
                </p>
                <p className="font-sans text-xs leading-tight" style={{ color: "var(--text-muted)" }}>
                  Neuropsicóloga
                </p>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full font-sans"
                style={{
                  backgroundColor: "var(--sage-ultra)",
                  color: "var(--sage)",
                  border: "1px solid var(--sage-light)",
                }}
              >
                Guia em PDF &bull; &Aacute;udio &bull; V&iacute;deo
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-balance leading-tight"
              style={{ color: "var(--text-main)" }}
            >
              TDAH na Vida Adulta
            </motion.h1>

            {/* Subtitle — focused on suspicion/doubt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="font-serif text-xl md:text-2xl leading-relaxed max-w-lg"
              style={{ color: "var(--lilac)" }}
            >
              Você abre a internet e dá de cara com vídeos sobre TDAH. Aos poucos, tudo parece fazer sentido. E aí surge a dúvida: será que eu tenho TDAH?
            </motion.p>

            {/* Pain paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="font-sans text-base md:text-lg leading-relaxed space-y-2 max-w-md"
              style={{ color: "var(--text-muted)" }}
            >
              <p>Se identificar com os sintomas não é o mesmo que ter um diagnóstico. Mas viver com essa incerteza, questionando o próprio funcionamento todos os dias, também não é fácil.</p>
              <p>Se você se reconhece nisso, este guia foi feito para você.</p>
            </motion.div>

            {/* CTA — no price, clean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.66 }}
              className="pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-100"
                style={{
                  backgroundColor: "var(--sage)",
                  color: "#ffffff",
                  boxShadow: "0 4px 24px rgba(88,130,193,0.35)",
                }}
              >
                Eu quero ter clareza sobre o TDAH
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="font-sans text-xs" style={{ color: "var(--text-muted)" }}>
                Preço de lançamento. Sobe em breve.
              </span>
            </motion.div>

            {/* Trust signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="text-sm font-sans"
              style={{ color: "var(--text-muted)" }}
            >
              Pagamento seguro via Hotmart &bull; Acesso imediato &bull; Garantia de 7 dias
            </motion.p>
          </motion.div>

          {/* Right: Barbara's photo */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end order-2 md:order-2 w-full"
          >
            <div className="relative w-72 h-96 md:w-[420px] md:h-[560px]">
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{ backgroundColor: "var(--sage-ultra)" }}
              />
              <div
                className="absolute -inset-2 rounded-3xl"
                style={{ backgroundColor: "var(--sage-light)", opacity: 0.5 }}
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image

                  src="/images/foto_perfeita.jpeg"
                    alt="Bárbara Leal Reis, neuropsicóloga"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, 420px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
