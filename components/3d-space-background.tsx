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


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      for (let i = 0; i < 1500; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 3 + 0.5,
          speed: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
        })
      }
      starsRef.current = stars
    }

    const createPlanets = () => {
      const planets: Planet[] = []
      const colors = ["#22c55e", "#10b981", "#16a34a", "#059669", "#047857", "#065f46"]

      for (let i = 0; i < 4; i++) {
        planets.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 500 + 100,
          size: Math.random() * 70 + 30,
          speed: Math.random() * 0.15 + 0.05,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: 0,
        })
      }
      planetsRef.current = planets
    }

    const drawStar = (star: Star, time: number) => {
      const x = star.x
      const y = star.y
      const size = (star.size * 1000) / (star.z + 1000)

      // Enhanced 3D star effect with green twinkling
      const twinkleIntensity = Math.sin(time * 0.003 + star.twinkle) * 0.5 + 0.5
      const finalOpacity = star.opacity * (1000 / (star.z + 1000)) * twinkleIntensity

      // Main star body (white core)
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 0.9})`
      ctx.fill()

      // Green glowing outline
      ctx.beginPath()
      ctx.arc(x, y, size * 1.2, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity * 0.8})`
      ctx.lineWidth = 0.5
      ctx.stroke()

      // Add 3D cross effect for larger stars
      if (size > 1.5) {
        const crossSize = size * 2.5
        ctx.beginPath()
        ctx.moveTo(x - crossSize, y)
        ctx.lineTo(x + crossSize, y)
        ctx.moveTo(x, y - crossSize)
        ctx.lineTo(x, y + crossSize)
        ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity * 0.9})`
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Green glow for special stars
        if (twinkleIntensity > 0.8) {
          ctx.beginPath()
          ctx.arc(x, y, size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 0.3})`
          ctx.fill()
        }
      }
    }

    const drawPlanet = (planet: Planet) => {
      const size = (planet.size * 1000) / (planet.z + 1000)
      const x = planet.x
      const y = planet.y

      // Planet with black core and green accents
      const gradient = ctx.createRadialGradient(x - size * 0.3, y - size * 0.3, 0, x, y, size)
      gradient.addColorStop(0, "#000000")
      gradient.addColorStop(0.4, planet.color + "60")
      gradient.addColorStop(0.8, planet.color + "40")
      gradient.addColorStop(1, "#000000")

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Add planet rings for some planets
      if (Math.random() > 0.6) {
        ctx.beginPath()
        ctx.ellipse(x, y, size * 1.8, size * 0.4, planet.rotation, 0, Math.PI * 2)
        ctx.strokeStyle = planet.color + "80"
        ctx.lineWidth = 2
        ctx.stroke()
      }

      planet.rotation += 0.008
    }

    const animate = () => {
      const time = Date.now()

      // Create deep black space background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle green nebula effects
      const nebulaGradient1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.3,
        0,
        canvas.width * 0.2,
        canvas.height * 0.3,
        400,
      )
      nebulaGradient1.addColorStop(0, "rgba(34, 197, 94, 0.08)")
      nebulaGradient1.addColorStop(1, "rgba(34, 197, 94, 0)")

      ctx.fillStyle = nebulaGradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const nebulaGradient2 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.7,
        0,
        canvas.width * 0.8,
        canvas.height * 0.7,
        350,
      )
      nebulaGradient2.addColorStop(0, "rgba(16, 185, 129, 0.06)")
      nebulaGradient2.addColorStop(1, "rgba(16, 185, 129, 0)")

      ctx.fillStyle = nebulaGradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Animate and draw stars with 3D effects
      starsRef.current.forEach((star) => {
        star.z -= star.speed
        star.twinkle += 0.02

        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }
        drawStar(star, time)
      })

      // Animate and draw planets
      planetsRef.current.forEach((planet) => {
        planet.z -= planet.speed
        planet.x += Math.sin(time * 0.0008 + planet.z * 0.01) * 0.3
        planet.y += Math.cos(time * 0.0008 + planet.z * 0.01) * 0.2

        if (planet.z <= 0) {
          planet.z = 500
          planet.x = Math.random() * canvas.width
          planet.y = Math.random() * canvas.height
        }

        // Keep planets in bounds
        if (planet.x < -150) planet.x = canvas.width + 150
        if (planet.x > canvas.width + 150) planet.x = -150
        if (planet.y < -150) planet.y = canvas.height + 150
        if (planet.y > canvas.height + 150) planet.y = -150

        drawPlanet(planet)
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
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
