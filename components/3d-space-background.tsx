"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  speed: number
  opacity: number
  twinkle: number
}

interface Planet {
  x: number
  y: number
  z: number
  size: number
  speed: number
  color: string
  rotation: number
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const planetsRef = useRef<Planet[]>([])
  const animationRef = useRef<number | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctxRef.current = ctx

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2,
          speed: 0.5 + Math.random() * 1,
          opacity: Math.random(),
          twinkle: Math.random() * 0.02
        })
      }
      starsRef.current = stars
    }

    const createPlanets = () => {
      const planets: Planet[] = []
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

      for (let i = 0; i < 4; i++) {
        planets.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: 10 + Math.random() * 20,
          speed: 0.2 + Math.random() * 0.3,
          color: colors[i],
          rotation: Math.random() * Math.PI * 2
        })
      }
      planetsRef.current = planets
    }

    const animate = () => {
      if (!ctxRef.current) return

      ctxRef.current.clearRect(0, 0, canvas.width, canvas.height)

      // Animate stars
      starsRef.current.forEach(star => {
        star.z -= star.speed
        star.opacity += star.twinkle

        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }

        const scale = 1000 / star.z
        const x = (star.x - canvas.width / 2) * scale + canvas.width / 2
        const y = (star.y - canvas.height / 2) * scale + canvas.height / 2

        ctxRef.current!.beginPath()
        ctxRef.current!.fillStyle = `rgba(255, 255, 255, ${Math.sin(star.opacity)})`
        ctxRef.current!.arc(x, y, star.size * scale, 0, Math.PI * 2)
        ctxRef.current!.fill()
      })

      // Animate planets
      planetsRef.current.forEach(planet => {
        planet.rotation += 0.01
        planet.z -= planet.speed

        if (planet.z <= 0) {
          planet.z = 1000
          planet.x = Math.random() * canvas.width
          planet.y = Math.random() * canvas.height
        }

        const scale = 1000 / planet.z
        const x = (planet.x - canvas.width / 2) * scale + canvas.width / 2
        const y = (planet.y - canvas.height / 2) * scale + canvas.height / 2

        ctxRef.current!.beginPath()
        ctxRef.current!.fillStyle = planet.color
        ctxRef.current!.arc(x, y, planet.size * scale, 0, Math.PI * 2)
        ctxRef.current!.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createStars()
    createPlanets()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createStars()
      createPlanets()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
      <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
          style={{ background: "transparent" }}
      />
  )
}
