"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2, Rocket, User, Briefcase, Mail, BookOpen, Braces } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  isExternal?: boolean
}

interface DynamicNavigationProps {
  activeSection?: string
  onSectionClick?: (sectionId: string) => void
  variant?: "space" | "cosmic" | "matrix" | "neon"
}

export function DynamicNavigation({ activeSection, onSectionClick, variant = "space" }: DynamicNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const getVariantStyles = () => {
    switch (variant) {
      case "cosmic":
        return {
          container: "from-purple-600/20 via-pink-600/20 to-cyan-600/20",
          active: "text-black bg-gradient-to-r from-purple-400 to-pink-400",
          inactive: "text-white/80 hover:text-purple-300 hover:bg-purple-500/10",
          logo: "from-purple-400 via-pink-500 to-cyan-500",
          logoText: "from-purple-400 to-cyan-400",
        }
      case "matrix":
        return {
          container: "from-green-600/20 via-emerald-600/20 to-teal-600/20",
          active: "text-black bg-gradient-to-r from-green-400 to-emerald-400",
          inactive: "text-white/80 hover:text-green-300 hover:bg-green-500/10",
          logo: "from-green-400 via-emerald-500 to-teal-500",
          logoText: "from-green-400 to-emerald-400",
        }
      case "neon":
        return {
          container: "from-orange-600/20 via-red-600/20 to-pink-600/20",
          active: "text-black bg-gradient-to-r from-orange-400 to-red-400",
          inactive: "text-white/80 hover:text-orange-300 hover:bg-orange-500/10",
          logo: "from-orange-400 via-red-500 to-pink-500",
          logoText: "from-orange-400 to-red-400",
        }
      default: // space
        return {
          container: "from-white/10 via-white/5 to-white/10",
          active: "text-black bg-white shadow-lg",
          inactive: "text-white/80 hover:text-white hover:bg-white/10",
          logo: "from-white via-green-400 to-emerald-500",
          logoText: "from-white via-green-400 to-emerald-400",
        }
    }
  }

  const styles = getVariantStyles()

  const getNavigationItems = (): NavItem[] => {
    if (pathname === "/") {
      return [
        { id: "home", label: "Home", icon: Rocket },
        { id: "about", label: "About", icon: User },
        { id: "skills", label: "Skills", icon: Braces },
        { id: "projects", label: "Projects", icon: Briefcase, href: "/projects", isExternal: true },
        { id: "blog", label: "Blog", icon: BookOpen, href: "/blog", isExternal: true },
        { id: "contact", label: "Contact", icon: Mail, href: "/contact", isExternal: true },
      ]
    } else {
      return [
        { id: "home", label: "Home", icon: Rocket, href: "/", isExternal: true },
        { id: "about", label: "About", icon: User, href: "/#about", isExternal: true },
        { id: "skills", label: "Skills", icon: Braces, href: "/#skills", isExternal: true },
        { id: "projects", label: "Projects", icon: Briefcase, href: "/projects", isExternal: true },
        { id: "blog", label: "Blog", icon: BookOpen, href: "/blog", isExternal: true },
        { id: "contact", label: "Contact", icon: Mail, href: "/contact", isExternal: true },
      ]
    }
  }

  const navItems = getNavigationItems()

  const handleItemClick = (item: NavItem) => {
    if (item.isExternal || item.href) {
      setIsMenuOpen(false)
      return
    }

    if (onSectionClick) {
      onSectionClick(item.id)
    }
    setIsMenuOpen(false)
  }

  const isItemActive = (item: NavItem) => {
    if (pathname === "/" && activeSection) {
      return activeSection === item.id
    }
    if (item.href) {
      return pathname === item.href
    }
    return false
  }

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
      <nav className="relative">
        {/* Dynamic Island/Notch Container */}
        <div
          className={`bg-gradient-to-r ${styles.container} backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-white/10`}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.slice(0, 2).map((item) => {
                const ItemComponent = item.href ? Link : "button"
                const itemProps = item.href ? { href: item.href } : { onClick: () => handleItemClick(item) }

                return (
                  <ItemComponent
                    key={item.id}
                    {...itemProps}
                    className={`relative font-medium text-sm transition-all duration-300 hover:scale-105 group flex items-center space-x-2 px-3 py-2 rounded-full ${
                      isItemActive(item) ? styles.active : styles.inactive
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </ItemComponent>
                )
              })}
            </div>

            {/* Centered Logo */}
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer mx-6">
              <div className="relative transform-gpu">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${styles.logo} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg relative overflow-hidden`}
                >
                  <Code2 className="text-black w-5 h-5 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-lg font-bold bg-gradient-to-r ${styles.logoText} bg-clip-text text-transparent`}>
                  Saada Yassir
                </h1>
              </div>
            </Link>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.slice(2).map((item) => {
                const ItemComponent = item.href ? Link : "button"
                const itemProps = item.href ? { href: item.href } : { onClick: () => handleItemClick(item) }

                return (
                  <ItemComponent
                    key={item.id}
                    {...itemProps}
                    className={`relative font-medium text-sm transition-all duration-300 hover:scale-105 group flex items-center space-x-2 px-3 py-2 rounded-full ${
                      isItemActive(item) ? styles.active : styles.inactive
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </ItemComponent>
                )
              })}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-4 w-4 text-white" /> : <Menu className="h-4 w-4 text-white" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => {
                  const ItemComponent = item.href ? Link : "button"
                  const itemProps = item.href ? { href: item.href } : { onClick: () => handleItemClick(item) }

                  return (
                    <ItemComponent
                      key={item.id}
                      {...itemProps}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isItemActive(item) ? "text-black bg-white" : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </ItemComponent>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
