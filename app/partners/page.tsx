"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Users, Globe, TrendingUp, Award, Handshake } from "lucide-react"

export default function Partners() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
            alt="Partner With Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 page-transition">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 slide-up">Partner With Us</h1>
          <p className="text-xl text-gray-100 slide-up" style={{ animationDelay: "0.1s" }}>
            Expand your reach and connect with talented international students
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Why Partner With GLOBLE PATHWAY International?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We are a leading education consultancy with a proven track record of connecting talented students with
                world-class institutions. Our partnership program is designed to help universities and educational
                institutions expand their international student base.
              </p>
              <p className="text-lg text-muted-foreground">
                With over 5,000 students successfully placed and partnerships with 500+ institutions worldwide, we
                understand what it takes to build successful educational partnerships.
              </p>
            </div>
            <div className="slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Partnership"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Student Referrals",
                description:
                  "Access to our network of qualified students actively seeking admission to international institutions",
              },
              {
                icon: Globe,
                title: "In-Country Marketing",
                description: "Comprehensive marketing support in key markets to increase your institution's visibility",
              },
              {
                icon: Award,
                title: "Screening & Pre-Assessment",
                description: "Pre-vetted students who meet your institution's academic and language requirements",
              },
              {
                icon: TrendingUp,
                title: "Language & Foundation Training",
                description: "Students receive language and foundation training before departure, ensuring readiness",
              },
              {
                icon: Handshake,
                title: "Dedicated Support",
                description: "Dedicated partnership manager to ensure smooth collaboration and student success",
              },
              {
                icon: CheckCircle,
                title: "Ongoing Communication",
                description: "Regular updates on student progress and performance throughout their studies",
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-lg hover:shadow-lg transition-all slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <Icon size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Types of Partnerships</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Universities & Colleges",
                description:
                  "Partner with us to reach talented international students seeking quality higher education",
                features: ["Student recruitment", "Marketing support", "Pre-assessment services"],
              },
              {
                title: "Educational Institutions",
                description: "Connect with institutions looking to expand their international student enrollment",
                features: ["Referral programs", "Screening services", "Student support"],
              },
              {
                title: "Training Centers",
                description: "Collaborate with us to provide language and foundation training to our students",
                features: ["Training programs", "Certification support", "Student placement"],
              },
            ].map((type, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-lg hover:shadow-lg transition-all slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Partnership Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Initial Contact", description: "Reach out to discuss partnership opportunities" },
              { step: "2", title: "Evaluation", description: "We assess mutual fit and partnership potential" },
              { step: "3", title: "Agreement", description: "Formalize partnership terms and conditions" },
              { step: "4", title: "Collaboration", description: "Begin student referrals and ongoing support" },
            ].map((item, i) => (
              <div key={i} className="relative slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 slide-up">Our Partner Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "500+",
                label: "Partner Institutions",
                description: "Universities and colleges worldwide trust us",
              },
              {
                stat: "5000+",
                label: "Students Placed",
                description: "Successful placements across all partner institutions",
              },
              {
                stat: "95%",
                label: "Success Rate",
                description: "High retention and satisfaction rates among partners",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-lg text-center slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-primary mb-2">{story.stat}</div>
                <h3 className="text-xl font-bold mb-2">{story.label}</h3>
                <p className="text-muted-foreground">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 slide-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to become an official partner of GLOBLE PATHWAY International and expand your reach to
            talented international students.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start a Partnership
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
