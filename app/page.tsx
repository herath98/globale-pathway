"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AdvancedCarousel from "@/components/advanced-carousel"
import Link from "next/link"
import { ChevronRight, Globe, Users, Briefcase, Award } from "lucide-react"
import useReveal from "@/hooks/use-reveal"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const carouselItems = [
       {
      type: "video",
      media: "/vi.mp4",
      title: "Study in Malaysia",
      subtitle: "Access top universities and world-class education opportunities",
    },
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
      title: "Your Global Education Journey",
      subtitle: "Expert guidance for studying abroad with specialized Malaysia pathways",
    },
 
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop",
      title: "Career Success Awaits",
      subtitle: "Job placement and career guidance for your future",
    },
  ]

  useReveal()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main
      className="w-full overflow-hidden relative"
      style={{
        ["--secondary" as any]: "#0b6623",
        ["--secondary-foreground" as any]: "#ffffff",
      } as any}
    >
      <Header />

      {/* Hero Carousel Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[0] = el
        }}
        data-reveal
        className="relative h-screen page-transition"
        style={{ "--reveal-delay": "0s" } as any}
      >
        <AdvancedCarousel
          items={carouselItems}
          autoPlay={true}
          interval={9000}
          transitionDuration={3600}
          easing="cubic-bezier(0.22, 1, 0.36, 1)"
        />
        <div className="absolute inset-0 pt-20 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <div
              data-reveal
              className="flex items-end mt-[30vh] gap-4 justify-center flex-wrap pointer-events-auto"
              style={{ "--reveal-delay": "0.6s" } as any}
            >
              <Link
                href="/services"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 card-hover hover-lift"
              >
                Explore Services <ChevronRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg font-semibold transition card-hover hover-lift"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[1] = el
        }}
        data-reveal
        className="py-20 bg-white"
        style={{ "--reveal-delay": "0.1s" } as any}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="text-center mb-16" style={{ "--reveal-delay": "0.12s" } as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-animate reveal-text">
              Why Choose GLOBLE PATHWAY?
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto text-fade-in-up reveal-fade"
              style={{ animationDelay: "0.2s" }}
            >
              We are committed to making your international education dreams a reality with expert guidance and support.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Network",
                description: "Connected with 500+ universities worldwide",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "10+ years of experience in education consulting",
              },
              {
                icon: Briefcase,
                title: "Career Support",
                description: "Job placement and career guidance services",
              },
              {
                icon: Award,
                title: "Success Rate",
                description: "95% student placement success rate",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="text-center p-6 rounded-lg card-hover card-scale card-glow reveal-card stagger-item hover-lift"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center scale-in icon-float"
                      style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                    >
                      <Icon size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-fade-in-up reveal-text"
                    style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-fade-in-up reveal-fade"
                    style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
                  >
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[2] = el
        }}
        data-reveal
        className="py-20 bg-card"
        style={{ "--reveal-delay": "0.08s" } as any}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="text-center mb-16" style={{ "--reveal-delay": "0.12s" } as any}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-animate reveal-text">Our Services</h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto text-fade-in-up reveal-fade"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive solutions for your international education journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Language & Foundation Training",
                description: "Prepare for international studies with our comprehensive language programs",
                image: "https://images.unsplash.com/photo-1427504494785-cdba58dadff6?w=400&h=300&fit=crop",
              },
              {
                title: "University Placement",
                description: "Get admitted to top universities with our expert guidance and support",
                image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
              },
              {
                title: "Career Guidance",
                description: "Build your career with personalized guidance and job placement support",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-lg overflow-hidden shadow-lg card-hover card-scale card-bounce-in reveal-card stagger-item hover-lift"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 image-zoom-in"
                    style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 image-overlay-fade" />
                </div>
                <div className="p-6 bg-white">
                  <h3
                    className="text-xl font-bold mb-2 text-fade-in-up reveal-text"
                    style={{ animationDelay: `${i * 0.15 + 0.3}s` }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground mb-4 text-fade-in-up reveal-fade"
                    style={{ animationDelay: `${i * 0.15 + 0.4}s` }}
                  >
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition"
                  >
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[3] = el
        }}
        data-reveal
        className="py-20 bg-primary text-white"
        style={{ "--reveal-delay": "0.06s" } as any}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Students Helped" },
              { number: "500+", label: "Partner Universities" },
              { number: "50+", label: "Countries Covered" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="scale-in bounce-up reveal-stat stagger-item"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 pulse-glow text-shimmer counter-up">
                  {stat.number}
                </div>
                <div
                  className="text-lg text-white/80 text-fade-in-up reveal-fade"
                  style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current[4] = el
        }}
        data-reveal
        className="py-20 bg-white"
        style={{ "--reveal-delay": "0.08s" } as any}
      >
        <div className="max-w-4xl mx-auto text-center px-4 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-animate reveal-text">
            Ready to Start Your Journey?
          </h2>
          <p
            className="text-xl text-muted-foreground mb-8 text-fade-in-up reveal-fade"
            style={{ animationDelay: "0.2s" }}
          >
            Connect with our expert consultants today and take the first step towards your global education.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition card-hover scale-in hover-lift"
            style={{ animationDelay: "0.4s" }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes revealText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes revealFade {
          from {
            opacity: 0;
            filter: blur(4px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes revealCard {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes hoverLift {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-8px);
          }
        }

        @keyframes counterUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes staggerItem {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .reveal-text {
          animation: revealText 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .reveal-fade {
          animation: revealFade 0.8s ease-out;
        }

        .reveal-card {
          animation: revealCard 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .icon-float {
          animation: iconFloat 3s ease-in-out infinite;
        }

        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .counter-up {
          animation: counterUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stagger-item {
          animation: staggerItem 0.6s ease-out;
        }
      `}</style>
    </main>
  )
}