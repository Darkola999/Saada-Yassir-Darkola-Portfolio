"use client"
import { ArrowLeft, Calendar, Clock, User, Search, Filter, ArrowRight, Eye } from "lucide-react"
import { DynamicNavigation } from "@/components/dynamic-navigation"
import { SpaceBackground } from "@/components/3d-space-background"
import { Floating3DElements } from "@/components/floating-3d-elements"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { LazyImage } from "@/components/lazy-image"
import { useState } from "react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  readTime: string
  tags: string[]
  views: number
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of 3D Web Development",
    excerpt:
      "Exploring the latest trends and technologies in 3D web development and how they're shaping the future of the internet.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Saada Yassir",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["3D Web", "WebGL", "Three.js"],
    views: 1250,
    featured: true,
  },
  {
    id: "2",
    title: "Optimizing React Performance",
    excerpt:
      "Learn advanced techniques to optimize your React applications for better performance and user experience.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Saada Yassir",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["React", "Performance", "JavaScript"],
    views: 980,
    featured: true,
  },
  {
    id: "3",
    title: "Building Immersive User Experiences",
    excerpt:
      "How to create captivating and immersive user experiences that keep users engaged and coming back for more.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Saada Yassir",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["UX Design", "Animation", "Interaction"],
    views: 845,
    featured: false,
  },
  {
    id: "4",
    title: "The Power of WebGL in Modern Web Applications",
    excerpt: "Exploring how WebGL is revolutionizing web applications and enabling new possibilities for developers.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Saada Yassir",
    date: "2023-12-20",
    readTime: "7 min read",
    tags: ["WebGL", "Graphics", "Performance"],
    views: 720,
    featured: false,
  },
  {
    id: "5",
    title: "Next.js 14: A Deep Dive",
    excerpt:
      "Exploring the new features and improvements in Next.js 14 and how they can enhance your development workflow.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Saada Yassir",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["Next.js", "React", "Web Development"],
    views: 1100,
    featured: false,
  },
  {
    id: "6",
    title: "The Art of Animation in Web Design",
    excerpt: "How to use animations effectively to enhance user experience and bring your web designs to life.",
    content: "Full content here...",
    image: "/placeholder.svg?height=400&width=600",
    author: "Saada Yassir",
    date: "2023-12-05",
    readTime: "5 min read",
    tags: ["Animation", "CSS", "Design"],
    views: 650,
    featured: false,
  },
]

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
                The Digital Chronicle
              </span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-white to-green-400 mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on web development, design, and digital experiences
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-green-400/50 rounded-xl"
                />
              </div>
              <div className="relative">
                <Button
                  variant="outline"
                  className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-green-400 rounded-xl w-full md:w-auto"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filter by Tag
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                onClick={() => setSelectedTag(null)}
                className={
                  selectedTag === null
                    ? "bg-gradient-to-r from-white to-green-400 text-black rounded-xl"
                    : "border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 rounded-xl"
                }
                size="sm"
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  onClick={() => setSelectedTag(tag)}
                  className={
                    selectedTag === tag
                      ? "bg-gradient-to-r from-white to-green-400 text-black rounded-xl"
                      : "border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 rounded-xl"
                  }
                  size="sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  Featured Articles
                </span>
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                {featuredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-green-400/50 transition-all duration-700 hover:scale-105 transform-gpu shadow-2xl rounded-3xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-green-500/90 text-white backdrop-blur-sm">Featured</Badge>
                      </div>

                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <Eye className="w-4 h-4 text-green-400" />
                        <span className="text-white text-sm">{post.views.toLocaleString()}</span>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/10 text-green-400 border border-green-400/30 hover:bg-green-400/10 transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm group/btn"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <div>
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                  All Articles
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:scale-105 transform-gpu shadow-2xl rounded-2xl overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                        <Eye className="w-3 h-3 text-green-400" />
                        <span className="text-white text-xs">{post.views}</span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                        <span className="mx-1">•</span>
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-white/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-white/10 text-green-400 text-xs border border-green-400/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="secondary" className="bg-white/10 text-white/60 text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-green-400 p-2 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">No Articles Found</h3>
              <p className="text-white/60 mb-8 text-lg">Try adjusting your search or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedTag(null)
                }}
                className="bg-gradient-to-r from-white to-green-400 text-black px-8 py-3 rounded-2xl"
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-16">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm rounded-xl"
                  disabled
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 bg-white/5 backdrop-blur-sm rounded-xl"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
