"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { HOTMART_CHECKOUT_URL, type MenuCategory, type MenuItem } from "@/lib/nav-content"
import { trackCTAClick } from "@/components/GoogleAnalytics"

interface NavDropdownProps {
  category: MenuCategory
}

const panelVariants = {
  hidden: { opacity: 0, y: -10, scaleY: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.97,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
}

const detailVariants = {
  hidden: { opacity: 0, x: 14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -8, transition: { duration: 0.14, ease: "easeIn" as const } },
}

export function NavDropdown({ category }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<MenuItem>(category.items[0])
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setOpen(true)
  }, [])

  const handleLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpen(false), 140)
  }, [])

  const accentColor = active.accent === "warm" ? "var(--warm-red)" : "var(--electric)"

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button
        className="flex items-center gap-1.5 font-sans font-medium text-[13px] tracking-wide text-white/85 hover:text-white transition-colors duration-200 py-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {category.label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-1/2 -translate-x-1/2 top-full mt-5 w-[780px] rounded-2xl overflow-hidden z-50"
            style={{
              background: "rgba(11,26,58,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              originY: 0,
              border: "1px solid rgba(46,168,255,0.18)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(46,168,255,0.08), 0 0 40px rgba(46,168,255,0.12)",
            }}
            role="region"
            aria-label={`Menu ${category.label}`}
          >
            {/* Top electric accent line */}
            <div
              className="h-[1.5px] w-full"
              style={{
                background: "linear-gradient(to right, transparent, var(--electric) 50%, transparent)",
              }}
            />

            <div className="flex min-h-[340px]">
              {/* Col 1 — list */}
              <div className="w-60 flex-shrink-0 flex flex-col border-r border-white/5">
                <div className="px-6 pt-5 pb-3">
                  <p className="font-sans font-semibold text-[10px] tracking-[0.24em] uppercase" style={{ color: "var(--electric)" }}>
                    {category.label}
                  </p>
                  <h2 className="font-serif text-[1.05rem] font-medium text-white mt-1 leading-tight">
                    {category.items.length} {category.items.length === 1 ? "tópico" : "tópicos"}
                  </h2>
                </div>
                <div className="h-px mx-6 bg-white/10 mb-1" />

                <ul className="flex flex-col py-2 px-3 flex-1" role="list">
                  {category.items.map((item) => {
                    const isActive = active.id === item.id
                    return (
                      <li key={item.id}>
                        <button
                          onMouseEnter={() => setActive(item)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 flex items-center justify-between gap-3 group ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-white/65 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                                isActive ? "" : "bg-white/25 group-hover:bg-[var(--electric)]"
                              }`}
                              style={isActive ? { backgroundColor: "var(--electric)", boxShadow: "0 0 8px var(--electric-glow)" } : undefined}
                            />
                            <span className="font-sans font-medium text-[13px] truncate">
                              {item.title}
                            </span>
                          </div>
                          {isActive && (
                            <ArrowUpRight
                              size={13}
                              style={{ color: "var(--electric)" }}
                              className="flex-shrink-0"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>

                {/* Bottom CTA */}
                <div className="px-4 py-4 border-t border-white/5">
                  <a
                    href={HOTMART_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick(`NavDropdown ${category.id} - Quero o guia`, HOTMART_CHECKOUT_URL)}
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full font-sans font-semibold text-[11px] tracking-wide text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "var(--electric)",
                      boxShadow: "0 6px 20px var(--electric-glow)",
                    }}
                  >
                    Quero o guia
                  </a>
                </div>
              </div>

              {/* Col 2 — detail */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    variants={detailVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col h-full px-8 py-6 gap-4"
                  >
                    <div>
                      <p className="font-sans font-semibold text-[10px] tracking-[0.28em] uppercase mb-2" style={{ color: accentColor }}>
                        {active.eyebrow}
                      </p>
                      <h3 className="font-serif text-[1.75rem] font-medium text-white leading-tight text-balance">
                        {active.headline}
                      </h3>
                    </div>

                    <p className="font-sans text-[13.5px] leading-relaxed text-white/75 max-w-lg">
                      {active.body}
                    </p>

                    {active.bullets && (
                      <div className="mt-1">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2" role="list">
                          {active.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <span
                                className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor: accentColor,
                                  boxShadow: active.accent === "warm" ? undefined : "0 0 6px var(--electric-glow)",
                                }}
                                aria-hidden="true"
                              />
                              <span className="font-sans text-[12.5px] text-white/80 leading-snug">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
