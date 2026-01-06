import { BookOpen, TrendingUp, Users, Calendar } from 'lucide-react'

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative -mt-16 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&h=600&fit=crop" 
            alt="Insights"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Insights & Perspectives</h1>
          <p className="text-xl">Industry Trends, Analysis & Thought Leadership</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-gray-900">Coming Soon</h2>
          <p className="text-lg text-gray-700 mb-4">
            We're building a comprehensive resource hub featuring industry insights, sports management 
            trends, athlete success stories, and expert perspectives on the evolving landscape of 
            African sports.
          </p>
          <p className="text-lg text-gray-700">
            Check back soon for in-depth articles, market analysis, and thought leadership content 
            from the Pisca team.
          </p>
        </section>

        {/* What's Coming */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">What to Expect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Industry Trends</h3>
              <p className="text-gray-700">
                Analysis of emerging trends in sports management, marketing, and athlete representation
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Success Stories</h3>
              <p className="text-gray-700">
                Profiles and case studies of athletes who are making their mark in the sports world
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Event Highlights</h3>
              <p className="text-gray-700">
                Recaps and insights from major sports events, tournaments, and industry gatherings
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Expert Perspectives</h3>
              <p className="text-gray-700">
                Thought leadership on sports business, athlete development, and career management
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Want to be notified when we publish new insights? Drop us a line and we'll keep you in the loop.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  )
}
