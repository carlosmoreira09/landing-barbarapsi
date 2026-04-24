"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { HOTMART_CHECKOUT_URL, menuCategories } from "@/lib/nav-content"
import { trackCTAClick } from "@/components/GoogleAnalytics"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedCat, setExpandedCat] = useState<string | null>(null)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 flex flex-col md:hidden overflow-y-auto"
            style={{
              background: "linear-gradient(180deg, #0B1A3A 0%, #091228 100%)",
              borderLeft: "1px solid rgba(46,168,255,0.15)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 sticky top-0 z-10" style={{ background: "rgba(11,26,58,0.95)", backdropFilter: "blur(12px)" }}>
              <p className="font-sans font-semibold text-[11px] tracking-[0.26em] uppercase" style={{ color: "var(--electric)" }}>
                Menu
              </p>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 py-5">
              <ul className="space-y-2" role="list">
                {menuCategories.map((cat) => {
                  const isCatOpen = expandedCat === cat.id
                  return (
                    <li key={cat.id} className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <button
                        onClick={() => {
                          setExpandedCat(isCatOpen ? null : cat.id)
                          setExpandedItem(null)
                        }}
                        className="w-full flex items-center justify-between px-5 py-4 text-left"
                        aria-expanded={isCatOpen}
                      >
                        <span className="font-serif text-[17px] text-white">{cat.label}</span>
                        <motion.span
                          animate={{ rotate: isCatOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-white/60"
                        >
                          <ChevronDown size={18} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isCatOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <ul className="px-3 pb-3 space-y-1" role="list">
                              {cat.items.map((item) => {
                                const isItemOpen = expandedItem === item.id
                                const accentColor = item.accent === "warm" ? "var(--warm-red)" : "var(--electric)"
                                return (
                                  <li key={item.id} className="rounded-lg overflow-hidden" style={{ background: isItemOpen ? "rgba(46,168,255,0.06)" : "transparent" }}>
                                    <button
                                      onClick={() => setExpandedItem(isItemOpen ? null : item.id)}
                                      className="w-full flex items-center justify-between gap-3 px-3 py-3 text-left"
                                      aria-expanded={isItemOpen}
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <span
                                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                          style={{
                                            backgroundColor: isItemOpen ? accentColor : "rgba(255,255,255,0.3)",
                                            boxShadow: isItemOpen && item.accent !== "warm" ? "0 0 6px var(--electric-glow)" : undefined,
                                          }}
                                        />
                                        <span className="font-sans text-[13.5px] font-medium text-white/90 leading-snug">
                                          {item.title}
                                        </span>
                                      </div>
                                      <motion.span
                                        animate={{ rotate: isItemOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0 text-white/40"
                                      >
                                        <ChevronDown size={14} />
                                      </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {isItemOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.22 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="px-3 pb-4 pt-1 space-y-3">
                                            <p className="font-sans font-semibold text-[9px] tracking-[0.26em] uppercase" style={{ color: accentColor }}>
                                              {item.eyebrow}
                                            </p>
                                            <p className="font-serif text-[16px] leading-tight text-white text-balance">
                                              {item.headline}
                                            </p>
                                            <p className="font-sans text-[13px] leading-relaxed text-white/70">
                                              {item.body}
                                            </p>
                                            {item.bullets && (
                                              <ul className="space-y-1.5 pt-1" role="list">
                                                {item.bullets.map((b) => (
                                                  <li key={b} className="flex items-start gap-2.5">
                                                    <span
                                                      className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                                                      style={{ backgroundColor: accentColor }}
                                                    />
                                                    <span className="font-sans text-[12.5px] text-white/75 leading-snug">
                                                      {b}
                                                    </span>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </li>
                                )
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Sticky CTA */}
            <div
              className="sticky bottom-0 px-5 py-4 border-t"
              style={{
                background: "rgba(11,26,58,0.95)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(46,168,255,0.12)",
              }}
            >
              <a
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("MobileMenu - Quero o guia", HOTMART_CHECKOUT_URL)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide text-white transition-all duration-300 active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--electric)",
                  boxShadow: "0 6px 24px var(--electric-glow)",
                }}
              >
                QUERO O GUIA SOBRE O TDAH
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
