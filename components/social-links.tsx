import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialLinksProps {
  variant?: "default" | "minimal" | "icons" | "footer"
  className?: string
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Darkola999",
      color: "hover:text-white group-hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yassir-saada-a52609276/",
      color: "hover:text-blue-400 group-hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/DARKOLA_",
      color: "hover:text-blue-400 group-hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:yassirsaada342@gmail.com",
      color: "hover:text-green-400 group-hover:text-green-400",
    },
  ]

  if (variant === "minimal") {
    return (
      <div className={`flex space-x-4 ${className}`}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white/60 ${social.color} transition-colors duration-300`}
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    )
  }

  if (variant === "icons") {
    return (
      <div className={`flex space-x-6 ${className}`}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 ${social.color} transition-all duration-300 hover:scale-110 group`}
            aria-label={social.name}
          >
            <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </a>
        ))}
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {socialLinks.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white/70 hover:text-white hover:border-white/50 bg-white/5 backdrop-blur-sm"
            >
              <social.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              {social.name}
            </Button>
          </a>
        ))}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
          <Button
            variant="outline"
            className="w-full border-white/20 text-white/70 hover:text-white hover:border-white/50 bg-white/5 backdrop-blur-sm group-hover:scale-105 transition-all duration-300"
          >
            <social.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            {social.name}
          </Button>
        </a>
      ))}
    </div>
  )
}
