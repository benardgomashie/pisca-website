import Link from 'next/link'
import { Trophy, Target, Briefcase, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=600&fit=crop" 
            alt="Our services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Sports Management Solutions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            At Pisca, we offer a full spectrum of sports management services designed to help athletes 
            reach their potential and brands connect with their target audiences. Explore our core 
            service areas below.
          </p>
        </section>

        {/* Service Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Athlete Representation */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-700 hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Athlete Representation</h2>
            <p className="text-gray-600 mb-6">
              Personalized career management for athletes who want dedicated support to maximize 
              their potential on and off the field.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Contract negotiation</li>
              <li>• Career planning & strategy</li>
              <li>• Personal brand development</li>
              <li>• Endorsement opportunities</li>
              <li>• Financial guidance</li>
              <li>• Media training & PR</li>
            </ul>
            <Link 
              href="/services/athlete-representation" 
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Event Management */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-700 hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Event Management</h2>
            <p className="text-gray-600 mb-6">
              From concept to execution, we create memorable sports events that engage audiences 
              and deliver results.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Corporate tournaments</li>
              <li>• Brand activations</li>
              <li>• Charity sports events</li>
              <li>• Fan experiences</li>
              <li>• Venue management</li>
              <li>• Full logistics support</li>
            </ul>
            <Link 
              href="/services/event-management" 
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Sports Marketing */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-700 hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold mb-4">Sports Marketing</h2>
            <p className="text-gray-600 mb-6">
              Strategic marketing solutions that connect brands with sports audiences through 
              authentic partnerships and innovative campaigns.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Sponsorship consulting</li>
              <li>• Brand partnerships</li>
              <li>• Social media management</li>
              <li>• Content creation</li>
              <li>• Influencer collaborations</li>
              <li>• Campaign strategy</li>
            </ul>
            <Link 
              href="/services/sports-marketing" 
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">Why Choose Pisca?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Personalized Approach</h3>
                <p className="text-gray-600 text-sm">
                  Every client receives customized strategies tailored to their unique goals and circumstances.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Transparent Communication</h3>
                <p className="text-gray-600 text-sm">
                  We keep you informed every step of the way with clear, honest updates and feedback.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Modern Expertise</h3>
                <p className="text-gray-600 text-sm">
                  We leverage the latest tools, trends, and technologies to maximize your success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">
                  As a boutique agency, we provide the attention and responsiveness you deserve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                We start with a thorough discussion of your goals, challenges, and vision.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                We develop a customized plan with clear objectives and measurable milestones.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                We implement the strategy with precision, keeping you informed along the way.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                We continuously monitor results and adjust our approach for maximum impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Contact Us Today
          </Link>
        </section>
      </div>
    </div>
  )
}
