"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react"
import { LazyImage } from "@/components/lazy-image"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  image: string
  views: number
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of UI/UX Design: Trends to Watch in 2024",
    excerpt:
      "Exploring the latest trends in user interface and user experience design that are shaping the digital landscape.",
    content: "Full article content here...",
    author: "Ibrahim Memon",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "Design",
    tags: ["UI/UX", "Design Trends", "2024"],
    image: "/placeholder.svg?height=200&width=400",
    views: 1250,
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Best Practices",
    excerpt:
      "A comprehensive guide to structuring and building React applications that can grow with your business needs.",
    content: "Full article content here...",
    author: "Ibrahim Memon",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    category: "Development",
    tags: ["React", "JavaScript", "Best Practices"],
    image: "/placeholder.svg?height=200&width=400",
    views: 980,
  },
  {
    id: "3",
    title: "The Psychology of Color in Digital Design",
    excerpt: "Understanding how colors affect user behavior and decision-making in digital interfaces.",
    content: "Full article content here...",
    author: "Ibrahim Memon",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    category: "Design Psychology",
    tags: ["Color Theory", "Psychology", "Design"],
    image: "/placeholder.svg?height=200&width=400",
    views: 756,
  },
  {
    id: "4",
    title: "Accessibility in Web Development: A Complete Guide",
    excerpt: "Making the web accessible for everyone: tools, techniques, and best practices for inclusive design.",
    content: "Full article content here...",
    author: "Ibrahim Memon",
    publishedAt: "2023-12-28",
    readTime: "10 min read",
    category: "Accessibility",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    image: "/placeholder.svg?height=200&width=400",
    views: 1420,
  },
]

export function BlogSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 px-6 bg-gray-50/50 dark:bg-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on design, development, and the intersection of technology and
            creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group bg-white/80 dark:bg-[#1A0B2E]/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 cursor-pointer opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <LazyImage
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-white">{post.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Eye className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{post.views}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in-up delay-800">
          <Button
            variant="outline"
            size="lg"
            className="bg-white/50 dark:bg-[#1A0B2E]/50 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
