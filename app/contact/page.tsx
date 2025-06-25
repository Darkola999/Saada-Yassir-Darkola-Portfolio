"use client"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Zap } from "lucide-react"
import { DynamicNavigation } from "@/components/dynamic-navigation"
import { SpaceBackground } from "@/components/3d-space-background"
import { Floating3DElements } from "@/components/floating-3d-elements"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
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
                Let's Connect
              </span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-white to-green-400 mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Ready to embark on a cosmic journey together? Let's create something extraordinary that pushes the
              boundaries of digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Send className="w-8 h-8 text-green-400 mr-3" />
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Details */}
              <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <Zap className="w-8 h-8 text-green-400 mr-3" />
                    Get in Touch
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group/item">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 border border-green-400/30">
                        <Mail className="w-8 h-8 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Email</p>
                        <a
                          href="mailto:yassirsaada342@gmail.com"
                          className="text-white hover:text-green-400 transition-colors duration-300 font-medium text-lg"
                        >
                          yassirsaada342@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group/item">
                      <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-green-500/20 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 border border-white/30">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Phone</p>
                        <a
                          href="tel:+212617979461"
                          className="text-white hover:text-green-400 transition-colors duration-300 font-medium text-lg"
                        >
                          +212 617 979 461
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group/item">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-white/20 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 border border-emerald-400/30">
                        <MapPin className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60 mb-1">Location</p>
                        <p className="text-white font-medium text-lg">Casablanca, Morocco</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-8">Follow the Journey</h3>

                  <div className="grid grid-cols-2 gap-6">
                    <Button
                      variant="outline"
                      onClick={() => window.open("https://www.linkedin.com/in/yassir-saada-a52609276/", "_blank")}
                      className="h-20 bg-white/5 border-white/20 hover:bg-blue-500/10 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm rounded-2xl"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Linkedin className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-white/80">LinkedIn</span>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => window.open("https://github.com/Darkola999", "_blank")}
                      className="h-20 bg-white/5 border-white/20 hover:bg-gray-500/10 hover:border-gray-400/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm rounded-2xl"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Github className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-white/80">GitHub</span>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => window.open("https://x.com/DARKOLA_", "_blank")}
                      className="h-20 bg-white/5 border-white/20 hover:bg-blue-400/10 hover:border-blue-300/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm rounded-2xl"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Twitter className="w-8 h-8 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-white/80">Twitter</span>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => window.open("mailto:yassirsaada342@gmail.com", "_blank")}
                      className="h-20 bg-white/5 border-white/20 hover:bg-green-500/10 hover:border-green-400/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm rounded-2xl"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Mail className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium text-white/80">Email</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-2xl border border-green-400/30 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <div className="w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Available for Projects</h3>
                  <p className="text-white/70 mb-6 text-lg leading-relaxed">
                    I'm currently open to new opportunities and exciting collaborations. Let's build the future
                    together!
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Usually responds within 24 hours</span>
                  </div>

                  <div className="text-white/60 text-sm">Ready to start your cosmic project? 🚀</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
