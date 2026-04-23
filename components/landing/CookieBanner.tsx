"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LegalModal } from "./LegalModal"

function CookieDetailContent() {
  return (
    <>
      <p>
        <strong style={{ color: "var(--text-main)" }}>O que sao cookies?</strong>
      </p>
      <p>
        Cookies sao pequenos arquivos de texto armazenados no seu dispositivo quando voce acessa um
        site. Eles permitem que o site lembre suas preferencias e melhore sua experiencia de
        navegacao.
      </p>

      <p>
        <strong style={{ color: "var(--text-main)" }}>Cookies que utilizamos</strong>
      </p>

      <p>
        <strong style={{ color: "var(--text-main)" }}>Essenciais</strong>
        <br />
        Necessarios para o funcionamento basico do site. Nao podem ser desativados. Incluem o
        registro do seu consentimento de cookies e preferencias de sessao.
      </p>

      <p>
        <strong style={{ color: "var(--text-main)" }}>Analiticos (opcionais)</strong>
        <br />
        Nos ajudam a entender como os visitantes interagem com o site, quais paginas sao mais
        acessadas e como chegaram ate nos. Os dados sao anonimos e agregados. Utilizamos essas
        informacoes apenas para melhorar o conteudo e a experiencia oferecidos.
      </p>

      <p>
        <strong style={{ color: "var(--text-main)" }}>De terceiros</strong>
        <br />
        A plataforma Hotmart pode utilizar seus proprios cookies ao processar pagamentos e entregas
        de produtos digitais. Esses cookies estao sujeitos a Politica de Privacidade da Hotmart.
      </p>

      <p>
        <strong style={{ color: "var(--text-main)" }}>Como gerenciar os cookies</strong>
      </p>
      <p>
        Voce pode configurar ou desativar cookies diretamente no seu navegador. Acesse as
        configuracoes do seu navegador e procure pela opcao de privacidade ou cookies. Lembre-se
        que desativar cookies essenciais pode impedir o funcionamento correto de partes do site.
      </p>
      <p>
        Guias rapidos por navegador:{" "}
        <a
          href="https://support.google.com/chrome/answer/95647"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--sage)", textDecoration: "underline" }}
        >
          Chrome
        </a>
        {" · "}
        <a
          href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--sage)", textDecoration: "underline" }}
        >
          Firefox
        </a>
        {" · "}
        <a
          href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--sage)", textDecoration: "underline" }}
        >
          Safari
        </a>
        {" · "}
        <a
          href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--sage)", textDecoration: "underline" }}
        >
          Edge
        </a>
      </p>

      <p>
        <strong style={{ color: "var(--text-main)" }}>Base legal (LGPD)</strong>
      </p>
      <p>
        O uso de cookies essenciais e baseado no legitimo interesse para o funcionamento do site
        (Art. 7, IX, LGPD). Os cookies analiticos sao utilizados somente com o seu consentimento
        expresso (Art. 7, I, LGPD), que voce pode revogar a qualquer momento limpando os dados
        do navegador.
      </p>

      <p>
        Duvidas? Entre em contato pelo e-mail{" "}
        <a
          href="mailto:barbareispsi@gmail.com"
          style={{ color: "var(--sage)", textDecoration: "underline" }}
        >
          barbareispsi@gmail.com
        </a>
        .
      </p>
    </>
  )
}

const STORAGE_KEY = "barbara_cookie_consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        // Small delay so banner doesn't flash on initial hydration
        const t = setTimeout(() => setVisible(true), 800)
        return () => clearTimeout(t)
      }
    } catch {
      // localStorage unavailable (private browsing edge cases)
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted")
    } catch {}
    setVisible(false)
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "declined")
    } catch {}
    setVisible(false)
  }

  return (
    <>
      <LegalModal
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        title="Politica de Cookies"
      >
        <CookieDetailContent />
      </LegalModal>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="cookie-banner"
            role="dialog"
            aria-live="polite"
            aria-label="Aviso de cookies"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-40 rounded-2xl shadow-2xl p-5 md:p-6"
            style={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 40px rgba(30,42,58,0.14)",
            }}
          >
            {/* Icon + title row */}
            <div className="flex items-start gap-3 mb-3">
              <div
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "var(--sage-ultra)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="7.5" stroke="var(--sage)" strokeWidth="1.4" />
                  <circle cx="9" cy="9" r="2" fill="var(--sage)" />
                  <circle cx="5" cy="6" r="1.2" fill="var(--sage)" />
                  <circle cx="13" cy="7" r="1" fill="var(--sage)" />
                  <circle cx="6.5" cy="12.5" r="1" fill="var(--sage)" />
                  <circle cx="12" cy="12" r="1.2" fill="var(--sage)" />
                </svg>
              </div>
              <div>
                <p className="font-sans font-semibold text-sm leading-snug" style={{ color: "var(--text-main)" }}>
                  Este site usa cookies
                </p>
                <p className="font-sans text-xs leading-relaxed mt-1" style={{ color: "var(--text-muted)" }}>
                  Utilizamos cookies essenciais para o funcionamento do site e, com seu consentimento,
                  cookies analiticos para melhorar a experiencia. Suas informacoes sao tratadas em
                  conformidade com a{" "}
                  <span className="font-medium" style={{ color: "var(--text-main)" }}>LGPD</span>.{" "}
                  <button
                    onClick={() => setDetailOpen(true)}
                    className="underline underline-offset-2 font-medium transition-opacity hover:opacity-70"
                    style={{ color: "var(--sage)", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: "inherit" }}
                  >
                    Saiba mais
                  </button>
                  .
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={decline}
                className="flex-1 font-sans text-xs font-semibold py-2.5 rounded-full transition-opacity hover:opacity-70"
                style={{
                  backgroundColor: "var(--muted-bg)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                Apenas essenciais
              </button>
              <button
                onClick={accept}
                className="flex-1 font-sans text-xs font-semibold py-2.5 rounded-full transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: "var(--sage)",
                  color: "#ffffff",
                  boxShadow: "0 2px 12px rgba(88,130,193,0.3)",
                }}
              >
                Aceitar todos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
