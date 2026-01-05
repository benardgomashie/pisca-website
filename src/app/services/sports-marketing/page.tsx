import Link from 'next/link'
import { Briefcase, Target, TrendingUp, Users, Megaphone, BarChart, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react'

export default function SportsMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <Briefcase className="w-12 h-12" />
            </div>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold">Sports Marketing</h1>
          </div>
          <p className="text-xl max-w-3xl">
            Strategic marketing solutions that connect brands with sports audiences through authentic 
            partnerships, innovative campaigns, and measurable results.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6">What We Offer</h2>
          <p className="text-lg text-gray-700 mb-8">
            In today's competitive marketplace, sports provide a powerful platform for brands to connect 
            with passionate audiences. We help brands leverage the emotion, excitement, and authenticity 
            of sports to build meaningful connections and drive business results.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Target className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Sponsorship Strategy</h3>
              <p className="text-gray-700 text-sm">
                Expert guidance on selecting the right athletes, teams, or events to sponsor for 
                maximum brand alignment and ROI.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Brand Partnerships</h3>
              <p className="text-gray-700 text-sm">
                Connecting brands with athletes and sports properties for authentic, mutually 
                beneficial partnerships.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Megaphone className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Campaign Development</h3>
              <p className="text-gray-700 text-sm">
                Creating compelling sports marketing campaigns that resonate with target audiences 
                and drive engagement.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <TrendingUp className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Social Media Management</h3>
              <p className="text-gray-700 text-sm">
                Strategic social media planning and execution to build communities and amplify 
                sports marketing messages.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Sparkles className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Content Creation</h3>
              <p className="text-gray-700 text-sm">
                High-quality content production including photography, video, graphics, and written 
                materials for sports campaigns.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <BarChart className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Performance Analytics</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive tracking and reporting to measure campaign effectiveness and 
                demonstrate ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">Our Marketing Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Research & Insights</h3>
                <p className="text-gray-600 text-sm">
                  We analyze your brand, audience, and objectives to develop data-driven strategies
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Strategic Planning</h3>
                <p className="text-gray-600 text-sm">
                  We create customized marketing plans with clear goals, tactics, and KPIs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Campaign Execution</h3>
                <p className="text-gray-600 text-sm">
                  We implement campaigns with precision, managing all details and deliverables
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Optimize & Report</h3>
                <p className="text-gray-600 text-sm">
                  We monitor performance, optimize in real-time, and provide comprehensive reporting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Breakdown */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8">Comprehensive Marketing Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">For Brands</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Athlete Endorsements</p>
                    <p className="text-gray-600 text-sm">Connect with the right athletes for your brand values and target audience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Event Sponsorships</p>
                    <p className="text-gray-600 text-sm">Identify and activate sponsorship opportunities at sports events</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Brand Activations</p>
                    <p className="text-gray-600 text-sm">Create immersive experiences that bring your brand to life in sports settings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Content Partnerships</p>
                    <p className="text-gray-600 text-sm">Collaborate with athletes on branded content that engages audiences</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">For Athletes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Personal Branding</p>
                    <p className="text-gray-600 text-sm">Develop and strengthen your personal brand to attract sponsors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Social Media Growth</p>
                    <p className="text-gray-600 text-sm">Strategic content and engagement to build your following and influence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Sponsorship Acquisition</p>
                    <p className="text-gray-600 text-sm">Connect you with brands seeking authentic athlete partnerships</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Content Strategy</p>
                    <p className="text-gray-600 text-sm">Plan and create content that showcases your personality and attracts partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8">Why Choose Pisca for Sports Marketing?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Authentic Connections</h3>
              <p className="text-gray-700">
                We prioritize genuine partnerships that make sense for both brands and athletes, 
                ensuring authenticity that resonates with audiences.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Data-Driven Strategies</h3>
              <p className="text-gray-700">
                Our campaigns are built on research, analytics, and proven strategies—not just 
                gut feelings or trends.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Creative Excellence</h3>
              <p className="text-gray-700">
                We combine strategic thinking with creative execution to produce campaigns that 
                stand out and drive results.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Modern Tools</h3>
              <p className="text-gray-700">
                We leverage the latest digital marketing tools, social platforms, and analytics 
                to maximize campaign effectiveness.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Transparent Reporting</h3>
              <p className="text-gray-700">
                Clear, honest communication about campaign performance with detailed metrics 
                and actionable insights.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Flexible Solutions</h3>
              <p className="text-gray-700">
                We tailor our services to your budget and goals, whether you need a full campaign 
                or specific support.
              </p>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-center">Industries We Serve</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            We help brands across various industries leverage sports marketing to reach their goals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Sports Apparel
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Nutrition & Fitness
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Technology
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Automotive
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Financial Services
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Consumer Goods
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              Healthcare
            </div>
            <div className="bg-white p-4 rounded-lg text-center font-semibold">
              And More
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4">Ready to Elevate Your Sports Marketing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your brand connect with sports audiences and achieve 
            your marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-500 transition border-2 border-white"
            >
              Explore All Services
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Email us directly at: partnerships@piscasports.com
          </p>
        </section>
      </div>
    </div>
  )
}
