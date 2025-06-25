import { type NextRequest, NextResponse } from "next/server"
import { getBlogPosts, getFeaturedBlogPosts } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get("featured") === "true"
    const limit = searchParams.get("limit")

    let posts
    if (featured) {
      posts = await getFeaturedBlogPosts(limit ? Number.parseInt(limit) : 3)
    } else {
      posts = await getBlogPosts()
    }

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Blog API error:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
