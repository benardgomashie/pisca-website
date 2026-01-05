'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-blue-700 hover:text-blue-800 transition">
            PISCA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 transition">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-700 transition">Services</Link>
            <Link href="/athletes" className="text-gray-700 hover:text-blue-700 transition">Athletes</Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-700 transition">Events</Link>
            <Link href="/insights" className="text-gray-700 hover:text-blue-700 transition">Insights</Link>
            <Link href="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/athletes" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Athletes</Link>
            <Link href="/events" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link href="/insights" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Insights</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
