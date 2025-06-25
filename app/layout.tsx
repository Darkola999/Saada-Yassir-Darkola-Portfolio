import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PerformanceMonitor } from "@/components/performance-monitor"

export const metadata: Metadata = {
  title: "Saada Yassir - 3D Developer Portfolio",
  description: "Full Stack Developer specializing in 3D web experiences and modern applications",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="flex flex-col space-y-1.5 p-6 bg-transparent" lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  )
}
