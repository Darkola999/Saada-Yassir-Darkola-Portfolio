"use client"
import { Terminal, Rocket, Briefcase, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DynamicNavigation } from "@/components/dynamic-navigation"
import { SpaceBackground } from "@/components/3d-space-background"
import { Floating3DElements } from "@/components/floating-3d-elements"
import { TypingEffect } from "@/components/typing-effect"
import { skillCategories, skillsByCategory } from "@/components/skill-icons"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Download, Award, ExternalLink } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { preloadCriticalImages } from "@/lib/image-preloader"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Certifications data
const certifications = [
  {
    id: "1",
    title: "Google Career Certificate in Digital Marketing and E-Commerce",
    issuer: "Google Career Certificate",
    date: "2024-01-15",
    credentialId: "VB4 PQA BBM",
    image: "/Google Career Certificate en marketing digital et e-commerce.png?height=200&width=300",
    verifyUrl: "https://learndigital.withgoogle.com/link/1qsdpcedm9s",
    skills: ["Marketing Digital", "Google", "E-commerce", "Scalability"],
  },
  {
    id: "2",
    title: "Scrimba Professional Developer Next JS Certificate",
    issuer: "Scrimba",
    date: "2023-11-20",
    credentialId: "GCP-PD-2023-002",
    image: "/placeholder.svg?height=200&width=300",
    verifyUrl: "https://cloud.google.com/certification",
    skills: ["Next JS", "JS", "Full Stack", "Web Development"],
  },
  {
    id: "3",
    title: "Scrimba Professional Developer React JS Certificate",
    issuer: "Scrimba",
    date: "2023-09-10",
    credentialId: "META-RD-2023-003",
    image: "/placeholder.svg?height=200&width=300",
    verifyUrl: "https://developers.facebook.com/certification",
    skills: ["React", "JavaScript", "Frontend", "UI/UX"],
  },
  {
    id: "4",
    title: "Scrimba Professional Developer Javascript Certificate",
    issuer: "Scrimba",
    date: "2023-07-05",
    credentialId: "MDB-DEV-2023-004",
    image: "/placeholder.svg?height=200&width=300",
    verifyUrl: "https://university.mongodb.com/certification",
    skills: ["JS", "Javascript", "Full Stack", "Web Development"],
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showTyping, setShowTyping] = useState(false)
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 1000)
    preloadCriticalImages()
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <SpaceBackground />
      <Floating3DElements />

      {/* Dynamic Navigation */}
      <DynamicNavigation activeSection={activeSection} onSectionClick={scrollToSection} variant="space" />

      {/* Main Content */}
      <main className="relative z-20 pt-24">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="container mx-auto text-center">
            <div className="max-w-6xl mx-auto">
              {/* Terminal */}
              <div className="relative mb-12 transform-gpu perspective-1000">
                <div className="bg-black/90 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl transform rotateX-5 hover:rotateX-0 transition-all duration-700 group">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                    </div>
                    <span className="text-white/60 text-sm font-mono">@Darkola.gg</span>
                  </div>

                  <div className="text-left font-mono text-lg space-y-4">
                    <div className="text-white flex items-center">
                      <span className="text-green-400 mr-2">$</span>
                      <span className="animate-pulse">...𝕿𝖚 𝖘𝖊𝖎 𝖓𝖔𝖎, 𝖓𝖔𝖎 𝖘𝖎𝖆𝖒𝖔 𝖙𝖊. 𝕺𝖘𝖆 𝖊 𝖇𝖆𝖘𝖙𝖆, 𝖎𝖑 𝖗𝖊𝖘𝖙𝖔 𝖓𝖔𝖓 𝖈𝖔𝖓𝖙𝖆</span>
                    </div>

                    {showTyping && (
                      <div className="space-y-2">
                        <TypingEffect text="Loading Saada Yassir..." speed={50} className="text-white block" />
                        <TypingEffect
                          text="Status: Full Stack Developer & 3D Designer ✨"
                          speed={40}
                          delay={1500}
                          className="text-green-400 block"
                        />
                        <TypingEffect
                          text="Specialization: Modern Web Experiences & Applications"
                          speed={35}
                          delay={3000}
                          className="text-white/80 block"
                        />
                      </div>
                    )}

                    <div className="text-white mt-6 opacity-0 animate-fade-in-up delay-[4000ms]">
                      <span className="text-green-400 mr-2">$</span>
                      <span>Darkola.txt</span>
                    </div>

                    <div className="text-white/80 ml-6 opacity-0 animate-fade-in-up delay-[4500ms] leading-relaxed">
                      "Transforming ideas into immersive digital experiences
                      <br />
                      that push the boundaries of what's possible on the web."
                    </div>
                  </div>
                </div>

                {/* Shadow */}
                <div className="absolute top-4 left-4 w-full h-full bg-white/5 rounded-3xl blur-xl -z-10"></div>
              </div>

              {/* Main Hero Content */}
              <div className="opacity-0 animate-fade-in-up delay-[5000ms] space-y-8">
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-green-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                    Code The Future
                  </span>
                  <br />
                  <span className="text-white/90 text-4xl lg:text-6xl">Build Tomorrow</span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                  I craft <span className="text-white font-semibold">immersive digital experiences</span> and
                  <span className="text-green-400 font-semibold"> cutting-edge applications</span> that bridge the gap
                  between imagination and reality.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href="/projects">
                    <Button className="bg-white text-black hover:bg-white/90 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 group transform-gpu">
                      <Rocket className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      Explore Projects
                    </Button>
                  </Link>

                  <Link
                      href="/yassirCV.pdf"
                      target="_blank"
                      download
                  >
                    <Button
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                    >
                      <Download className="w-6 h-6 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
                      Download CV
                    </Button>
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-8 pt-8">
                  {[
                    { icon: Github, href: "https://github.com/Darkola999", label: "GitHub", color: "hover:text-white" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/yassir-saada-a52609276/",
                      label: "LinkedIn",
                      color: "hover:text-green-400",
                    },
                    {
                      icon: Mail,
                      href: "mailto:yassirsaada342@gmail.com",
                      label: "Email",
                      color: "hover:text-white",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-2 group transform-gpu hover:shadow-2xl hover:shadow-white/10`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">About Me</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-white to-green-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Profile Card */}
              <div className="relative group transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-green-400/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 transform-gpu group-hover:scale-110 shadow-2xl shadow-white/10"></div>

                <div className="relative bg-black/80 backdrop-blur-2xl rounded-full border border-white/20 p-8 transform hover:rotateY-12 hover:rotateX-6 hover:scale-105 transition-all duration-500 ease-out shadow-2xl will-change-transform aspect-square flex items-center justify-center">
                  <div className="relative">
                    <OptimizedImage
                      src="/saadayassironmac.png?height=400&width=400"
                      alt="Saada Yassir - Developer"
                      width={400}
                      height={300}
                      className="w-full h-96 object-cover rounded-2xl"
                      priority
                    />

                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                    <div className="absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full animate-pulse shadow-lg"></div>
                  </div>

                  {/* Floating info cards */}
                  <div className="absolute -right-4 top-8 bg-white text-black rounded-xl p-3 text-sm font-semibold shadow-xl animate-float">
                    3+ Years Experience
                  </div>

                  <div
                    className="absolute -left-4 bottom-8 bg-green-500 text-black rounded-xl p-3 text-sm font-semibold shadow-xl animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    10+ Projects
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div className="space-y-8">
                <div className="bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/20 p-10 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Terminal className="w-8 h-8 mr-3 text-green-400" />
                    My Journey
                  </h3>

                  <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                    <p>
                      I'm a passionate <span className="text-white font-semibold">Full Stack Developer</span> from
                      <span className="text-green-400 font-semibold"> Casablanca, Morocco</span>, specializing in
                      creating immersive web experiences that blur the line between reality and digital art.
                    </p>

                    <p>
                      With <span className="text-white font-semibold">3+ years</span> of experience, I transform complex
                      ideas into stunning visual experiences using cutting-edge technologies like React.js, Next.js, and
                      modern frameworks.
                    </p>

                    <p>
                      Currently seeking opportunities with
                      <span className="text-green-400 font-semibold"> innovative teams</span> that push the boundaries
                      of web development and create meaningful digital experiences.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-10">
                    {[
                      { number: "3+", label: "Years", color: "text-white" },
                      { number: "10+", label: "Projects", color: "text-green-400" },
                      { number: "100%", label: "Satisfaction", color: "text-white" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div
                          className={`text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="bg-black/60 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: "yassirsaada342@gmail.com", color: "text-white" },
                      { icon: "📱", text: "+212 617 979 461", color: "text-green-400" },
                      { icon: "🌍", text: "Casablanca, Morocco", color: "text-white" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center text-white/80 hover:text-white transition-colors duration-300 group"
                      >
                        {typeof item.icon === "string" ? (
                          <span className="text-2xl mr-4">{item.icon}</span>
                        ) : (
                          <item.icon
                            className={`w-6 h-6 ${item.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                          />
                        )}
                        <span className="text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Planetary Space Design */}
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-24">
                  <div className="inline-block">
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                        Tech Galaxy
                      </span>
                    </h2>
                    <div className="w-32 h-2 bg-gradient-to-r from-white to-green-400 mx-auto rounded-full mb-8"></div>
                    <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                      Explore my universe of technologies and skills
                    </p>
                  </div>
                </div>

                {/* Solar System Layout */}
                <div className="relative w-full max-w-6xl mx-auto" style={{ height: "800px" }}>
                  {/* Central Sun (Core Skills) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <div className="w-24 h-24 bg-gradient-to-br from-white to-yellow-300 rounded-full flex items-center justify-center">
                        <Rocket className="w-12 h-12 text-orange-600" />
                      </div>
                      {/* Sun rays */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 to-transparent animate-spin-slow"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-yellow-400/20 animate-ping"></div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
                      <span className="text-white font-bold text-lg">Core Skills</span>
                    </div>
                  </div>

                  {/* Orbital Rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-96 h-96 border border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-[500px] h-[500px] border border-green-400/10 rounded-full animate-spin-reverse"></div>
                    <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-[700px] h-[700px] border border-green-400/5 rounded-full animate-spin-reverse"></div>
                  </div>

                  {/* Skill Planets */}
                  {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => {
                    const skills = skillsByCategory[categoryKey] || []
                    const CategoryIcon = category.icon
                    const totalCategories = Object.keys(skillCategories).length
                    const angle = (categoryIndex * 360) / totalCategories
                    const radius = 200 + (categoryIndex % 3) * 80
                    const x = Math.cos((angle * Math.PI) / 180) * radius
                    const y = Math.sin((angle * Math.PI) / 180) * radius

                    return (
                      <div
                        key={categoryKey}
                        className="absolute group/planet cursor-pointer transform-gpu"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                          zIndex: 15,
                          animation: `orbit-${categoryIndex} 20s linear infinite`,
                        }}
                        onClick={() => setSelectedPlanet(categoryKey)}
                      >
                        {/* Planet */}
                        <div
                          className={`relative w-20 h-20 bg-gradient-to-br ${category.bgGradient} rounded-full border-2 ${category.borderColor} shadow-2xl hover:scale-125 transition-all duration-500 group-hover/planet:shadow-2xl backdrop-blur-2xl planet-shadow-${category.color}`}
                        >
                          <div
                            className={`w-full h-full bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center opacity-90 group-hover/planet:opacity-100 transition-opacity duration-300`}
                          >
                            <CategoryIcon className="w-8 h-8 text-black group-hover/planet:scale-110 transition-transform duration-300" />
                          </div>

                          {/* Planet atmosphere */}
                          <div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.gradient} opacity-20 group-hover/planet:opacity-40 transition-opacity duration-300 animate-pulse`}
                          ></div>

                          {/* Planet rings for some categories */}
                          {(categoryKey === "frontend" || categoryKey === "backend" || categoryKey === "devops") && (
                            <div
                              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-8 border-2 ${category.borderColor} rounded-full opacity-60 group-hover/planet:opacity-100 transition-opacity duration-300 planet-rings`}
                            ></div>
                          )}

                          {/* Skill count indicator */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold shadow-lg">
                            {skills.length}
                          </div>
                        </div>

                        {/* Planet name and details */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover/planet:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30">
                          <div className="bg-black/90 backdrop-blur-2xl text-white text-sm px-4 py-2 rounded-xl border border-white/20 shadow-2xl">
                            <div className={`font-bold ${category.textColor} mb-1`}>{category.name}</div>
                            <div className="text-white/70 text-xs">{skills.length} technologies</div>
                            <div className="flex flex-wrap gap-1 mt-2 max-w-48">
                              {skills.slice(0, 3).map((skill, index) => (
                                <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded text-white/80">
                                  {skill.name}
                                </span>
                              ))}
                              {skills.length > 3 && (
                                <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/60">
                                  +{skills.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                        </div>

                        {/* Orbital trail */}
                        <div className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/planet:opacity-100 transition-opacity duration-500 origin-left orbital-trail"></div>

                        {/* Moons (top skills) */}
                        {skills.slice(0, 2).map((skill, skillIndex) => {
                          const moonAngle = skillIndex * 180 + (Date.now() / 1000) * 50
                          const moonRadius = 35
                          const moonX = Math.cos((moonAngle * Math.PI) / 180) * moonRadius
                          const moonY = Math.sin((moonAngle * Math.PI) / 180) * moonRadius
                          const SkillIcon = skill.icon

                          return (
                            <div
                              key={skillIndex}
                              className="absolute w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center group-hover/planet:scale-110 transition-transform duration-300"
                              style={{
                                left: "50%",
                                top: "50%",
                                transform: `translate(${moonX}px, ${moonY}px) translate(-50%, -50%)`,
                                animation: `moon-orbit-${categoryIndex}-${skillIndex} 8s linear infinite`,
                              }}
                            >
                              <SkillIcon className="w-3 h-3 text-white" />
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}

                  {/* Asteroid Belt (Additional Skills) */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, index) => {
                      const angle = index * 30 + (Date.now() / 1000) * 10
                      const radius = 350 + Math.sin(index) * 20
                      const x = Math.cos((angle * Math.PI) / 180) * radius
                      const y = Math.sin((angle * Math.PI) / 180) * radius

                      return (
                        <div
                          key={index}
                          className="absolute w-2 h-2 bg-white/30 rounded-full"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                            animation: `asteroid-${index} 30s linear infinite`,
                          }}
                        ></div>
                      )
                    })}
                  </div>

                  {/* Shooting Stars */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0"
                        style={{
                          animation: `shooting-star-${index} 3s ease-out infinite`,
                          animationDelay: `${index * 2}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-32">
                  <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold mb-6 flex items-center justify-center">
                      <Award className="w-8 h-8 text-green-400 mr-3" />
                      <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                        Certifications
                      </span>
                    </h3>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                      Professional certifications that validate my expertise and knowledge
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert) => (
                      <Card
                        key={cert.id}
                        className="group bg-black/60 backdrop-blur-2xl border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 transform-gpu shadow-2xl rounded-2xl overflow-hidden"
                      >
                        <div className="relative overflow-hidden">
                          <OptimizedImage
                            src={cert.image}
                            alt={cert.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>

                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                            {cert.title}
                          </h4>

                          <div className="flex items-center text-white/60 text-sm mb-3">
                            <span>{cert.issuer}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(cert.date).getFullYear()}</span>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {cert.skills.slice(0, 2).map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-white/10 text-green-400 text-xs border border-green-400/30"
                              >
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 2 && (
                              <Badge variant="secondary" className="bg-white/10 text-white/60 text-xs">
                                +{cert.skills.length - 2}
                              </Badge>
                            )}
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(cert.verifyUrl, "_blank")}
                            className="text-white/60 hover:text-green-400 p-2 w-full flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                {/* Skill Planet Modal */}
                {selectedPlanet && (
                  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="bg-black/90 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
                        {(() => {
                          type PlanetKey = keyof typeof skillCategories;
                          const category = skillCategories[selectedPlanet as PlanetKey];
                          const skills = skillsByCategory[selectedPlanet] || []
                          const CategoryIcon = category.icon

                          return (
                            <>
                              {/* Modal Header */}
                              <div
                                className={`relative p-8 bg-gradient-to-r ${category.bgGradient} rounded-t-3xl border-b ${category.borderColor}`}
                              >
                                <button
                                  onClick={() => setSelectedPlanet(null)}
                                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                                >
                                  <X className="w-5 h-5" />
                                </button>

                                <div className="flex items-center space-x-6">
                                  <div
                                    className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center shadow-2xl`}
                                  >
                                    <CategoryIcon className="w-10 h-10 text-black" />
                                  </div>
                                  <div>
                                    <h2 className="text-4xl font-bold text-white mb-2">{category.name}</h2>
                                    <p className="text-white/80 text-lg">{skills.length} Technologies & Tools</p>
                                  </div>
                                </div>
                              </div>

                              {/* Modal Content */}
                              <div className="p-8">
                                {/* Skills Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                  {skills.map((skill, index) => {
                                    const SkillIcon = skill.icon
                                    return (
                                      <div
                                        key={index}
                                        className={`group bg-gradient-to-br ${category.bgGradient} rounded-2xl border ${category.borderColor} p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                                      >
                                        <div className="flex items-center space-x-4 mb-4">
                                          <div
                                            className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                                          >
                                            <SkillIcon className="w-6 h-6 text-black" />
                                          </div>
                                          <div>
                                            <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                                            <div className="flex items-center space-x-2">
                                              <div className="flex-1 bg-white/20 rounded-full h-2">
                                                <div
                                                  className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
                                                  style={{ width: `${skill.proficiency}%` }}
                                                ></div>
                                              </div>
                                              <span className={`text-sm font-medium ${category.textColor}`}>
                                                {skill.proficiency}%
                                              </span>
                                            </div>
                                          </div>
                                        </div>

                                        <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                          {skill.description}
                                        </p>
                                      </div>
                                    )
                                  })}
                                </div>

                                {/* Category Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                  <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">{skills.length}</div>
                                    <div className="text-white/60 text-sm">Technologies</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-3xl font-bold text-green-400 mb-1">
                                      {Math.round(
                                        skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length,
                                      )}
                                      %
                                    </div>
                                    <div className="text-white/60 text-sm">Avg Proficiency</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-3xl font-bold text-white mb-1">
                                      {skills.filter((skill) => skill.proficiency >= 90).length}
                                    </div>
                                    <div className="text-white/60 text-sm">Expert Level</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-3xl font-bold text-green-400 mb-1">3+</div>
                                    <div className="text-white/60 text-sm">Years Experience</div>
                                  </div>
                                </div>

                                {/* Related Projects */}
                                <div className="mb-8">
                                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Briefcase className="w-6 h-6 text-green-400 mr-3" />
                                    Related Projects
                                  </h3>
                                  <div className="grid md:grid-cols-2 gap-6">
                                    {[1, 2].map((projectIndex) => (
                                      <div
                                        key={projectIndex}
                                        className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors duration-300 group"
                                      >
                                        <div className="flex items-start space-x-4">
                                          <div
                                            className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                                          >
                                            <Rocket className="w-6 h-6 text-black" />
                                          </div>
                                          <div className="flex-1">
                                            <h4 className="text-white font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                                              {category.name} Project {projectIndex}
                                            </h4>
                                            <p className="text-white/70 text-sm mb-3">
                                              A showcase project demonstrating advanced {category.name.toLowerCase()}{" "}
                                              techniques and best practices.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                              {skills.slice(0, 3).map((skill) => (
                                                <Badge
                                                  key={skill.name}
                                                  variant="secondary"
                                                  className={`bg-gradient-to-r ${category.bgGradient} text-white text-xs border ${category.borderColor}`}
                                                >
                                                  {skill.name}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Learning Path */}
                                <div className="bg-gradient-to-r from-white/5 to-green-400/5 rounded-2xl border border-white/10 p-6">
                                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <Award className="w-6 h-6 text-green-400 mr-3" />
                                    Learning Journey
                                  </h3>
                                  <div className="space-y-4">
                                    {[
                                      {
                                        level: "Beginner",
                                        description: "Started with fundamentals and basic concepts",
                                        year: "2021",
                                      },
                                      {
                                        level: "Intermediate",
                                        description: "Built real-world projects and gained practical experience",
                                        year: "2022",
                                      },
                                      {
                                        level: "Advanced",
                                        description: "Mastered complex patterns and optimization techniques",
                                        year: "2023",
                                      },
                                      {
                                        level: "Expert",
                                        description: "Leading projects and mentoring others",
                                        year: "2024",
                                      },
                                    ].map((stage, index) => (
                                      <div key={index} className="flex items-center space-x-4">
                                        <div
                                          className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full flex-shrink-0`}
                                        ></div>
                                        <div className="flex-1">
                                          <div className="flex items-center space-x-3">
                                            <span className="text-white font-medium">{stage.level}</span>
                                            <span className="text-white/40">•</span>
                                            <span className="text-white/60 text-sm">{stage.year}</span>
                                          </div>
                                          <p className="text-white/70 text-sm">{stage.description}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </>
                          )
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-white to-green-400 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                A glimpse into my digital universe
              </p>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[1, 2, 3].map((index) => (
                <Card
                  key={index}
                  className="group bg-black/60 backdrop-blur-2xl border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 transform-gpu shadow-2xl rounded-2xl overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Project ${index}`}
                      width={600}
                      height={400}
                      className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      Project Title {index}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-2">
                      A brief description of this amazing project and the technologies used to build it.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {["React", "Three.js", "WebGL"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/10 text-green-400 border border-green-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/projects">
                <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 group transform-gpu">
                  <Briefcase className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32 px-6 relative">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-gradient-to-r from-white/10 via-green-400/10 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-12 shadow-2xl relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                    Ready to Start Your Next Project?
                  </span>
                </h2>

                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
                  Let's collaborate to create something extraordinary that pushes the boundaries of digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-black hover:bg-white/90 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 group transform-gpu">
                      <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      Get in Touch
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
                  >
                    <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    yassirsaada342@gmail.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes orbit-0 { 
          from { transform: translate(200px, 0px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(200px, 0px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-1 { 
          from { transform: translate(198px, 198px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(198px, 198px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-2 { 
          from { transform: translate(0px, 200px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(0px, 200px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-3 { 
          from { transform: translate(-198px, 198px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-198px, 198px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-4 { 
          from { transform: translate(-200px, 0px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-200px, 0px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-5 { 
          from { transform: translate(-198px, -198px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-198px, -198px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-6 { 
          from { transform: translate(0px, -200px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(0px, -200px) translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes orbit-7 { 
          from { transform: translate(198px, -198px) translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(198px, -198px) translate(-50%, -50%) rotate(360deg); } 
        }

        @keyframes shooting-star-0 { 
          0% { opacity: 0; transform: translateX(-100px) translateY(-100px); } 
          50% { opacity: 1; } 
          100% { opacity: 0; transform: translateX(800px) translateY(400px); } 
        }
        @keyframes shooting-star-1 { 
          0% { opacity: 0; transform: translateX(800px) translateY(-100px); } 
          50% { opacity: 1; } 
          100% { opacity: 0; transform: translateX(-100px) translateY(400px); } 
        }
        @keyframes shooting-star-2 { 
          0% { opacity: 0; transform: translateX(400px) translateY(-100px); } 
          50% { opacity: 1; } 
          100% { opacity: 0; transform: translateX(400px) translateY(800px); } 
        }

        .planet-shadow-blue {
          box-shadow: 0 0 30px #3b82f640;
        }

        .planet-shadow-green {
          box-shadow: 0 0 30px #10b98140;
        }

        .planet-shadow-purple {
          box-shadow: 0 0 30px #8b5cf640;
        }

        .planet-shadow-orange {
          box-shadow: 0 0 30px #f9731640;
        }

        .planet-shadow-pink {
          box-shadow: 0 0 30px #ec489940;
        }

        .planet-shadow-indigo {
          box-shadow: 0 0 30px #6366f140;
        }

        .planet-shadow-yellow {
          box-shadow: 0 0 30px #eab30840;
        }

        .planet-shadow-gray {
          box-shadow: 0 0 30px #6b728040;
        }

        .planet-rings {
          transform: translate(-50%, -50%) rotateX(75deg);
        }

        .orbital-trail {
          height: 2px;
        }
      `}</style>
    </div>
  )
}
