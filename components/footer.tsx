import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">GP</span>
              </div>
              <div>
                <div className="font-bold text-lg">GLOBLE PATHWAY</div>
                <div className="text-xs text-accent">International</div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Your trusted partner in global education and career advancement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-primary transition">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Language Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  University Placement
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-primary transition">
                  Job Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>123 Education Street, Global City, GC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@globalpathway.com" className="hover:text-primary transition">
                  info@globalpathway.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-secondary-foreground/80">
            © 2025 GLOBLE PATHWAY International. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-secondary-foreground hover:text-primary transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-secondary-foreground hover:text-primary transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-secondary-foreground hover:text-primary transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
