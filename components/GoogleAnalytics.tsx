"use client"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RJYL643QZC"

// Typed gtag helper available globally after the script loads
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

// ── Tracking helpers ──────────────────────────────────────────────────────────

/** Track a custom GA4 event */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", eventName, params)
}

/** Track a CTA click */
export function trackCTAClick(label: string, destination?: string) {
  trackEvent("cta_click", {
    event_category: "CTA",
    event_label: label,
    destination_url: destination ?? "",
  })
}

/** Track a section becoming visible (scroll depth) */
export function trackSectionView(sectionName: string) {
  trackEvent("section_view", {
    event_category: "Scroll",
    event_label: sectionName,
  })
}

/** Track FAQ item opened */
export function trackFAQOpen(question: string) {
  trackEvent("faq_open", {
    event_category: "FAQ",
    event_label: question,
  })
}

/** Track modal open (legal / cookie) */
export function trackModalOpen(modalName: string) {
  trackEvent("modal_open", {
    event_category: "Modal",
    event_label: modalName,
  })
}

/** Track cookie consent choice */
export function trackCookieConsent(choice: "all" | "essential") {
  trackEvent("cookie_consent", {
    event_category: "Consent",
    event_label: choice,
  })
}

// ── Component ─────────────────────────────────────────────────────────────────

function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.gtag) return
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
    window.gtag("config", GA_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
      <PageViewTracker />
    </>
  )
}
