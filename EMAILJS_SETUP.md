# EmailJS Integration Setup Guide

This guide will help you set up EmailJS for the Morocco Beyond inquiry form.

## Overview

The inquiry form now uses EmailJS to send emails directly to your Gmail account without requiring a custom domain or backend API routes.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" in the top right corner
3. Sign up using:
   - Google account (recommended), or
   - Email and password
4. Verify your email address if signing up with email
5. Complete the onboarding process

## Step 2: Get Your EmailJS Credentials

### Public Key
1. After signing in, go to the [Account page](https://www.emailjs.com/account)
2. Copy your **Public Key** from the "Public Key" section
   - The key will look like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Service ID
1. Go to the [Email Services page](https://www.emailjs.com/account/email-services)
2. Click "Add New Service"
3. Select "Gmail" (recommended for your use case)
4. Click "Connect Service"
5. Authorize EmailJS to access your Gmail account
6. Copy the **Service ID** from the service list
   - The ID will look like: `service_xxxxxxxxx`

### Template ID
1. Go to the [Email Templates page](https://www.emailjs.com/account/templates)
2. Click "Create New Template"
3. Fill in the template details:
   - **Template Name:** Morocco Beyond Inquiry
   - **Subject:** New Morocco Tour Inquiry from {{from_name}}
   - **To Email:** Yassine.elyamani.sg@gmail.com
4. Add the following template variables in the email body:

```html
<h2>New Morocco Tour Inquiry</h2>

<p><strong>Full Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Tour Interested In:</strong> {{tour}}</p>
<p><strong>Travel Dates:</strong> {{travel_dates}}</p>
<p><strong>Number of Travelers:</strong> {{travelers}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Morocco Beyond - Luxury Travel Curated</em></p>
```

5. Click "Save Template"
6. Copy the **Template ID** from the template list
   - The ID will look like: `template_xxxxxxxxx`

## Step 3: Add EmailJS Credentials to Vercel Environment Variables

### Option A: Using Vercel Dashboard (Recommended for Production)

1. Go to your Vercel project dashboard
2. Click on the "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Add the following variables:

   - **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - **Value:** Paste your EmailJS Public Key
   - **Environment:** Select "Production" (and optionally "Preview" and "Development")

   - **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - **Value:** Paste your EmailJS Service ID
   - **Environment:** Select "Production" (and optionally "Preview" and "Development")

   - **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - **Value:** Paste your EmailJS Template ID
   - **Environment:** Select "Production" (and optionally "Preview" and "Development")

5. Click "Save" for each variable
6. **Redeploy your application** for the environment variables to take effect

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production

# When prompted, paste each respective key

# Redeploy
vercel --prod
```

### Option C: Using .env.local for Local Development

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Important:** Never commit `.env.local` to version control. Add it to `.gitignore`.

## Step 4: Test Email Delivery Locally

1. Make sure your `.env.local` file has the EmailJS credentials
2. Start your development server:
   ```bash
   npm run dev
   ```
3. Navigate to the contact form on your local site
4. Fill out the form with test data
5. Submit the form
6. Check your email at `Yassine.elyamani.sg@gmail.com`
7. You should receive the inquiry email

## Step 5: Test Email Delivery in Production

1. Deploy your application to Vercel (if not already deployed)
2. Make sure all EmailJS environment variables are set in Vercel
3. Navigate to your production site
4. Fill out and submit the contact form
5. Check your email for the inquiry

## Email Template Features

The email template includes:
- **Subject:** "New Morocco Tour Inquiry from {name}"
- **All form fields** clearly displayed:
  - Full Name
  - Email
  - Tour Interested In
  - Travel Dates
  - Number of Travelers
  - Message
- **Branding footer** with Morocco Beyond

## Troubleshooting

### Email not sending

1. Check that all EmailJS environment variables are set correctly
2. Check the browser console for error messages
3. Verify your EmailJS service is connected to Gmail
4. Verify your template has all required variables
5. Check your EmailJS dashboard for sending history

### API key errors

- Make sure you copied the entire Public Key
- Ensure the environment variable names are exactly:
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- Redeploy after adding environment variables

### Template errors

- Ensure your template has all the variables used in the code:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{tour}}`
  - `{{travel_dates}}`
  - `{{travelers}}`
  - `{{message}}`
- Check that the "To Email" is set to your Gmail address

### Rate limits

- EmailJS free tier: 200 emails per month
- If you exceed limits, consider upgrading your plan
- Check your usage at [https://www.emailjs.com/account/usage](https://www.emailjs.com/account/usage)

## Security Best Practices

1. **Never commit API keys** to version control
2. **Use different keys** for development and production
3. **Monitor email usage** to detect abuse
4. **Keep your Gmail account secure** with 2FA

## Monitoring and Analytics

EmailJS provides:
- Email delivery status
- Sending history
- Usage statistics

Access these at [https://www.emailjs.com/account/usage](https://www.emailjs.com/account/usage)

## Support

If you encounter issues:
- EmailJS Documentation: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- EmailJS Status: [https://status.emailjs.com](https://status.emailjs.com)
- EmailJS Support: [https://www.emailjs.com/support](https://www.emailjs.com/support)

## Next Steps

After setup is complete:
1. Test the form thoroughly
2. Monitor email delivery in EmailJS dashboard
3. Set up email filtering if needed
4. Consider adding email automation for auto-replies
5. Set up email templates for different inquiry types

---

**Your inquiry form is now ready to send emails via EmailJS!** 🎉
