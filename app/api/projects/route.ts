import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featuredOnly = searchParams.get("featured") === "true"

    const supabase = createServerClient()

    let query = supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

    if (featuredOnly) {
      query = query.eq('featured', true)
    }

    const { data: projects, error } = await query

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
    }

    return NextResponse.json(projects || [])
  } catch (error) {
    console.error("Projects API error:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
