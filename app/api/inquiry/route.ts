import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, tour, travelDates, travelers, message } = body;

    // Validate required fields
    if (!fullName || !email || !tour || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Morocco Tour Inquiry</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #D4AF37 0%, #F4C430 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e0e0e0;
            border-top: none;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #D4AF37;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
            font-size: 16px;
            padding: 10px;
            background: #f9f9f9;
            border-radius: 4px;
          }
          .message {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #D4AF37;
          }
          .footer {
            background: #060506;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
          }
          .footer a {
            color: #D4AF37;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Morocco Tour Inquiry</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">${fullName}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Tour Interested In</div>
            <div class="value">${tour}</div>
          </div>
          <div class="field">
            <div class="label">Travel Dates</div>
            <div class="value">${travelDates || 'Not specified'}</div>
          </div>
          <div class="field">
            <div class="label">Number of Travelers</div>
            <div class="value">${travelers || 'Not specified'}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Morocco Beyond - Luxury Travel Curated</p>
          <p><a href="https://morocco-beyond.com">morocco-beyond.com</a></p>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Morocco Beyond <onboarding@resend.dev>',
      to: ['Yassine.elyamani.sg@gmail.com'],
      subject: `New Morocco Tour Inquiry from ${fullName}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
