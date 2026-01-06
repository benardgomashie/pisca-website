'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone?: string
  interest: string
  message: string
}

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 -mt-16 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative text-center mb-12 py-12 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=400&fit=crop" 
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-white">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Let&apos;s Start a Conversation</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8 text-gray-900">
              <h2 className="font-montserrat text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Whether you're an athlete seeking representation, a brand exploring partnership 
                opportunities, or an organization planning an event, we'd love to hear from you.
              </p>
              <p className="text-gray-600 mb-8">
                Our team typically responds within 24 hours during business days.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@piscasports.com" className="text-blue-700 hover:underline">
                      info@piscasports.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">[Your Phone Number]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">[Your City, Country]</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="font-semibold mb-3">Specialized Contacts:</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Athletes:</span> athletes@piscasports.com</p>
                  <p><span className="font-medium">Events:</span> events@piscasports.com</p>
                  <p><span className="font-medium">Partnerships:</span> partnerships@piscasports.com</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 text-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Business Hours</h3>
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM (Your Timezone)</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md text-gray-900">
            <h2 className="font-montserrat text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (Optional)
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="+1234567890"
                />
              </div>

              {/* Interest */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-2">
                  I'm interested in *
                </label>
                <select
                  {...register('interest', { required: 'Please select an option' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="Athlete Representation">Athlete Representation</option>
                  <option value="Event Management">Event Management</option>
                  <option value="Sports Marketing">Sports Marketing / Brand Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white py-4 rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                  <p>Sorry, something went wrong. Please try again or email us directly at info@piscasports.com</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
