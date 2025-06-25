"use client"

import { Code, Database, Smartphone, Palette, Server, Globe, Cpu, Monitor, Cloud, GitBranch } from "lucide-react"

// Enhanced SVG components for specific technologies with proper logos and colors
export const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
  </svg>
)

export const NextJSIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.318 16.956 1.669 13.94.394 13.114.134 12.208.026 11.572 0z" />
  </svg>
)

export const JavaScriptIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
)

export const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
)

export const NodeJSIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
)

// Skill categories with colors and themes
export const skillCategories = {
  frontend: {
    name: "Frontend Development",
    color: "blue",
    gradient: "from-blue-400 to-cyan-400",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/50",
    textColor: "text-blue-400",
    icon: Monitor,
  },
  backend: {
    name: "Backend Development",
    color: "green",
    gradient: "from-green-400 to-emerald-400",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-400/50",
    textColor: "text-green-400",
    icon: Server,
  },
  mobile: {
    name: "Mobile Development",
    color: "purple",
    gradient: "from-purple-400 to-pink-400",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/50",
    textColor: "text-purple-400",
    icon: Smartphone,
  },
  database: {
    name: "Database & Storage",
    color: "orange",
    gradient: "from-orange-400 to-red-400",
    bgGradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-400/50",
    textColor: "text-orange-400",
    icon: Database,
  },
  design: {
    name: "Design & UI/UX",
    color: "pink",
    gradient: "from-pink-400 to-rose-400",
    bgGradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-400/50",
    textColor: "text-pink-400",
    icon: Palette,
  },
  devops: {
    name: "DevOps & Cloud",
    color: "indigo",
    gradient: "from-indigo-400 to-blue-400",
    bgGradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-400/50",
    textColor: "text-indigo-400",
    icon: Cloud,
  },
  languages: {
    name: "Programming Languages",
    color: "yellow",
    gradient: "from-yellow-400 to-amber-400",
    bgGradient: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-400/50",
    textColor: "text-yellow-400",
    icon: Code,
  },
  tools: {
    name: "Tools & Version Control",
    color: "gray",
    gradient: "from-gray-400 to-slate-400",
    bgGradient: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-gray-400/50",
    textColor: "text-gray-400",
    icon: GitBranch,
  },
}

// Skills data organized by categories
export const skillIconsData = [
  // Frontend Development
  {
    name: "React",
    icon: ReactIcon,
    category: "frontend",
    proficiency: 95,
    description: "Advanced React development with hooks, context, and modern patterns",
  },
  {
    name: "Next.js",
    icon: NextJSIcon,
    category: "frontend",
    proficiency: 90,
    description: "Full-stack React framework with SSR, SSG, and API routes",
  },
  {
    name: "Vue.js",
    icon: Code,
    category: "frontend",
    proficiency: 80,
    description: "Progressive JavaScript framework for building user interfaces",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    category: "frontend",
    proficiency: 95,
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "Three.js",
    icon: Cpu,
    category: "frontend",
    proficiency: 85,
    description: "3D graphics library for creating immersive web experiences",
  },
  {
    name: "GSAP",
    icon: Monitor,
    category: "frontend",
    proficiency: 80,
    description: "Professional-grade animation library for the web",
  },

  // Backend Development
  {
    name: "Node.js",
    icon: NodeJSIcon,
    category: "backend",
    proficiency: 90,
    description: "JavaScript runtime for building scalable server-side applications",
  },
  {
    name: "Express.js",
    icon: Server,
    category: "backend",
    proficiency: 85,
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "Python",
    icon: Code,
    category: "backend",
    proficiency: 80,
    description: "Versatile programming language for web development and data science",
  },
  {
    name: "Django",
    icon: Server,
    category: "backend",
    proficiency: 75,
    description: "High-level Python web framework for rapid development",
  },
  {
    name: "GraphQL",
    icon: Database,
    category: "backend",
    proficiency: 70,
    description: "Query language and runtime for APIs",
  },

  // Mobile Development
  {
    name: "React Native",
    icon: Smartphone,
    category: "mobile",
    proficiency: 85,
    description: "Cross-platform mobile app development with React",
  },
  {
    name: "Flutter",
    icon: Smartphone,
    category: "mobile",
    proficiency: 75,
    description: "Google's UI toolkit for building natively compiled applications",
  },
  {
    name: "Expo",
    icon: Smartphone,
    category: "mobile",
    proficiency: 80,
    description: "Platform for making universal native apps with React Native",
  },

  // Database & Storage
  {
    name: "MongoDB",
    icon: Database,
    category: "database",
    proficiency: 85,
    description: "NoSQL document database for modern applications",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    category: "database",
    proficiency: 80,
    description: "Advanced open-source relational database",
  },
  {
    name: "Redis",
    icon: Database,
    category: "database",
    proficiency: 70,
    description: "In-memory data structure store for caching and sessions",
  },
  {
    name: "Supabase",
    icon: Database,
    category: "database",
    proficiency: 85,
    description: "Open-source Firebase alternative with PostgreSQL",
  },
  {
    name: "Firebase",
    icon: Database,
    category: "database",
    proficiency: 80,
    description: "Google's platform for building mobile and web applications",
  },

  // Design & UI/UX
  {
    name: "Figma",
    icon: Palette,
    category: "design",
    proficiency: 90,
    description: "Collaborative interface design tool",
  },
  {
    name: "Adobe XD",
    icon: Palette,
    category: "design",
    proficiency: 75,
    description: "Vector-based user experience design tool",
  },
  {
    name: "Framer",
    icon: Palette,
    category: "design",
    proficiency: 70,
    description: "Interactive design and prototyping tool",
  },
  {
    name: "Blender",
    icon: Cpu,
    category: "design",
    proficiency: 65,
    description: "3D creation suite for modeling, animation, and rendering",
  },

  // DevOps & Cloud
  {
    name: "AWS",
    icon: Cloud,
    category: "devops",
    proficiency: 75,
    description: "Amazon Web Services cloud computing platform",
  },
  {
    name: "Vercel",
    icon: Globe,
    category: "devops",
    proficiency: 90,
    description: "Platform for frontend frameworks and static sites",
  },
  {
    name: "Docker",
    icon: Cloud,
    category: "devops",
    proficiency: 70,
    description: "Containerization platform for application deployment",
  },
  {
    name: "Netlify",
    icon: Globe,
    category: "devops",
    proficiency: 85,
    description: "Platform for deploying and hosting modern web projects",
  },

  // Programming Languages
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    category: "languages",
    proficiency: 95,
    description: "Dynamic programming language for web development",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    category: "languages",
    proficiency: 90,
    description: "Typed superset of JavaScript for large-scale applications",
  },
  {
    name: "Python",
    icon: Code,
    category: "languages",
    proficiency: 80,
    description: "High-level programming language for various applications",
  },
  {
    name: "Java",
    icon: Cpu,
    category: "languages",
    proficiency: 70,
    description: "Object-oriented programming language for enterprise applications",
  },

  // Tools & Version Control
  {
    name: "Git",
    icon: GitBranch,
    category: "tools",
    proficiency: 90,
    description: "Distributed version control system",
  },
  {
    name: "GitHub",
    icon: GitBranch,
    category: "tools",
    proficiency: 90,
    description: "Web-based platform for version control and collaboration",
  },
  {
    name: "VS Code",
    icon: Code,
    category: "tools",
    proficiency: 95,
    description: "Lightweight but powerful source code editor",
  },
  {
    name: "Postman",
    icon: Globe,
    category: "tools",
    proficiency: 85,
    description: "API development and testing platform",
  },
]

// Group skills by category
export const skillsByCategory = Object.keys(skillCategories).reduce(
  (acc, categoryKey) => {
    acc[categoryKey] = skillIconsData.filter((skill) => skill.category === categoryKey)
    return acc
  },
  {} as Record<string, typeof skillIconsData>,
)
