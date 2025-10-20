"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Building2 } from "lucide-react"

export default function Partners() {
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

  const benefits = [
    "Access to talented international students",
    "Streamlined admission process",
    "Marketing support and visibility",
    "Dedicated partnership coordinator",
    "Revenue sharing opportunities",
  ]

  return (
    <section id="partners" ref={ref} className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "slide-in-left" : "opacity-0"} transition-all duration-700`}>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">Partnership Opportunities</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Partner With Us</h2>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Universities & Educational Institutions: We welcome partnerships with colleges, universities, and
              institutions looking to connect with talented international students.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Become a Partner
            </button>
          </div>

          {/* Right Visual */}
          <div className={`${isVisible ? "slide-in-right" : "opacity-0"} transition-all duration-700`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
              <div className="space-y-8">
                {[
                  { number: "50+", label: "Partner Universities" },
                  { number: "20+", label: "Countries Represented" },
                  { number: "1000+", label: "Successful Placements" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-5xl font-bold text-primary mb-2">{stat.number}</p>
                    <p className="text-foreground/70 text-lg">{stat.label}</p>
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
