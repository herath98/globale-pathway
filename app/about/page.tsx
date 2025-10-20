"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="About us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 page-transition">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 slide-up">About GLOBLE PATHWAY International</h1>
          <p className="text-xl text-gray-100 slide-up" style={{ animationDelay: "0.1s" }}>
            Transforming lives through global education
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Our mission"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="slide-in-right">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At GLOBLE PATHWAY International, we believe that education is the key to unlocking unlimited potential.
                Our mission is to guide students from around the world towards achieving their academic and career
                aspirations through quality education abroad.
              </p>
              <p className="text-lg text-muted-foreground">
                We specialize in helping students navigate the complex process of studying abroad, with particular
                expertise in Malaysian universities and educational pathways.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-in-left" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To be the leading global education consultancy, recognized for our commitment to student success and our
                innovative approach to international education.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a world where geographical boundaries don't limit educational opportunities, and every
                student has access to world-class education and career guidance.
              </p>
            </div>
            <div className="slide-in-right" style={{ animationDelay: "0.1s" }}>
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop"
                alt="Our vision"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-card p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service delivery",
                },
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of honesty and transparency",
                },
                {
                  title: "Student-Centric",
                  description: "Every decision we make is guided by what's best for our students",
                },
              ].map((value, i) => (
                <div key={i} className="text-center slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2015, GLOBLE PATHWAY International was born from a simple belief: education should be
              accessible to everyone, regardless of geographical boundaries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="slide-in-left">
              <p className="text-lg text-muted-foreground mb-4">
                Our founder, Sarah Johnson, witnessed firsthand how difficult it was for talented students to access
                quality education abroad. She spent years researching the best universities and building relationships
                with educational institutions across Malaysia and beyond.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've helped over 5,000 students achieve their dreams of studying abroad, with a 95% success rate
                in university placements and career opportunities.
              </p>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
              },
              {
                name: "Michael Chen",
                role: "Education Consultant",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Emma Williams",
                role: "Career Advisor",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
              },
            ].map((member, i) => (
              <div key={i} className="text-center scale-in card-hover" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-4 overflow-hidden rounded-lg h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, number: "5000+", label: "Students Helped", color: "text-primary" },
              { icon: Target, number: "95%", label: "Success Rate", color: "text-accent" },
              { icon: Heart, number: "500+", label: "Partner Universities", color: "text-primary" },
            ].map((achievement, i) => {
              const Icon = achievement.icon
              return (
                <div
                  key={i}
                  className="text-center scale-in card-hover p-6 rounded-lg"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon size={48} className={`mx-auto mb-4 ${achievement.color} pulse-glow`} />
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg text-muted-foreground">{achievement.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
