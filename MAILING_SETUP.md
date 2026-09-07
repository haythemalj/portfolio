# Mailing Configuration Guide

## Overview
This portfolio uses Laravel's Mail system to send contact form messages. The configuration is environment-based and supports multiple mail providers.

## Local Development Setup

### Option 1: Log Driver (Default - No Email Sent)
Perfect for local development. Emails are logged to `storage/logs/laravel.log`.

In `.env`:
```env
MAIL_MAILER=log
```

**Pros:**
- No external service needed
- No credential exposure
- Easy to test

**Check emails:**
```bash
tail -f storage/logs/laravel.log
```

### Option 2: Mailhog (Local Email Testing)
Mailhog is a local email testing tool. Download from: https://github.com/mailhog/MailHog/releases

**Setup:**
1. Download and run MailHog
2. Update `.env`:
```env
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=noreply@portfolio.local
```

3. Visit http://127.0.0.1:8025 to see emails

---

## Production Deployment (Railway)

### Gmail SMTP Setup

⚠️ **IMPORTANT: Do NOT use your regular Gmail password!**

**Step 1: Create Gmail App Password**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification (if not already enabled)
3. Create an App Password for "Mail" on "Windows Computer"
4. Copy the 16-character password

**Step 2: Add to Railway Environment Variables**
In your Railway dashboard, set:
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-16-char-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME=Portfolio
CONTACT_EMAIL=aljanehaythem23@gmail.com
```

`MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_FROM_ADDRESS` must be set as
deployment environment variables. Do not commit real SMTP credentials.

**Step 3: Verify**
Test with:
```bash
php artisan tinker
Mail::raw('Test email', function ($message) {
    $message->to('recipient@example.com')->subject('Test');
});
```

---

## Alternative Mail Providers

### Brevo (Formerly Sendinblue)
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp-relay.brevo.com
MAIL_PORT=587
MAIL_USERNAME=your-email@example.com
MAIL_PASSWORD=your-api-key
MAIL_ENCRYPTION=tls
```

### SendGrid
```env
MAIL_MAILER=sendgrid
SENDGRID_SECRET_KEY=your-sendgrid-api-key
MAIL_FROM_ADDRESS=noreply@yourdomain.com
```

### AWS SES
```env
MAIL_MAILER=ses
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_DEFAULT_REGION=us-east-1
```

---

## Troubleshooting

### Email Not Sending in Production
1. Check Railway logs: `railway logs`
2. Verify Gmail app password was revoked before creating new one
3. Check if SMTP port 587 is blocked by firewall
4. Enable "Less secure app access" (if using regular Gmail, not recommended)

### Email Configuration Issues
- Check `storage/logs/laravel.log` for errors
- Verify `.env.production` has correct MAIL_* variables
- Use `php artisan config:cache` and `php artisan cache:clear` after changes

### Testing Email Locally
```bash
# Test with Tinker
php artisan tinker

# Send test email
Mail::raw('Test message', function ($message) {
    $message->to('test@example.com')->subject('Test');
});
```

---

## Security Best Practices

✅ **DO:**
- Store passwords in environment variables
- Use app passwords, not main Gmail passwords
- Rotate credentials periodically
- Use SMTP over TLS
- Never commit `.env` or `.env.production` to git

❌ **DON'T:**
- Hardcode credentials in code
- Use main Gmail password for SMTP
- Store credentials in `.env.example`
- Commit `.env` files to version control
- Share credentials in messages

---

## Files Modified
- `.env` - Set to use LOG driver for local development
- `.env.production` - Uses environment variables (Railway)
- `.env.example` - Template for new developers
- `app/Http/Controllers/ContactController.php` - Handles contact form email

## Contact Form Email Flow
1. User submits form at `/contact`
2. `ContactController@send()` validates input
3. `ContactMessageMail` mailable is triggered
4. Email sent to `CONTACT_EMAIL` address
5. User receives success/error response
