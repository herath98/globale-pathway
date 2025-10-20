"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "slide-in-left" : "opacity-0"} transition-all duration-700`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Global Study In Solution</h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              We are an educational institute and student consultancy firm focused on helping students take their first
              step toward international education. At Global Study In Solution, we believe in creating clear, achievable
              pathways for students who dream of studying abroad.
            </p>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From teaching languages and essential soft skills to finding the right university, we are committed to
              supporting students every step of the way.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-foreground/70">
                    To be a trusted bridge between students and international education opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-foreground/70">
                    To prepare and guide students toward success by offering quality training and helping them access
                    the best universities — with a key focus on Malaysia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`${isVisible ? "slide-in-right" : "opacity-0"} transition-all duration-700`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
              <div className="space-y-6">
                {[
                  { number: "500+", label: "Students Guided" },
                  { number: "50+", label: "Partner Universities" },
                  { number: "15+", label: "Years Experience" },
                  { number: "100%", label: "Success Rate" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{stat.number.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.number}</p>
                      <p className="text-sm text-foreground/60">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
