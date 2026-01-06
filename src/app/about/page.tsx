import { Target, Users, Trophy, Briefcase } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&h=600&fit=crop" 
            alt="Team sports"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">About Pisca</h1>
          <p className="text-xl">Where Vision Meets Opportunity</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="text-lg">
              Pisca Sports Management & Agency is a dynamic startup dedicated to revolutionizing 
              the sports management landscape. Founded on the belief that every athlete deserves 
              exceptional representation and every brand deserves authentic sports partnerships, 
              we're building something special.
            </p>
            <p className="text-lg">
              We're not here to tell you about decades of history or countless achievements. 
              Instead, we're focused on the future—your future. As a fresh, energetic agency, 
              we bring innovative thinking, personalized attention, and a genuine commitment to 
              growing alongside our clients.
            </p>
          </div>
        </section>

        {/* Mission & Values Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-blue-700" />
                <h2 className="font-montserrat text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To empower athletes and brands through strategic partnerships, innovative marketing 
                solutions, and unforgettable experiences. We believe in building long-term relationships 
                based on trust, transparency, and mutual success.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-blue-700" />
                <h2 className="font-montserrat text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To become a trusted partner for athletes and brands who value innovation, authenticity, 
                and results. We're building a community where sports, business, and passion intersect 
                to create extraordinary opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">People First</h3>
              <p className="text-gray-600">
                Every decision starts with understanding the needs of our clients. We're building 
                relationships, not just contracts.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                As a startup, we're not bound by "how it's always been done." We embrace fresh 
                ideas and modern strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We may be new, but we're committed to delivering professional, high-quality service 
                that exceeds expectations.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Personalized Attention</h3>
                <p className="text-gray-600 text-sm">
                  We're small enough to know every client by name and dedicated enough to treat 
                  every project like our most important one.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Modern Approach</h3>
                <p className="text-gray-600 text-sm">
                  We leverage the latest digital tools, social media trends, and marketing strategies 
                  to maximize your visibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Transparent Communication</h3>
                <p className="text-gray-600 text-sm">
                  No surprises, no jargon. We keep you informed every step of the way with clear, 
                  honest communication.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Growth Mindset</h3>
                <p className="text-gray-600 text-sm">
                  We're growing, and we want to grow with you. Your success is our success, and 
                  we're invested in the journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-gray-900">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Listen</h3>
              <p className="text-gray-600">
                We start by understanding your goals, challenges, and vision. Every client is unique, 
                and so is every strategy we create.
              </p>
            </div>
            <div>
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Strategize</h3>
              <p className="text-gray-600">
                We develop customized plans that align with your objectives, leveraging our expertise 
                and industry insights.
              </p>
            </div>
            <div>
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Execute</h3>
              <p className="text-gray-600">
                We implement with precision and passion, keeping you informed and involved throughout 
                the entire process.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4 text-gray-900">Ready to Work Together?</h2>
          <p className="text-xl mb-8">
            Let's discuss how Pisca can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
            <a 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-500 transition border-2 border-white"
            >
              Explore Our Services
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
