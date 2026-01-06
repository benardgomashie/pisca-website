import { UserPlus, Trophy, Sparkles } from 'lucide-react'

export default function AthletesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=1920&h=600&fit=crop" 
            alt="Athletes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Our Athletes</h1>
          <p className="text-xl">Building Our Roster of Champions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-gray-900">The Future Starts Here</h2>
          <p className="text-lg text-gray-700 mb-4">
            As a dynamic new agency, we're actively building relationships with talented athletes 
            who are ready to take their careers to the next level. We're not showcasing a long list 
            of past achievements—we're focused on creating future success stories.
          </p>
          <p className="text-lg text-gray-700">
            Every great agency started with their first client, and we're excited to partner with 
            athletes who share our vision, drive, and commitment to excellence.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">What We Offer Athletes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Personal Representation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contract negotiation</li>
                <li>• Career planning & guidance</li>
                <li>• Financial management support</li>
                <li>• Legal consultation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Brand Building</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Personal brand development</li>
                <li>• Social media strategy</li>
                <li>• Content creation support</li>
                <li>• Public relations</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-gray-900">Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Endorsement deals</li>
                <li>• Sponsorship opportunities</li>
                <li>• Speaking engagements</li>
                <li>• Media appearances</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Pisca */}
        <section className="bg-blue-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold mb-8 text-center text-gray-900">Why Partner With Pisca?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-3 text-blue-700 text-gray-900">Personalized Attention</h3>
                <p className="text-gray-700">
                  You won't get lost in a roster of hundreds. We work closely with each athlete, 
                  providing the individual attention and customized strategies you deserve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-3 text-blue-700 text-gray-900">Hungry & Motivated</h3>
                <p className="text-gray-700">
                  As a startup, we're driven to prove ourselves. Your success is our success, and 
                  we're committed to going the extra mile.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-3 text-blue-700 text-gray-900">Modern Approach</h3>
                <p className="text-gray-700">
                  We understand today's digital landscape. From social media to personal branding, 
                  we know how to maximize your visibility in the modern market.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-gray-900">
                <h3 className="font-semibold text-lg mb-3 text-blue-700 text-gray-900">Transparent Partnership</h3>
                <p className="text-gray-700">
                  Clear communication, honest feedback, and collaborative decision-making. We believe 
                  in building trust through transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Athletes */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-center text-gray-900">Athletes We're Looking For</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We're seeking dedicated athletes who are:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Ambitious</h3>
              <p className="text-sm">Ready to take your career to new heights</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Professional</h3>
              <p className="text-sm">Committed to excellence on and off the field</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Marketable</h3>
              <p className="text-sm">Understanding the value of personal brand</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Team-Oriented</h3>
              <p className="text-sm">Ready to collaborate and grow together</p>
            </div>
          </div>
        </section>

        {/* Sports We Cover */}
        <section className="mb-16">
          <h2 className="font-montserrat text-3xl font-bold mb-6 text-center text-gray-900">Sports We Represent</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
            <p className="text-center text-gray-700 mb-6">
              While we're open to working with talented athletes across various sports, we're particularly 
              focused on:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded font-semibold text-gray-900 text-gray-900">Football/Soccer</div>
              <div className="bg-white p-4 rounded font-semibold text-gray-900 text-gray-900">Basketball</div>
              <div className="bg-white p-4 rounded font-semibold text-gray-900 text-gray-900">Tennis</div>
              <div className="bg-white p-4 rounded font-semibold text-gray-900 text-gray-900">Golf</div>
              <div className="bg-white p-4 rounded font-semibold text-gray-900 text-gray-900">Athletics</div>
              <div className="bg-white p-4 rounded font-semibold text-gray-900 text-gray-900">And More</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="font-montserrat text-3xl font-bold mb-4 text-gray-900">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you're an athlete looking for representation that matches your ambition, 
            we'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Contact Us Today
          </a>
          <p className="mt-6 text-sm opacity-90">
            Email us directly at: athletes@piscasports.com
          </p>
        </section>
      </div>
    </div>
  )
}
