"use client"

import { useRef, useEffect } from "react"
import { trackSectionView } from "@/components/GoogleAnalytics"

export function SectionTracker({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const tracked = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true
          trackSectionView(name)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [name])

  return <div ref={ref}>{children}</div>
}
