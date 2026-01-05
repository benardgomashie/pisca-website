import Link from 'next/link'
import { Trophy, Target, Briefcase, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-6">
            UNLEASHING POTENTIAL
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold">
            Empowering Africa's Sports Talent to Reach New Heights
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100">
            Pisca Sports Management & Agency provides professional representation,
            world-class event management, and strategic marketing solutions for athletes
            and brands across Africa's dynamic sports landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Work With Us
            </Link>
            <Link 
              href="/athletes"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-blue-700 transition"
            >
              Join Our Roster
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Your Partner in Sports Excellence
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Pisca Sports Management & Agency is dedicated to elevating African athletes and 
            sports organizations through professional representation, strategic partnerships, 
            and innovative event solutions. We believe in the immense potential within Africa's 
            sporting talent and work tirelessly to create opportunities that accelerate careers, 
            build brands, and deliver results.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're an athlete seeking professional guidance, a brand looking to connect 
            with Africa's sports community, or an organization planning your next major event, 
            Pisca delivers expertise, integrity, and commitment to your success.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition group">
              <Trophy className="w-12 h-12 text-blue-700 mb-4 group-hover:scale-110 transition" />
              <h3 className="font-montserrat text-xl font-bold mb-4">Athlete Representation</h3>
              <p className="text-gray-600 mb-4">
                Professional management for emerging and established athletes. From contract
                negotiation to brand building, we provide comprehensive support at every stage
                of your career.
              </p>
              <Link href="/services/athlete-representation" className="text-blue-700 font-semibold hover:underline inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition group">
              <Target className="w-12 h-12 text-blue-700 mb-4 group-hover:scale-110 transition" />
              <h3 className="font-montserrat text-xl font-bold mb-4">Event Management</h3>
              <p className="text-gray-600 mb-4">
                World-class sports events that meet international standards. We handle everything
                from concept to execution, delivering memorable experiences for athletes, fans,
                and sponsors.
              </p>
              <Link href="/services/event-management" className="text-blue-700 font-semibold hover:underline inline-flex items-center">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition group">
              <Briefcase className="w-12 h-12 text-blue-700 mb-4 group-hover:scale-110 transition" />
              <h3 className="font-montserrat text-xl font-bold mb-4">Sports Marketing</h3>
              <p className="text-gray-600 mb-4">
                Strategic partnerships that connect athletes and brands authentically. We create
                campaigns that drive engagement, build visibility, and deliver measurable impact.
              </p>
              <Link href="/services/sports-marketing" className="text-blue-700 font-semibold hover:underline inline-flex items-center">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pisca Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Pisca?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Africa-Focused</h3>
                <p className="text-gray-600">Deep understanding of the continent's sports landscape and opportunities</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Holistic Approach</h3>
                <p className="text-gray-600">Representation, events, and marketing under one roof</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Professional Excellence</h3>
                <p className="text-gray-600">Modern strategies and international standards in everything we do</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Integrity First</h3>
                <p className="text-gray-600">Transparent communication, fair practices, and long-term partnerships</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Passionate Commitment</h3>
                <p className="text-gray-600">Genuine dedication to elevating African sports talent and organizations</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovative Solutions</h3>
                <p className="text-gray-600">Contemporary methods and digital-first approach to sports management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-8">
            Ready to Elevate Your Game?
          </h2>
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
