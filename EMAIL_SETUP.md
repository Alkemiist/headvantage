# Contact Form Email Setup Guide

## Overview
Your contact form is now configured to send emails using Resend. Here's how to complete the setup:

## Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Navigate to API Keys in your dashboard
3. Create a new API key
4. Copy the API key (starts with `re_`)

## Step 2: Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

**Important Notes:**
- Replace `your-email@example.com` with the email where you want to receive contact form submissions
- Replace `noreply@yourdomain.com` with a verified domain email (or use the default)
- The `FROM_EMAIL` must be verified in Resend for production use

## Step 3: Verify Your Domain (Production)

For production, you need to verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., `yourdomain.com`)
3. Add the required DNS records
4. Once verified, update `FROM_EMAIL` to use your domain

## Step 4: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email inbox for the notification

## Email Features

The email includes:
- **Professional HTML formatting** with your branding
- **Contact details** (name, email, company, timestamp)
- **Full message content** with proper formatting
- **IP address** for security tracking
- **Next steps** for follow-up
- **Plain text version** for email clients that don't support HTML

## Troubleshooting

### Common Issues:

1. **"Invalid API key" error:**
   - Verify your API key is correct
   - Check that the key starts with `re_`

2. **"Domain not verified" error:**
   - Use a verified domain for `FROM_EMAIL`
   - Or use the default Resend domain for testing

3. **Emails not received:**
   - Check spam folder
   - Verify `CONTACT_EMAIL` is correct
   - Check Resend dashboard for delivery status

### Development vs Production:

- **Development:** Can use any email for testing
- **Production:** Must use verified domains and proper DNS setup

## Alternative: Nodemailer Setup

If you prefer Nodemailer over Resend, you can:

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   npm install @types/nodemailer --save-dev
   ```

2. Configure with your SMTP provider (Gmail, SendGrid, etc.)

3. Replace the Resend code in the API route

## Security Features

Your form already includes:
- ✅ **Honeypot spam protection** (hidden field)
- ✅ **Rate limiting** (5 requests per 15 minutes)
- ✅ **Input validation** with Zod
- ✅ **CSRF protection** (Next.js built-in)
- ✅ **IP tracking** for security

## Next Steps

1. Set up your environment variables
2. Test the form submission
3. Verify your domain for production
4. Consider adding email templates for different types of inquiries
5. Set up email monitoring and analytics

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check your server logs
3. Verify all environment variables are set
4. Test with a simple email first
