/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    
    // Configure image domains (add your actual domains here)
    domains: [
      'localhost',
      'placeholder.svg',
      'via.placeholder.com',
      'images.unsplash.com',
      'cdn.example.com'
    ],
    
    // Configure image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Enable blur placeholder
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Minimize layout shift
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Compress responses
  compress: true,
}

export default nextConfig
