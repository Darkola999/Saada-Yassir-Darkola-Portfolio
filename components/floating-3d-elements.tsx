"use client"

import { useEffect, useRef } from "react"

export function Floating3DElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.children

    const animateElements = () => {
      Array.from(elements).forEach((element, index) => {
        const htmlElement = element as HTMLElement
        const time = Date.now() * 0.001
        const offset = index * 0.5

        const x = Math.sin(time + offset) * 20
        const y = Math.cos(time * 0.7 + offset) * 15
        const rotation = Math.sin(time * 0.5 + offset) * 10

        htmlElement.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${rotation}deg)`
      })

      requestAnimationFrame(animateElements)
    }

    animateElements()
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-cyan-400/30 animate-pulse"
        style={{ animationDelay: "0s" }}
      />

      <div
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-pink-400/30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-xl backdrop-blur-sm border border-blue-400/30 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg backdrop-blur-sm border border-purple-400/30 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className="absolute top-1/2 left-5 w-8 h-8 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-green-400/30 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div
        className="absolute top-1/3 right-5 w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg backdrop-blur-sm border border-yellow-400/30 animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />
    </div>
  )
}
