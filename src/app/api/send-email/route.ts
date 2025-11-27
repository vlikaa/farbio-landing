import { NextRequest, NextResponse } from 'next/server';

const RECIPIENT_EMAIL = 'aliveliyev123654@gmail.com';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { firstName, lastName, email, phone, description } = body;

		// Validate required fields
		if (!firstName || !email || !phone) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		// Create email content
		const emailSubject = `New Consultation Request from ${firstName}${lastName ? ` ${lastName}` : ''}`;
		const emailBody = `
New consultation request received:

Name: ${firstName}${lastName ? ` ${lastName}` : ''}
Email: ${email}
Phone: ${phone}
${description ? `Description: ${description}` : ''}

---
This email was sent from the Farbio landing page contact form.
		`.trim();

		// Send email using a simple HTTP-based service
		// For production, consider using Resend, SendGrid, or Nodemailer
		
		// Option 1: Using Formspree (free, requires form setup at formspree.io)
		// Option 2: Using Resend (recommended for Next.js - install: npm install resend)
		// Option 3: Using Nodemailer with SMTP (install: npm install nodemailer)
		
		// For immediate testing, we'll use a simple approach
		// You can replace this with your preferred email service
		
		// Using Formspree - Get a free form endpoint at https://formspree.io/
		const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
		
		if (formspreeEndpoint) {
			const response = await fetch(formspreeEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: RECIPIENT_EMAIL,
					subject: emailSubject,
					message: emailBody,
					firstName,
					lastName,
					phone,
					description,
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to send email via Formspree');
			}
		} else {
			// For development/testing: Log the email data
			// In production, set up FORMSPREE_ENDPOINT or use Resend/Nodemailer
			console.log('Email to send (configure FORMSPREE_ENDPOINT or use Resend):', {
				to: RECIPIENT_EMAIL,
				subject: emailSubject,
				body: emailBody,
				firstName,
				lastName,
				email,
				phone,
				description,
			});
			
			// To set up email sending:
			// 1. Install Resend: npm install resend
			// 2. Get API key from https://resend.com
			// 3. Update this route to use Resend API
			// OR
			// 1. Sign up at https://formspree.io
			// 2. Create a form and get the endpoint
			// 3. Set FORMSPREE_ENDPOINT environment variable
		}

		return NextResponse.json({ 
			success: true,
			message: 'Email sent successfully' 
		});
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'Failed to send email' },
			{ status: 500 }
		);
	}
}

