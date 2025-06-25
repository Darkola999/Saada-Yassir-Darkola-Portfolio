"use client"
import { Github, ExternalLink, Calendar, Clock, Star, Eye, Code2 } from "lucide-react"
import { DynamicNavigation } from "@/components/dynamic-navigation"
import { SpaceBackground } from "@/components/3d-space-background"
import { Floating3DElements } from "@/components/floating-3d-elements"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { LazyImage } from "@/components/lazy-image"
import { useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  githubUrl: string
  liveUrl: string
  featured: boolean
  stars: number
  views: number
  completedAt: string
  duration: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "3D E-Commerce Universe",
    description: "An immersive 3D shopping experience with WebGL and Three.js",
    longDescription:
      "A revolutionary e-commerce platform that transforms online shopping into an immersive 3D experience. Users can navigate through virtual showrooms, interact with products in 3D space, and enjoy realistic physics simulations. Built with Three.js, React, and modern web technologies.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Three.js", "React", "Next.js", "WebGL", "Node.js", "MongoDB", "Stripe"],
    category: "3D Web",
    githubUrl: "https://github.com/Darkola999",
    liveUrl: "https://demo.com",
    featured: true,
    stars: 245,
    views: 12500,
    completedAt: "2024-01-15",
    duration: "3 months",
  },
  {
    id: "2",
    title: "Cosmic Task Manager",
    description: "A space-themed project management app with real-time collaboration",
    longDescription:
      "A beautiful task management application with a cosmic theme, featuring real-time collaboration, advanced project tracking, and stunning visual effects. Built with React Native for cross-platform compatibility.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Redux", "Socket.io", "Node.js"],
    category: "Mobile",
    githubUrl: "https://github.com/Darkola999",
    liveUrl: "https://demo.com",
    featured: true,
    stars: 189,
    views: 8900,
    completedAt: "2024-01-10",
    duration: "2 months",
  },
  {
    id: "3",
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization of neural networks and AI models",
    longDescription:
      "An educational tool that visualizes neural networks in 3D space, allowing users to understand AI concepts through interactive exploration. Features real-time training visualization and customizable network architectures.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Three.js", "Python", "TensorFlow", "WebGL", "D3.js"],
    category: "AI/ML",
    githubUrl: "https://github.com/Darkola999",
    liveUrl: "https://demo.com",
    featured: false,
    stars: 156,
    views: 6700,
    completedAt: "2023-12-20",
    duration: "4 months",
  },
  {
    id: "4",
    title: "Quantum Portfolio",
    description: "A physics-inspired portfolio with particle systems and quantum effects",
    longDescription:
      "A unique portfolio website inspired by quantum physics, featuring particle systems, wave functions, and interactive quantum effects. Demonstrates advanced CSS animations and WebGL shaders.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Three.js", "GLSL", "React", "Framer Motion", "WebGL"],
    category: "Portfolio",
    githubUrl: "https://github.com/Darkola999",
    liveUrl: "https://demo.com",
    featured: false,
    stars: 98,
    views: 4200,
    completedAt: "2023-11-30",
    duration: "1 month",
  },
  {
    id: "5",
    title: "Blockchain Explorer 3D",
    description: "3D visualization of blockchain networks and transactions",
    longDescription:
      "An innovative blockchain explorer that visualizes cryptocurrency networks in 3D space. Users can explore transaction flows, network nodes, and blockchain data through an immersive interface.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Three.js", "Web3.js", "React", "Node.js", "GraphQL"],
    category: "Blockchain",
    githubUrl: "https://github.com/Darkola999",
    liveUrl: "https://demo.com",
    featured: false,
    stars: 134,
    views: 5600,
    completedAt: "2023-10-15",
    duration: "2.5 months",
  },
  {
    id: "6",
    title: "AR Product Showcase",
    description: "Augmented reality product visualization for e-commerce",
    longDescription:
      "An AR-powered product showcase that allows customers to visualize products in their real environment using their device camera. Features advanced 3D modeling and AR tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["AR.js", "Three.js", "WebRTC", "React", "TensorFlow.js"],
    category: "AR/VR",
    githubUrl: "https://github.com/Darkola999",
    liveUrl: "https://demo.com",
    featured: false,
    stars: 87,
    views: 3800,
    completedAt: "2023-09-25",
    duration: "3 months",
  },
]

const categories = ["All", "3D Web", "Mobile", "AI/ML", "Portfolio", "Blockchain", "AR/VR"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <SpaceBackground />
      <Floating3DElements />

      {/* Dynamic Navigation */}
      <DynamicNavigation variant="space" />

      {/* Main Content */}
      <main className="relative z-20 pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Project Galaxy
              </span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-white to-green-400 mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Explore my universe of digital creations, from immersive 3D experiences to cutting-edge applications
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-white to-green-400 text-black px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                    : "border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  Featured Galaxies
                </span>
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                {featuredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-green-400/50 transition-all duration-700 hover:scale-105 transform-gpu shadow-2xl rounded-3xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-green-500/90 text-white backdrop-blur-sm">Featured</Badge>
                        <Badge className="bg-white/90 text-black backdrop-blur-sm">{project.category}</Badge>
                      </div>

                      {/* Stats */}
                      <div className="absolute top-4 right-4 flex gap-4">
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-white text-sm">{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                          <Eye className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm">{project.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(project.completedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {project.duration}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed">{project.longDescription}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/10 text-green-400 border border-green-400/30 hover:bg-green-400/10 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          className="border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="border-white/20 text-white/70 hover:text-white hover:border-white/50 bg-white/5 backdrop-blur-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  All Projects
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105 transform-gpu shadow-2xl rounded-2xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-black backdrop-blur-sm text-xs">{project.category}</Badge>
                      </div>

                      <div className="absolute top-3 right-3 flex gap-2">
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-white text-xs">{project.stars}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/10 text-green-400 text-xs border border-green-400/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-white/10 text-white/60 text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          className="text-white/60 hover:text-green-400 p-2"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="text-white/60 hover:text-white p-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                <Code2 className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">No Projects Found</h3>
              <p className="text-white/60 mb-8 text-lg">Try adjusting your filters to explore more of the galaxy</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                className="bg-gradient-to-r from-white to-green-400 text-black px-8 py-3 rounded-2xl"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
