# Email Setup Instructions

The contact form uses Resend to send emails. Follow these steps to configure it:

## 1. Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address
4. Go to API Keys section: [https://resend.com/api-keys](https://resend.com/api-keys)
5. Create a new API key
6. Copy the API key (it starts with `re_`)

## 2. Add API Key to Your Environment

1. Open the `.env.local` file in the root directory
2. Replace `re_YOUR_API_KEY_HERE` with your actual API key:
   ```
   RESEND_API_KEY=re_abc123your_actual_key_here
   ```
3. Save the file

## 3. Restart Development Server

```bash
npm run dev
```

## 4. Test the Contact Form

1. Go to http://localhost:3000/contact
2. Fill out and submit the form
3. Check your Resend dashboard for sent emails

## 5. Configure Custom Domain (Production)

For production, you'll want to send emails from your own domain:

1. In Resend dashboard, add your domain (piscasports.com)
2. Add the DNS records they provide to your domain registrar
3. Wait for verification (usually a few minutes)
4. Update the `from` field in `/src/app/api/contact/route.ts`:
   ```typescript
   from: 'Pisca Sports <noreply@piscasports.com>',
   ```

## Email Recipients

The form automatically routes to different emails based on the "interest" field:

- **Athlete Representation** → athletes@piscasports.com
- **Event Management** → events@piscasports.com
- **Partnership Opportunities** → partnerships@piscasports.com
- **Other** → info@piscasports.com

Make sure these email addresses exist or update them in `/src/app/api/contact/route.ts`.

## Vercel Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `RESEND_API_KEY` with your API key value
4. Redeploy the application

The environment variable will be automatically used in production.

## Troubleshooting

- **Emails not sending**: Check that `RESEND_API_KEY` is set correctly
- **Server error**: Check Vercel/terminal logs for detailed error messages
- **Wrong sender address**: You must verify your domain or use `onboarding@resend.dev` during testing
