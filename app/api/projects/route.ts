import { type NextRequest, NextResponse } from "next/server"
import { getProjects } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featuredOnly = searchParams.get("featured") === "true"

    const projects = await getProjects(featuredOnly)

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Projects API error:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
