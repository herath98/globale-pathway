"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Clock, Users, BookOpen, Award } from "lucide-react"

export default function Services() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 page-transition">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 slide-up">Our Services</h1>
          <p className="text-xl text-gray-100 slide-up" style={{ animationDelay: "0.1s" }}>
            Comprehensive solutions for your study abroad journey
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {[
              {
                title: "Language & Foundation Training",
                description:
                  "Master English and prepare academically for international studies. Our comprehensive language programs include IELTS/TOEFL preparation, communication skills development, and cultural orientation to ensure you're fully prepared for university-level studies abroad.",
                image: "https://images.unsplash.com/photo-1427504494785-cdba58dadff6?w=600&h=400&fit=crop",
                features: [
                  "IELTS & TOEFL Preparation with expert trainers",
                  "English Language Courses (Beginner to Advanced)",
                  "Academic Foundation Programs",
                  "Communication & Interview Skills Training",
                  "Cultural Preparation for International Life",
                  "One-on-One Tutoring Sessions",
                ],
              },
              {
                title: "Education & Career Guidance",
                description:
                  "Get personalized guidance from our expert consultants who understand the global education landscape. We help you choose the right university, program, and career path based on your goals, academic profile, and aspirations.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
                features: [
                  "Career Counselling & Assessment",
                  "Pathway Planning to Global Universities",
                  "University Selection & Matching",
                  "Program Recommendation Based on Profile",
                  "Application Strategy Development",
                  "Personalized Study Plan Creation",
                ],
              },
              {
                title: "University Placement Services",
                description:
                  "We have partnerships with leading universities in Malaysia and around the world. Our placement services ensure you get admitted to the best institutions that match your profile and aspirations with comprehensive support throughout the process.",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
                features: [
                  "Admission Support for Top Universities",
                  "Document Preparation & Review",
                  "Application Submission Assistance",
                  "Visa Assistance & Guidance",
                  "Travel Arrangements Support",
                  "Accommodation & Settling-In Help",
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-12 items-center slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-3 stagger-item"
                            style={{ animationDelay: `${j * 0.05}s` }}
                          >
                            <CheckCircle className="text-primary flex-shrink-0 scale-in" size={24} />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-lg card-hover">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-96 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="overflow-hidden rounded-lg card-hover">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-96 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-3 stagger-item"
                            style={{ animationDelay: `${j * 0.05}s` }}
                          >
                            <CheckCircle className="text-primary flex-shrink-0 scale-in" size={24} />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We evaluate your profile, goals, and academic background",
              },
              { step: "2", title: "Planning", description: "Create a personalized study and career plan" },
              { step: "3", title: "Application", description: "Guide you through university applications" },
              { step: "4", title: "Support", description: "Ongoing support until placement and beyond" },
            ].map((item, i) => (
              <div key={i} className="relative scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-white p-6 rounded-lg text-center card-hover">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold pulse-glow">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-primary transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Consultants",
                description:
                  "Experienced professionals with deep knowledge of global education and Malaysian universities",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Support",
                description: "From language training to placement, we're with you every step of your journey",
              },
              {
                icon: Clock,
                title: "Timely Guidance",
                description: "Deadline-driven approach ensuring no missed opportunities and smooth transitions",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "95% success rate with thousands of satisfied students placed in top universities",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex gap-4 slide-up card-hover p-4 rounded-lg"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 slide-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to learn more about how we can help you achieve your study abroad goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition card-hover"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
