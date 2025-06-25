"use client"

import { useState, useRef, useEffect } from "react"
import { OptimizedImage } from "./optimized-image"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  threshold?: number
  rootMargin?: string
  onLoad?: () => void
  onError?: () => void
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  threshold = 0.1,
  rootMargin = "50px",
  ...props
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(priority)
  const [hasLoaded, setHasLoaded] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, threshold, rootMargin])

  const handleLoad = () => {
    setHasLoaded(true)
    props.onLoad?.()
  }

  return (
    <div ref={imgRef} className={cn("relative", className)} style={{ width, height }}>
      {isInView ? (
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={handleLoad}
          className={cn(
            "transition-all duration-700 ease-out",
            hasLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0",
          )}
          {...props}
        />
      ) : (
        <div
          className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 animate-pulse rounded-lg"
          style={{ width, height }}
        />
      )}
    </div>
  )
}
