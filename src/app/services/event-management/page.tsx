import Link from 'next/link'
import { Calendar, Users, Sparkles, Award, CheckCircle, ArrowLeft, TrendingUp, Target } from 'lucide-react'

export default function EventManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop" 
            alt="Event management"
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
              <Calendar className="w-12 h-12" />
            </div>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold">Event Management</h1>
          </div>
          <p className="text-xl max-w-3xl">
            From concept to execution, we create memorable sports events that engage audiences, 
            achieve objectives, and deliver exceptional experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-gray-900">What We Do</h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're organizing a corporate tournament, charity sports event, brand activation, 
            or fan experience, we handle every detail to ensure your event is successful, memorable, 
            and stress-free for you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Corporate Events</h3>
              <p className="text-gray-700 text-sm">
                Team-building tournaments, company sports days, and executive golf outings 
                that strengthen teams and boost morale.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Sparkles className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Brand Activations</h3>
              <p className="text-gray-700 text-sm">
                Product launches, sponsorship activations, and experiential marketing that 
                connect brands with sports audiences.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Award className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Charity Events</h3>
              <p className="text-gray-700 text-sm">
                Fundraising tournaments, celebrity matches, and community initiatives that 
                make a difference.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Calendar className="w-10 h-10 text-blue-700 mb-4" />
              <h3 className="font-bold text-lg mb-2">Fan Experiences</h3>
              <p className="text-gray-700 text-sm">
                Meet-and-greets, autograph sessions, and exclusive fan engagement events 
                that create lasting memories.
              </p>
            </div>
          </div>
        </section>

        {/* Full-Service Management */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">Full-Service Event Management</h2>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              We handle everything from initial planning to post-event follow-up, so you can focus 
              on your attendees and objectives.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-bold mb-3 text-blue-700">Planning & Strategy</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Event concept development</li>
                  <li>• Budget planning & management</li>
                  <li>• Timeline creation</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-bold mb-3 text-blue-700">Logistics & Operations</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Venue sourcing & negotiation</li>
                  <li>• Equipment rental & setup</li>
                  <li>• Catering coordination</li>
                  <li>• Transportation & parking</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-bold mb-3 text-blue-700">Staffing & Safety</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Staff & volunteer management</li>
                  <li>• Security planning</li>
                  <li>• Medical support coordination</li>
                  <li>• Safety protocols</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-bold mb-3 text-blue-700">Marketing & Promotion</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Event branding & design</li>
                  <li>• Social media campaigns</li>
                  <li>• Ticket sales & registration</li>
                  <li>• Media outreach & PR</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-bold mb-3 text-blue-700">Content & Media</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Photography & videography</li>
                  <li>• Live streaming setup</li>
                  <li>• Social media coverage</li>
                  <li>• Post-event content</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-bold mb-3 text-blue-700">Follow-Up & Reporting</h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Post-event surveys</li>
                  <li>• Performance metrics</li>
                  <li>• Thank-you communications</li>
                  <li>• ROI analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We learn about your objectives, audience, budget, timeline, and vision for the event.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                We develop a comprehensive plan with creative concepts, detailed timelines, and clear budgets.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                We manage every detail on event day, ensuring smooth operations and memorable experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Follow-Up</h3>
              <p className="text-gray-600 text-sm">
                We provide post-event reports, gather feedback, and measure success against your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-gray-900">Why Choose Pisca for Events?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Attention to Detail</h3>
                  <p className="text-gray-700">
                    We sweat the small stuff so you don't have to. Every element is carefully planned 
                    and executed to perfection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Creative Solutions</h3>
                  <p className="text-gray-700">
                    We bring fresh ideas and innovative approaches to make your event stand out and 
                    deliver memorable experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Budget Conscious</h3>
                  <p className="text-gray-700">
                    We maximize your budget with smart vendor negotiations and efficient resource 
                    allocation without compromising quality.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Flexible & Responsive</h3>
                  <p className="text-gray-700">
                    Need quick decisions or last-minute changes? We're agile and responsive to your 
                    evolving needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Proven Systems</h3>
                  <p className="text-gray-700">
                    We use tested processes and industry best practices to ensure consistent, 
                    professional results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Full Transparency</h3>
                  <p className="text-gray-700">
                    Clear communication, regular updates, and honest reporting throughout the entire 
                    event lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Sizes */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-center">Events of All Sizes</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            From intimate gatherings to large-scale tournaments, we tailor our services to your needs and budget.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center text-gray-900">
              <Target className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <p className="font-bold text-3xl text-blue-700 mb-2">10-50</p>
              <p className="text-gray-600 font-semibold">Intimate Events</p>
              <p className="text-gray-600 text-sm mt-2">Perfect for exclusive experiences and VIP gatherings</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center text-gray-900">
              <Users className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <p className="font-bold text-3xl text-blue-700 mb-2">50-200</p>
              <p className="text-gray-600 font-semibold">Mid-Size Events</p>
              <p className="text-gray-600 text-sm mt-2">Ideal for corporate tournaments and brand activations</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center text-gray-900">
              <TrendingUp className="w-12 h-12 text-blue-700 mx-auto mb-3" />
              <p className="font-bold text-3xl text-blue-700 mb-2">200+</p>
              <p className="text-gray-600 font-semibold">Large-Scale Events</p>
              <p className="text-gray-600 text-sm mt-2">Comprehensive management for major tournaments</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4 text-gray-900">Let's Create Something Amazing</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have an event idea? Whether it's fully formed or just a concept, we'd love to discuss how 
            we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Start Planning Your Event
            </Link>
            <Link 
              href="/events" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-500 transition border-2 border-white"
            >
              View Our Event Portfolio
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Email us directly at: events@piscasports.com
          </p>
        </section>
      </div>
    </div>
  )
}
