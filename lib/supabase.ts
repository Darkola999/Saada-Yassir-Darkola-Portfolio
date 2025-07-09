import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side Supabase client (singleton pattern)
const globalForSupabase = global as unknown as {
  supabase: ReturnType<typeof createClient>
}

export const supabase = globalForSupabase.supabase || createClient(supabaseUrl, supabaseAnonKey)

if (process.env.NODE_ENV !== "production") {
  globalForSupabase.supabase = supabase
}

// Server-side Supabase client
export const createServerClient = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey
  return createClient(supabaseUrl, serviceKey)
}

// Database types
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  created_at: string
  status: "unread" | "read" | "replied"
}

export interface Project {
  id: string
  title: string
  description: string
  image_url?: string
  demo_url?: string
  github_url?: string
  technologies: string[]
  featured: boolean
  created_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image_url?: string
  published: boolean
  featured?: boolean
  created_at: string
  updated_at: string
  tags: string[]
}
