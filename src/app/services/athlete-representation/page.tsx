import Link from 'next/link'
import { Trophy, Target, Users, TrendingUp, Shield, Handshake, CheckCircle, ArrowLeft } from 'lucide-react'

export default function AthleteRepresentationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&h=600&fit=crop" 
            alt="Athlete representation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <Trophy className="w-12 h-12" />
            </div>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold">Athlete Representation</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Dedicated career management and personalized support to help athletes maximize their 
            potential on and off the field.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-gray-900">What We Offer</h2>
          <p className="text-lg text-gray-700 mb-8">
            As your dedicated representative, we handle the business side of your career so you can 
            focus on what you do best—performing at the highest level. We provide comprehensive support 
            across all aspects of your professional journey.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Handshake className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Contract Negotiation</h3>
              <p className="text-gray-700 text-sm">
                Expert negotiation to secure favorable terms, competitive compensation, and 
                performance incentives that reflect your true value.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Target className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Career Strategy</h3>
              <p className="text-gray-700 text-sm">
                Strategic planning for short and long-term goals, including team/club selection, 
                contract timing, and career transitions.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <TrendingUp className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Brand Building</h3>
              <p className="text-gray-700 text-sm">
                Personal brand development, social media strategy, and public image management 
                to maximize marketability.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Shield className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Legal Support</h3>
              <p className="text-gray-700 text-sm">
                Access to legal expertise for contract review, dispute resolution, and 
                protection of your rights and interests.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Endorsement Deals</h3>
              <p className="text-gray-700 text-sm">
                Identification and negotiation of sponsorship and endorsement opportunities 
                aligned with your brand and values.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Trophy className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Media Training</h3>
              <p className="text-gray-700 text-sm">
                Professional media training, interview preparation, and crisis communication 
                support to protect your reputation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">Our Representation Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-900">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Understanding You</h3>
                <p className="text-gray-600 text-sm">
                  We learn about your goals, strengths, values, and vision for your career
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-900">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Strategic Planning</h3>
                <p className="text-gray-600 text-sm">
                  We develop a customized roadmap with clear milestones and actionable steps
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-900">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Active Execution</h3>
                <p className="text-gray-600 text-sm">
                  We work tirelessly to secure opportunities and negotiate on your behalf
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-900">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">
                  We're with you every step, adapting strategies as your career evolves
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-gray-900">Why Athletes Choose Pisca</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Personalized Attention</h3>
                  <p className="text-gray-700">
                    You're not just another client on a massive roster. We limit our client base 
                    to ensure every athlete receives dedicated, personalized service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Transparent Communication</h3>
                  <p className="text-gray-700">
                    No surprises, no hidden agendas. We keep you informed every step of the way 
                    with clear, honest communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Modern Approach</h3>
                  <p className="text-gray-700">
                    We understand today's digital landscape and leverage modern tools to maximize 
                    your visibility and marketability.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Long-term Partnership</h3>
                  <p className="text-gray-700">
                    We're invested in your success for the long haul. Your growth is our growth, 
                    and we're committed to building lasting relationships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Proven Expertise</h3>
                  <p className="text-gray-700">
                    Our team brings experience in contract law, marketing, and sports business 
                    to protect and advance your interests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Holistic Support</h3>
                  <p className="text-gray-700">
                    Beyond contracts, we help with financial planning, post-career transitions, 
                    and personal development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Athletes */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-center">Athletes We're Looking For</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            We work with dedicated athletes who are ambitious, professional, and ready to take 
            their careers seriously. If this sounds like you, let's talk.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center text-gray-900">
              <p className="font-semibold">Ambitious</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center text-gray-900">
              <p className="font-semibold">Professional</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center text-gray-900">
              <p className="font-semibold">Coachable</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center text-gray-900">
              <p className="font-semibold">Team-Oriented</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4 text-gray-900">Ready to Take Your Career Further?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your athletic and professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
            <Link 
              href="/athletes" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-500 transition border-2 border-white"
            >
              Learn More About Our Roster
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Email us directly at: athletes@piscasports.com
          </p>
        </section>
      </div>
    </div>
  )
}
