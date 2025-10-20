"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Briefcase, GraduationCap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Language & Foundation Training",
    items: [
      "English for IELTS/TOEFL",
      "Communication & Interview Skills",
      "Cultural Preparation for International Life",
    ],
  },
  {
    icon: Briefcase,
    title: "Education & Career Guidance",
    items: ["Career Counselling", "Pathway Planning to Global Universities", "Application Support"],
  },
  {
    icon: GraduationCap,
    title: "University Placement Services",
    items: [
      "Admission Support for Top Universities",
      "Document Preparation & Review",
      "Visa Assistance and Travel Arrangements",
    ],
  },
]

export default function Services() {
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
    <section id="services" ref={ref} className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We provide a complete package of services for students aiming to study abroad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`${isVisible ? "slide-up" : "opacity-0"} transition-all duration-700 group`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
