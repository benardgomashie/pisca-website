import Link from 'next/link'
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-xl mb-4">PISCA</h3>
            <p className="text-sm text-gray-300 mb-4 font-semibold">
              Unleashing Potential
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Empowering Africa's sports talent through professional representation,
              world-class events, and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/piscasports" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-green-400 transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/piscasports" target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-400 transition" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/piscasports" target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-400 transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/pisca-sports" target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-400 transition" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-green-400 transition">About Us</Link></li>
              <li><Link href="/athletes" className="text-gray-400 hover:text-green-400 transition">Athletes</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-green-400 transition">Events</Link></li>
              <li><Link href="/insights" className="text-gray-400 hover:text-green-400 transition">Insights</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-green-400 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/athlete-representation" className="text-gray-400 hover:text-green-400 transition">Athlete Representation</Link></li>
              <li><Link href="/services/event-management" className="text-gray-400 hover:text-green-400 transition">Event Management</Link></li>
              <li><Link href="/services/sports-marketing" className="text-gray-400 hover:text-green-400 transition">Sports Marketing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@piscasports.com" className="hover:text-green-400 transition">
                  info@piscasports.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>[Your Phone Number]</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>[Your City, Country]</span>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="font-semibold mb-2">Specialized Contacts:</p>
              <p className="text-gray-400 text-xs">athletes@piscasports.com</p>
              <p className="text-gray-400 text-xs">events@piscasports.com</p>
              <p className="text-gray-400 text-xs">partnerships@piscasports.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Pisca Sports Management & Agency. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link>
          </div>
          <p className="mt-2 text-xs">Designed with passion for African sports excellence.</p>
        </div>
      </div>
    </footer>
  )
}
