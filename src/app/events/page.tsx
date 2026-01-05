import { Calendar, Users, Sparkles, Award } from 'lucide-react'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Events & Experiences</h1>
          <p className="text-xl">Creating Memorable Sports Moments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-montserrat text-3xl font-bold mb-6">Building Something Special</h2>
          <p className="text-lg text-gray-700 mb-4">
            We're not here to show you a portfolio of past mega-events. Instead, we're focused on 
            creating the next generation of sports experiences—starting fresh with innovative ideas 
            and a commitment to excellence.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're planning a corporate tournament, charity sports event, brand activation, 
            or athlete meet-and-greet, we bring energy, creativity, and meticulous planning to every project.
          </p>
        </section>

        {/* Event Services */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-2">Corporate Events</h3>
              <p className="text-gray-600 text-sm">
                Team-building tournaments, company sports days, and executive golf outings
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-2">Brand Activations</h3>
              <p className="text-gray-600 text-sm">
                Product launches, sponsorship activations, and experiential marketing events
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-2">Charity Events</h3>
              <p className="text-gray-600 text-sm">
                Fundraising tournaments, celebrity matches, and community sports initiatives
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-2">Fan Experiences</h3>
              <p className="text-gray-600 text-sm">
                Meet-and-greets, autograph sessions, and exclusive fan engagement events
              </p>
            </div>
          </div>
        </section>

        {/* Our Event Management Process */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  We learn about your objectives, audience, budget, and vision for the event
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planning</h3>
                <p className="text-gray-600 text-sm">
                  We develop a comprehensive event plan with timelines, budgets, and creative concepts
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Execution</h3>
                <p className="text-gray-600 text-sm">
                  We manage every detail on event day, ensuring smooth operations and memorable experiences
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Follow-Up</h3>
                <p className="text-gray-600 text-sm">
                  We provide post-event reports, gather feedback, and measure success against your goals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Capabilities */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">What We Handle</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">Logistics & Operations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Venue sourcing and negotiation</li>
                <li>• Equipment rental and setup</li>
                <li>• Catering coordination</li>
                <li>• Transportation and parking</li>
                <li>• Staff and volunteer management</li>
                <li>• Safety and security planning</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">Marketing & Promotion</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Event branding and design</li>
                <li>• Social media campaigns</li>
                <li>• Ticket sales and registration</li>
                <li>• Media outreach and PR</li>
                <li>• Photography and videography</li>
                <li>• Post-event content creation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center">Why Work With Pisca?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Fresh Perspectives</h3>
              <p className="text-gray-700">
                We bring innovative ideas and modern approaches to event planning, unconstrained 
                by traditional thinking.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Attention to Detail</h3>
              <p className="text-gray-700">
                Small agency means every event gets our full attention. We sweat the small stuff 
                so you don't have to.
              </p>
            </div>
            <div className="border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-700">Flexible & Responsive</h3>
              <p className="text-gray-700">
                Need quick decisions or last-minute changes? We're agile and responsive to your 
                evolving needs.
              </p>
            </div>
          </div>
        </section>

        {/* Event Scales */}
        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="font-montserrat text-2xl font-bold mb-6 text-center">Events of All Sizes</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            From intimate gatherings to large-scale tournaments, we tailor our services to your needs and budget.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="font-bold text-3xl text-blue-700 mb-2">10-50</p>
              <p className="text-gray-600">Intimate Events</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="font-bold text-3xl text-blue-700 mb-2">50-200</p>
              <p className="text-gray-600">Mid-Size Events</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="font-bold text-3xl text-blue-700 mb-2">200+</p>
              <p className="text-gray-600">Large-Scale Events</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have an event idea? Whether it's fully formed or just a concept, we'd love to discuss how 
            we can bring it to life.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Planning Your Event
          </a>
          <p className="mt-6 text-sm opacity-90">
            Email us directly at: events@piscasports.com
          </p>
        </section>
      </div>
    </div>
  )
}
