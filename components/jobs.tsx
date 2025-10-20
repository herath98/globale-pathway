"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, MapPin, ArrowRight } from "lucide-react"

const jobs = [
  { title: "Toyota Factory", location: "Malaysia", type: "Manufacturing" },
  { title: "5-Star Hotels", location: "Malaysia", type: "Hospitality" },
  { title: "Factory Works", location: "Malaysia", type: "Industrial" },
  { title: "Showrooms", location: "Malaysia", type: "Retail" },
  { title: "Office Work", location: "Malaysia", type: "Corporate" },
  { title: "IT Company Work", location: "Malaysia", type: "Technology" },
]

export default function Jobs() {
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
    <section id="jobs" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Job Opportunities in Malaysia</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore exciting career opportunities while studying abroad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className={`${isVisible ? "slide-up" : "opacity-0"} transition-all duration-700 group`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{job.title}</h3>

                <div className="flex items-center gap-2 text-foreground/60 mb-4 flex-grow">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{job.location}</span>
                </div>

                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
