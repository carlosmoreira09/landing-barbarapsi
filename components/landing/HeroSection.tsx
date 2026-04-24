"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { HOTMART_CHECKOUT_URL, menuCategories } from "@/lib/nav-content"
import { NavDropdown } from "@/components/landing/NavDropdown"
import { MobileMenu } from "@/components/landing/MobileMenu"
import { trackCTAClick } from "@/components/GoogleAnalytics"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <section
      className="relative w-full min-h-dvh flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1A3A 0%, #091228 40%, #0B1A3A 100%)" }}
    >
      {/* Background photo — right side, faded */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/foto_perfeita.jpeg"
          alt=""
          fill
          className="object-cover object-[60%_20%] md:object-[75%_22%]"
          priority
          sizes="100vw"
        />
        {/* Navy wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,26,58,0.97) 0%, rgba(11,26,58,0.88) 40%, rgba(11,26,58,0.55) 70%, rgba(11,26,58,0.35) 100%)",
          }}
        />
        {/* Mobile: darker overlay so text reads */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "rgba(11,26,58,0.78)" }}
        />
        {/* Electric glow bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--electric) 0%, transparent 70%)" }}
        />
        {/* Electric glow top-right */}
        <div
          className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--electric) 0%, transparent 70%)" }}
        />
      </div>

      {/* Navbar */}
      <nav
        className="relative z-30 flex items-center justify-between px-5 md:px-10 pt-5 md:pt-7"
        aria-label="Navegação principal"
      >
        {/* Logo / name */}
        <a href="/" className="flex items-center gap-3" aria-label="Bárbara Leal Reis, página inicial">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-[15px] font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, var(--electric), #1E3A8A)",
              boxShadow: "0 4px 16px var(--electric-glow)",
            }}
          >
            B
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-[15px] text-white">Bárbara Leal Reis</span>
            <span className="font-sans text-[10.5px] tracking-[0.18em] uppercase text-white/55">
              Neuropsicóloga
            </span>
          </div>
        </a>

        {/* Center dropdowns — desktop only */}
        <div className="hidden md:flex items-center gap-9">
          {menuCategories.map((cat) => (
            <NavDropdown key={cat.id} category={cat} />
          ))}
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("Navbar - Quero o guia", HOTMART_CHECKOUT_URL)}
            className="hidden md:inline-flex items-center font-sans font-semibold text-[12px] tracking-wide px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:scale-[1.04]"
            style={{
              backgroundColor: "var(--electric)",
              boxShadow: "0 6px 20px var(--electric-glow)",
            }}
          >
            Quero o guia
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Abrir menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Hero copy */}
      <div className="relative z-10 flex-1 flex items-center px-5 md:px-10 pt-10 pb-16 md:pt-20 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-[640px]"
        >
          {/* Eyebrow — urgent badge */}
          <motion.div variants={item} className="flex items-center gap-3 self-start">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "var(--electric)",
                boxShadow: "0 0 12px var(--electric-glow), 0 0 4px var(--electric)",
              }}
              aria-hidden="true"
            />
            <span className="font-sans text-[11px] md:text-[12px] tracking-[0.28em] uppercase font-semibold text-white/85">
              Guia digital · PDF · Áudio · Vídeo
            </span>
          </motion.div>

          {/* Big emotional headline */}
          <motion.h1
            variants={item}
            className="font-serif text-[clamp(2.8rem,8vw,5.25rem)] font-medium leading-[1.02] text-white text-balance"
          >
            Será que sou eu,<br />
            <span
              style={{
                color: "var(--electric)",
                fontStyle: "italic",
                textShadow: "0 0 40px var(--electric-glow)",
              }}
            >
              ou é TDAH?
            </span>
          </motion.h1>

          {/* Sub-copy — direct, ADHD-brain friendly */}
          <motion.p
            variants={item}
            className="font-sans text-[17px] md:text-[19px] leading-relaxed text-white/80 max-w-[520px] text-balance"
          >
            Você não é preguiçoso. Seu cérebro só funciona diferente.
            Pare de girar na dúvida. Em 1 guia, você tem clareza sobre o que está acontecendo e o que fazer a seguir.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Hero - Quero ter clareza", HOTMART_CHECKOUT_URL)}
              className="group inline-flex items-center gap-3 font-sans font-semibold text-[14px] tracking-wide px-7 py-4 rounded-full text-white transition-all duration-300 hover:scale-[1.03]"
              style={{
                backgroundColor: "var(--electric)",
                boxShadow: "0 10px 36px var(--electric-glow), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              Quero ter clareza
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#identidade"
              className="inline-flex items-center font-sans font-medium text-[13px] tracking-wide px-6 py-4 rounded-full text-white/90 transition-all duration-300 hover:bg-white/8"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Ver se é pra mim
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
            {[
              "Acesso imediato",
              "Garantia de 7 dias",
              "Pagamento Hotmart",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5 font-sans text-[12px] text-white/60">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6.5l2.5 2.5L10 3" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>

          {/* Launch price hint */}
          <motion.p variants={item} className="font-sans text-[11.5px] tracking-[0.18em] uppercase font-semibold" style={{ color: "var(--electric)" }}>
            Preço de lançamento · Sobe em breve
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 hidden md:flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-white/50">
            Rolar
          </span>
          <div
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--electric), transparent)" }}
          />
        </motion.div>
      </motion.div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </section>
  )
}
