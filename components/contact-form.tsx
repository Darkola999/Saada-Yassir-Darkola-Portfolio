"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      // EmailJS configuration - replace with your actual service details
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration missing. Please set up environment variables.")
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Portfolio Contact Form",
        message: formData.message,
        to_name: "Saada Yassir",
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you within 24 hours.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try emailing me directly at yassirsaada342@gmail.com",
      })
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
      <Card className="w-full max-w-2xl mx-auto bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-black dark:text-white flex items-center justify-center gap-2">
            <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
            Get In Touch
          </CardTitle>
          <p className="text-black dark:text-white mt-2">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black dark:text-white flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Name *
                </Label>
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-white/50 dark:bg-black/50 border-green-300 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400 transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black dark:text-white flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/50 dark:bg-black/50 border-green-300 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-black dark:text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Subject
              </Label>
              <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-white/50 dark:bg-black/50 border-green-300 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-black dark:text-white">
                Message *
              </Label>
              <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, ideas, or just say hello!"
                  rows={5}
                  required
                  className="bg-white/50 dark:bg-black/50 border-green-300 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400 transition-all duration-300 resize-none"
              />
            </div>

            {status.message && (
                <div
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                        status.type === "success"
                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                            : status.type === "error"
                                ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                                : "bg-black/5 dark:bg-white/5 text-black dark:text-white border border-green-200 dark:border-green-800"
                    }`}
                >
                  {status.type === "success" && <CheckCircle className="w-5 h-5" />}
                  {status.type === "error" && <AlertCircle className="w-5 h-5" />}
                  {status.type === "loading" && (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  )}
                  <span>{status.message}</span>
                </div>
            )}

            <Button
                type="submit"
                disabled={!isFormValid || status.type === "loading"}
                className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status.type === "loading" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
              ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
  )
}
export default ContactForm
