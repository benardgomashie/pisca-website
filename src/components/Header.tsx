'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`font-bold text-2xl transition ${
            isScrolled ? 'text-blue-700 hover:text-blue-800' : 'text-white hover:text-blue-200'
          }`}>
            PISCA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`}>Home</Link>
            <Link href="/about" className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`}>About</Link>
            <Link href="/services" className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`}>Services</Link>
            <Link href="/athletes" className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`}>Athletes</Link>
            <Link href="/events" className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`}>Events</Link>
            <Link href="/insights" className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`}>Insights</Link>
            <Link href="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition shadow-lg">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md transition ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 space-y-2 border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            <Link href="/" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/services" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/athletes" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>Athletes</Link>
            <Link href="/events" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link href="/insights" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>Insights</Link>
            <Link href="/contact" className={`block py-2 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
            }`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
