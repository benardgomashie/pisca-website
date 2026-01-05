import Link from 'next/link'
import { Trophy, Target, Briefcase, CheckCircle, Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white py-24 md:py-40 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Empowering African Sports Excellence</span>
          </div>
          
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 leading-tight">
            UNLEASHING
            <span className="block mt-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              POTENTIAL
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-semibold max-w-3xl mx-auto leading-relaxed">
            Professional sports management, world-class events, and strategic partnerships 
            that elevate careers and build legacies
          </p>
          
          <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-100">
            We represent athletes, manage premier sports events, and create authentic brand 
            connections across Africa's dynamic sports landscape
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Work With Us
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
            <Link 
              href="/athletes"
              className="group bg-blue-600/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transition-all hover:border-white flex items-center justify-center gap-2"
            >
              Join Our Roster
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              Who We Are
            </div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Your Partner in Sports Excellence
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Pisca Sports Management & Agency is dedicated to elevating African athletes and 
                sports organizations through professional representation, strategic partnerships, 
                and innovative event solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in the immense potential within Africa's sporting talent and work 
                tirelessly to create opportunities that accelerate careers, build brands, and 
                deliver results.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-elegant text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl">Our Mission</h3>
              </div>
              <p className="text-blue-50 leading-relaxed">
                To empower athletes and brands through strategic partnerships, innovative marketing, 
                and unforgettable experiences—building long-term success based on trust and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              Our Services
            </div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate athletes, engage audiences, and amplify brands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900">
                Athlete Representation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional management for emerging and established athletes. From contract
                negotiation to brand building, we provide comprehensive support at every stage.
              </p>
              <Link 
                href="/services/athlete-representation" 
                className="inline-flex items-center text-blue-700 font-bold hover:gap-3 gap-2 transition-all group-hover:text-blue-800"
              >
                Learn More 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900">
                Event Management
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                World-class sports events that meet international standards. We handle everything
                from concept to execution, delivering memorable experiences.
              </p>
              <Link 
                href="/services/event-management" 
                className="inline-flex items-center text-blue-700 font-bold hover:gap-3 gap-2 transition-all group-hover:text-blue-800"
              >
                Learn More 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-elegant hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900">
                Sports Marketing
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic partnerships that connect athletes and brands authentically. We create
                campaigns that drive engagement and deliver measurable impact.
              </p>
              <Link 
                href="/services/sports-marketing" 
                className="inline-flex items-center text-blue-700 font-bold hover:gap-3 gap-2 transition-all group-hover:text-blue-800"
              >
                Learn More 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
              </p>
              <Link href="/services/sports-marketing" className="text-blue-700 font-semibold hover:underline inline-flex items-center">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pisca Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              Why Choose Us
            </div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              The Pisca Advantage
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What sets us apart in Africa's sports management landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Africa-Focused</h3>
                  <p className="text-gray-600 leading-relaxed">Deep understanding of the continent's sports landscape and opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Holistic Approach</h3>
                  <p className="text-gray-600 leading-relaxed">Representation, events, and marketing under one roof</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Professional Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">Modern strategies and international standards in everything we do</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Integrity First</h3>
                  <p className="text-gray-600 leading-relaxed">Transparent communication, fair practices, and long-term partnerships</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Passionate Commitment</h3>
                  <p className="text-gray-600 leading-relaxed">Genuine dedication to elevating African sports talent and organizations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="flex gap-4">
                <div className="bg-green-100 p-2 rounded-lg h-fit group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Innovative Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">Contemporary methods and digital-first approach to sports management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4">Athletes & Talent</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Looking for professional representation to take your career to the next level? 
                Let's discuss how we can help you achieve your goals.
              </p>
              <Link 
                href="/athletes" 
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group-hover:gap-3"
              >
                Join Our Roster
                <span className="transition-transform">→</span>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-10 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-4">Brands & Organizations</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Ready to connect with Africa's sports community through authentic partnerships 
                and impactful campaigns? Let's create something amazing together.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group-hover:gap-3"
              >
                Get in Touch
                <span className="transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Athletes</h3>
              <p className="mb-6 text-blue-100">
                Join our growing roster and access opportunities that accelerate your career.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
              >
                Apply for Representation
              </Link>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Brands & Organizations</h3>
              <p className="mb-6 text-blue-100">
                Partner with Pisca to connect with Africa's passionate sports community.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
