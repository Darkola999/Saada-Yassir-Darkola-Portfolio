interface PreloadOptions {
  priority?: boolean
  sizes?: string
  quality?: number
}

class ImagePreloader {
  private cache = new Set<string>()
  private loading = new Set<string>()

  preload(src: string, options: PreloadOptions = {}): Promise<void> {
    return new Promise((resolve, reject) => {
      // Skip if already cached
      if (this.cache.has(src)) {
        resolve()
        return
      }

      // Skip if already loading
      if (this.loading.has(src)) {
        resolve()
        return
      }

      this.loading.add(src)

      const img = new Image()

      img.onload = () => {
        this.cache.add(src)
        this.loading.delete(src)
        resolve()
      }

      img.onerror = () => {
        this.loading.delete(src)
        reject(new Error(`Failed to preload image: ${src}`))
      }

      // Set crossOrigin for external images
      if (src.startsWith("http")) {
        img.crossOrigin = "anonymous"
      }

      img.src = src
    })
  }

  preloadMultiple(sources: string[], options: PreloadOptions = {}): Promise<void[]> {
    return Promise.all(sources.map((src) => this.preload(src, options)))
  }

  isLoaded(src: string): boolean {
    return this.cache.has(src)
  }

  clear(): void {
    this.cache.clear()
    this.loading.clear()
  }
}

export const imagePreloader = new ImagePreloader()

// Preload critical images
export function preloadCriticalImages() {
  if (typeof window === 'undefined') return

  const criticalImages = [
    "/placeholder.svg?height=200&width=150",
    "/placeholder.svg?height=20&width=20",
  ]

  imagePreloader.preloadMultiple(criticalImages).catch(console.warn)
}
