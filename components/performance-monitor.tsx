"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== "development") return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case "largest-contentful-paint":
            setMetrics((prev) => ({ ...prev, lcp: entry.startTime }))
            break
          case "first-input":
            setMetrics((prev) => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
            break
          case "layout-shift":
            if (!(entry as any).hadRecentInput) {
              setMetrics((prev) => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
            }
            break
          case "paint":
            if (entry.name === "first-contentful-paint") {
              setMetrics((prev) => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case "navigation":
            setMetrics((prev) => ({ ...prev, ttfb: (entry as any).responseStart }))
            break
        }
      }
    })

    try {
      observer.observe({
        entryTypes: ["largest-contentful-paint", "first-input", "layout-shift", "paint", "navigation"],
      })
    } catch (e) {
      // Some browsers might not support all entry types
      console.warn("Performance observer not fully supported")
    }

    return () => observer.disconnect()
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        {metrics.lcp && <div>LCP: {Math.round(metrics.lcp)}ms</div>}
        {metrics.fid && <div>FID: {Math.round(metrics.fid)}ms</div>}
        {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
        {metrics.fcp && <div>FCP: {Math.round(metrics.fcp)}ms</div>}
        {metrics.ttfb && <div>TTFB: {Math.round(metrics.ttfb)}ms</div>}
      </div>
    </div>
  )
}
