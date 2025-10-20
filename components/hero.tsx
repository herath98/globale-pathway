"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div data-reveal className={`${isVisible ? "slide-in-left" : "opacity-0"}`} style={{ "--reveal-delay": "0.1s" } as any}>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold text-sm">Welcome to Global Study In Solution</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Students to Achieve Their Global Dreams
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              At Global Study In Solution, we guide students from the classroom to the campus — helping them discover
              the right path to study abroad, starting with expert training, career guidance, and trusted university
              placements.
            </p>

            <div data-reveal style={{ "--reveal-delay": "0.3s" } as any} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("services")}
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary/10 transition-all duration-300"
              >
                Start Your Journey
              </button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🎓", text: "Malaysia Pathways" },
                { icon: "🗣️", text: "Language Training" },
                { icon: "🎯", text: "Career Guidance" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-primary-foreground/90"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`hidden md:flex justify-center ${isVisible ? "slide-in-right" : "opacity-0"}`}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/50 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl p-8 border border-secondary/30 backdrop-blur-sm">
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌍</div>
                    <p className="text-primary-foreground font-bold text-xl">Your Journey Begins Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
