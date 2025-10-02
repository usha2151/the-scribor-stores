import { NextResponse } from 'next/server'

/**
 * API Route for Contact Form Submission
 * 
 * IMPORTANT: This is a placeholder implementation that returns a success response.
 * 
 * TO IMPLEMENT REAL EMAIL FUNCTIONALITY:
 * 
 * Option 1 - Using SendGrid:
 * 1. Install: npm install @sendgrid/mail
 * 2. Get API key from https://sendgrid.com/
 * 3. Add to .env.local: SENDGRID_API_KEY=your_key_here
 * 4. Uncomment and configure the SendGrid code below
 * 
 * Option 2 - Using Nodemailer:
 * 1. Install: npm install nodemailer
 * 2. Configure SMTP settings in .env.local
 * 3. Implement nodemailer transport
 * 
 * Option 3 - Using a Form Service:
 * - Formspree: https://formspree.io/
 * - Getform: https://getform.io/
 * - Web3Forms: https://web3forms.com/
 */

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData()
    
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const interest = formData.get('interest')
    const message = formData.get('message')
    const file = formData.get('file')
    const consent = formData.get('consent')

    // Basic validation
    if (!name || !email || !interest || !message || consent !== 'true') {
      return NextResponse.json(
        { error: 'Please fill in all required fields and accept the privacy policy.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Log the submission (for development/debugging)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      interest,
      message: message.substring(0, 50) + '...',
      hasFile: !!file,
      timestamp: new Date().toISOString(),
    })

    // PLACEHOLDER: In production, implement actual email sending here
    // Example with SendGrid (uncomment and configure):
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: 'info@thescribor.com', // EDITABLE: Your email
      from: 'noreply@thescribor.com', // EDITABLE: Your verified sender
      replyTo: email,
      subject: `New Contact Form Submission: ${interest}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Interest: ${interest}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    await sgMail.send(msg)
    */

    // PLACEHOLDER: Save to database if needed
    // Example: await db.contacts.create({ name, email, phone, interest, message })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working. Use POST to submit forms.' },
    { status: 200 }
  )
}
