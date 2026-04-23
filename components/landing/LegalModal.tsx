"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LegalModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function LegalModal({ open, onClose, title, children }: LegalModalProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "rgba(30, 42, 58, 0.6)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
              style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 py-5 shrink-0"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h2
                  id="modal-title"
                  className="font-serif text-xl"
                  style={{ color: "var(--text-main)" }}
                >
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Fechar"
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:opacity-70"
                  style={{ backgroundColor: "var(--muted-bg)", color: "var(--text-muted)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Scrollable content */}
              <div
                ref={contentRef}
                className="overflow-y-auto px-6 py-6 font-sans text-sm leading-relaxed space-y-4"
                style={{ color: "var(--text-muted)" }}
              >
                {children}
              </div>

              {/* Footer */}
              <div
                className="px-6 py-4 shrink-0 flex justify-end"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <button
                  onClick={onClose}
                  className="font-sans text-sm font-semibold px-6 py-2.5 rounded-full transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "var(--sage)", color: "#ffffff" }}
                >
                  Entendi
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
