"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin, DollarSign, TrendingUp } from "lucide-react"

export default function Jobs() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="Jobs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 page-transition">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 slide-up">Career Opportunities in Malaysia</h1>
          <p className="text-xl text-gray-100 slide-up" style={{ animationDelay: "0.1s" }}>
            Explore exciting job opportunities after your studies
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Featured Job Opportunities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Manufacturing Engineer",
                company: "Toyota Manufacturing Malaysia",
                location: "Selangor, Malaysia",
                salary: "RM 4,500 - RM 6,500",
                description:
                  "Join Toyota's state-of-the-art manufacturing facility. Work on cutting-edge automotive technology and production processes.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
              },
              {
                title: "Hotel Manager",
                company: "Luxury Hotels Group",
                location: "Kuala Lumpur, Malaysia",
                salary: "RM 5,000 - RM 7,500",
                description:
                  "Manage operations at 5-star hotels. Lead teams and ensure exceptional guest experiences in Malaysia's hospitality sector.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
              },
              {
                title: "IT Systems Administrator",
                company: "Tech Solutions Inc.",
                location: "Cyberjaya, Malaysia",
                salary: "RM 4,000 - RM 6,000",
                description:
                  "Manage IT infrastructure and systems. Work with latest technologies in Malaysia's thriving tech hub, Cyberjaya.",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
              },
              {
                title: "Business Analyst",
                company: "Global Finance Corp",
                location: "Kuala Lumpur, Malaysia",
                salary: "RM 5,500 - RM 8,000",
                description:
                  "Analyze business processes and drive strategic initiatives. Work with international finance teams in Malaysia's financial hub.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="bg-card rounded-lg overflow-hidden card-hover card-scale"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={job.image || "/placeholder.svg"}
                    alt={job.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <p className="text-primary font-semibold mb-2">{job.company}</p>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign size={18} />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition font-semibold card-hover">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Growing Industries in Malaysia</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Manufacturing",
                icon: "🏭",
                description: "Automotive, electronics, and industrial manufacturing",
              },
              {
                name: "Technology",
                icon: "💻",
                description: "Software development, IT services, and digital innovation",
              },
              { name: "Hospitality", icon: "🏨", description: "Hotels, tourism, and hospitality management" },
              { name: "Finance", icon: "💰", description: "Banking, finance, and investment services" },
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-lg text-center card-hover bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Insights Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Salary & Career Growth</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "Entry Level",
                salary: "RM 3,500 - RM 4,500",
                growth: "20-30% annually",
                experience: "0-2 years",
              },
              { role: "Mid Level", salary: "RM 5,000 - RM 7,500", growth: "15-25% annually", experience: "2-5 years" },
              {
                role: "Senior Level",
                salary: "RM 8,000 - RM 12,000+",
                growth: "10-20% annually",
                experience: "5+ years",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg text-center scale-in card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <DollarSign size={40} className="mx-auto mb-4 text-primary pulse-glow" />
                <h3 className="text-2xl font-bold mb-4">{item.role}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{item.salary}</p>
                <p className="text-muted-foreground mb-2">Growth: {item.growth}</p>
                <p className="text-sm text-muted-foreground">Experience: {item.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Our Career Support Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Resume Building",
                description:
                  "Professional resume preparation tailored for Malaysian employers and international standards",
              },
              {
                title: "Interview Coaching",
                description: "Mock interviews and preparation for top companies and industries",
              },
              {
                title: "Job Matching",
                description: "Personalized job recommendations based on your profile and career goals",
              },
              {
                title: "Networking Events",
                description: "Connect with employers, recruiters, and industry professionals",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-lg card-hover slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <TrendingUp size={32} className="text-primary mb-4 scale-in" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 slide-up">
          <h2 className="text-4xl font-bold mb-6">Start Your Career Journey</h2>
          <p className="text-xl mb-8 text-white/90">
            We help you not just get admitted, but also secure your dream job after graduation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition card-hover"
          >
            Get Career Guidance
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
