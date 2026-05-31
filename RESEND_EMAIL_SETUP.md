# Resend Email Integration Setup Guide

This guide will help you set up Resend email integration for the Morocco Beyond inquiry form.

## Overview

The inquiry form now uses Resend to send real emails to `Yassine.elyamani.sg@gmail.com` when users submit the contact form.

## Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" in the top right corner
3. Sign up using:
   - GitHub account (recommended), or
   - Email and password
4. Verify your email address if signing up with email
5. Complete the onboarding process

## Step 2: Get Your Resend API Key

1. After signing in, go to the [API Keys page](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give your API key a name (e.g., "Morocco Beyond Production")
4. Select the permissions (choose "Full Access" for production)
5. Click "Add"
6. **Important:** Copy the API key immediately - you won't be able to see it again!
   - The key will look like: `re_xxxxxxxxxxxxxxxxxxxxxxxx`

## Step 3: Add API Key to Vercel Environment Variables

### Option A: Using Vercel Dashboard (Recommended for Production)

1. Go to your Vercel project dashboard
2. Click on the "Settings" tab
3. Click on "Environment Variables" in the left sidebar
4. Click "Add New"
5. Add the following variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Paste your Resend API key
   - **Environment:** Select "Production" (and optionally "Preview" and "Development")
6. Click "Save"
7. **Redeploy your application** for the environment variables to take effect

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variable
vercel env add RESEND_API_KEY production

# When prompted, paste your Resend API key

# Redeploy
vercel --prod
```

### Option C: Using .env.local for Local Development

Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
```

**Important:** Never commit `.env.local` to version control. Add it to `.gitignore`.

## Step 4: Verify Your Sending Domain

1. Go to the [Domains page](https://resend.com/domains) in Resend
2. Click "Add Domain"
3. Enter your domain: `morocco-beyond.com` (or your actual domain)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for DNS propagation (usually takes a few minutes to a few hours)
6. Once verified, you can send emails from your domain

**Note:** For testing, you can use Resend's default sending domain (`@resend.dev`) without domain verification.

## Step 5: Test Email Delivery Locally

1. Make sure your `.env.local` file has the `RESEND_API_KEY`
2. Start your development server:
   ```bash
   npm run dev
   ```
3. Navigate to the contact form on your local site
4. Fill out the form with test data
5. Submit the form
6. Check your email at `Yassine.elyamani.sg@gmail.com`
7. You should receive a beautifully formatted HTML email

## Step 6: Test Email Delivery in Production

1. Deploy your application to Vercel (if not already deployed)
2. Make sure the `RESEND_API_KEY` is set in Vercel environment variables
3. Navigate to your production site
4. Fill out and submit the contact form
5. Check your email for the inquiry

## Email Template Features

The email template includes:
- **Gold gradient header** matching the website design
- **Professional styling** with Morocco Beyond branding
- **All form fields** clearly displayed:
  - Full Name
  - Email
  - Tour Interested In
  - Travel Dates
  - Number of Travelers
  - Message
- **Reply-to functionality** - clicking "Reply" will go to the submitter's email
- **Mobile-responsive** design
- **Footer** with branding and website link

## Troubleshooting

### Email not sending

1. Check that `RESEND_API_KEY` is set correctly in environment variables
2. Check the browser console for error messages
3. Check the server logs in Vercel dashboard
4. Verify your API key is valid and has the right permissions

### API key errors

- Make sure you copied the entire API key (starts with `re_`)
- Ensure the environment variable name is exactly `RESEND_API_KEY`
- Redeploy after adding environment variables

### Domain verification issues

- DNS propagation can take time (up to 48 hours)
- Use `@resend.dev` for testing without domain verification
- Check your DNS settings match what Resend provides

### Rate limits

- Resend free tier: 3,000 emails per day
- If you exceed limits, consider upgrading your plan
- Check your usage at [https://resend.com/usage](https://resend/usage)

## Security Best Practices

1. **Never commit API keys** to version control
2. **Use different API keys** for development and production
3. **Rotate API keys** periodically
4. **Monitor email usage** to detect abuse
5. **Set up SPF/DKIM records** for better deliverability

## Monitoring and Analytics

Resend provides:
- Email delivery status
- Open rates
- Click rates
- Bounce handling
- Spam complaints

Access these at [https://resend.com/analytics](https://resend.com/analytics)

## Support

If you encounter issues:
- Resend Documentation: [https://resend.com/docs](https://resend.com/docs)
- Resend Status: [https://status.resend.com](https://status.resend.com)
- Resend Support: [https://resend.com/support](https://resend.com/support)

## Next Steps

After setup is complete:
1. Test the form thoroughly
2. Monitor email delivery in Resend dashboard
3. Set up email forwarding if needed
4. Consider adding email automation for follow-ups
5. Set up email templates for different inquiry types

---

**Your inquiry form is now ready to send real emails!** 🎉
