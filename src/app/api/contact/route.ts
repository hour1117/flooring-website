import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, country, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Honeypot check
    if (body._honey) {
      return NextResponse.json({ success: true });
    }

    // In production, send email via Resend, SendGrid, or similar service
    // For now, log to console and return success
    console.log('Contact form submission:', { name, email, phone, company, country, message });

    // TODO: Integrate with email service
    // await sendEmail({
    //   to: 'your-email@company.com',
    //   subject: `New inquiry from ${name}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nCountry: ${country}\n\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
