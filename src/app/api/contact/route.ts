import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, interest, message } = body

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Determine recipient based on interest
    const recipientMap: { [key: string]: string } = {
      'athlete': 'athletes@piscasports.com',
      'event': 'events@piscasports.com',
      'partnership': 'partnerships@piscasports.com',
      'other': 'info@piscasports.com',
    }

    const recipient = recipientMap[interest] || 'info@piscasports.com'

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Pisca Website <onboarding@resend.dev>', // You'll update this with your domain later
      to: [recipient],
      replyTo: email,
      subject: `New Contact Form Submission - ${interest.charAt(0).toUpperCase() + interest.slice(1)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Interest:</strong> ${interest.charAt(0).toUpperCase() + interest.slice(1)}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e40af;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Pisca Sports contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
