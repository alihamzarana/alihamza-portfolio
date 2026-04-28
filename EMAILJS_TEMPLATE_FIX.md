# EmailJS Template Configuration Fix

## The Problem
You're getting the error: `{"status": 422, "text": "The recipients address is empty"}`

This happens because your EmailJS templates are not properly configured with recipient email addresses.

## The Solution

### Step 1: Go to EmailJS Dashboard
1. Visit: https://dashboard.emailjs.com/admin/templates
2. You should see your templates: `template_contact` and `template_receipt`

### Step 2: Configure Template 1 - Contact Template (`template_contact`)

**Template Settings:**
- **Template Name**: `template_contact`
- **Template ID**: `template_contact`
- **Subject**: `New Contact from Portfolio: {{subject}}`

**Template Content (HTML):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>New Contact from Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #F9FAFB;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 32px 16px;
        }
        .header {
            text-align: center;
            margin-bottom: 32px;
        }
        .main-title {
            font-size: 36px;
            font-weight: 700;
            color: #374151;
            margin-bottom: 8px;
        }
        .subtitle {
            font-size: 18px;
            color: #6B7280;
            margin-top: 8px;
        }
        .card {
            background-color: #FFFFFF;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin-bottom: 32px;
        }
        .card-title {
            font-size: 20px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 16px;
        }
        .contact-info {
            border-left: 4px solid #667eea;
            padding-left: 16px;
        }
        .contact-item {
            margin-bottom: 16px;
        }
        .contact-item:last-child {
            margin-bottom: 0;
        }
        .contact-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 4px;
        }
        .contact-value {
            color: #6B7280;
            line-height: 1.6;
            background-color: #F9FAFB;
            padding: 8px 12px;
            border-radius: 4px;
            border: 1px solid #E5E7EB;
        }
        .message-value {
            color: #6B7280;
            line-height: 1.6;
            background-color: #F9FAFB;
            padding: 12px;
            border-radius: 4px;
            border: 1px solid #E5E7EB;
            white-space: pre-wrap;
        }
        .footer {
            text-align: center;
            margin-top: 48px;
            padding-top: 32px;
            border-top: 1px solid #E5E7EB;
        }
        .footer-text {
            font-size: 12px;
            color: #6B7280;
            margin-bottom: 4px;
        }
        .footer-link {
            color: #667eea;
            text-decoration: none;
        }
        .footer-link:hover {
            text-decoration: underline;
        }
        @media (max-width: 600px) {
            .email-container {
                padding: 16px 8px;
            }
            .main-title {
                font-size: 28px;
            }
            .card {
                padding: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <header class="header">
            <h1 class="main-title">New Contact Message!</h1>
            <p class="subtitle">Someone wants to connect with you</p>
        </header>
        
        <main>
            <div class="card">
                <h2 class="card-title">Contact Details:</h2>
                <div class="contact-info">
                    <div class="contact-item">
                        <p class="contact-label">Name:</p>
                        <p class="contact-value">{{from_name}}</p>
                    </div>
                    <div class="contact-item">
                        <p class="contact-label">Email:</p>
                        <p class="contact-value">{{from_email}}</p>
                    </div>
                    <div class="contact-item">
                        <p class="contact-label">Subject:</p>
                        <p class="contact-value">{{subject}}</p>
                    </div>
                    <div class="contact-item">
                        <p class="contact-label">Message:</p>
                        <p class="message-value">{{message}}</p>
                    </div>
                    <div class="contact-item">
                        <p class="contact-label">Received:</p>
                        <p class="contact-value">{{timestamp}}</p>
                    </div>
                </div>
            </div>
        </main>
        
        <footer class="footer">
            <p class="footer-text"><strong>Portfolio Contact Form</strong></p>
            <p class="footer-text">This message was sent from your professional portfolio website.</p>
            <p class="footer-text">Reply directly to: <a href="mailto:{{from_email}}" class="footer-link">{{from_email}}</a></p>
        </footer>
    </div>
</body>
</html>
```

**IMPORTANT - Template Variables:**
Make sure these variables are set in your template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{timestamp}}` - Current timestamp

**Recipient Configuration:**
- **To Email**: `engineer.awais.a@gmail.com`
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{from_email}}`

### Step 3: Configure Template 2 - Receipt Template (`template_receipt`)

**Template Settings:**
- **Template Name**: `template_receipt`
- **Template ID**: `template_receipt`
- **Subject**: `Thank you for contacting Muhammad Awais!`

**Template Content (HTML):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Message Received</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #F9FAFB;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 32px 16px;
        }
        .header {
            text-align: center;
            margin-bottom: 32px;
        }
        .main-title {
            font-size: 36px;
            font-weight: 700;
            color: #374151;
            margin-bottom: 8px;
        }
        .subtitle {
            font-size: 18px;
            color: #6B7280;
            margin-top: 8px;
        }
        .card {
            background-color: #FFFFFF;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin-bottom: 32px;
        }
        .card-title {
            font-size: 20px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 16px;
        }
        .message-content {
            border-left: 4px solid #6366F1;
            padding-left: 16px;
        }
        .message-item {
            margin-bottom: 16px;
        }
        .message-item:last-child {
            margin-bottom: 0;
        }
        .message-label {
            font-weight: 600;
            color: #374151;
            margin-bottom: 4px;
        }
        .message-text {
            color: #6B7280;
            line-height: 1.6;
        }
        .greeting {
            color: #374151;
            margin-bottom: 16px;
            font-size: 16px;
        }
        .main-text {
            color: #6B7280;
            margin-bottom: 16px;
            font-size: 15px;
        }
        .list-title {
            color: #6B7280;
            margin-bottom: 16px;
            font-size: 15px;
        }
        .list {
            color: #6B7280;
            margin-bottom: 24px;
            padding-left: 20px;
        }
        .list li {
            margin-bottom: 8px;
        }
        .cta-container {
            text-align: center;
        }
        .cta-button {
            display: inline-block;
            background-color: #667eea;
            color: #FFFFFF !important;
            font-weight: 600;
            padding: 12px 32px;
            border-radius: 8px;
            text-decoration: none;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #5a67d8;
            color: #FFFFFF !important;
        }
        .social-links {
            text-align: center;
            margin-bottom: 32px;
        }
        .social-links-container {
            text-align: center;
            line-height: 1.8;
        }
        .social-link {
            color: #6B7280;
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 15px;
            margin: 0 16px;
            display: inline-block;
        }
        .social-link:hover {
            color: #667eea;
        }
        .signature {
            text-align: center;
        }
        .signature-text {
            color: #6B7280;
            margin-bottom: 16px;
        }
        .signature-name {
            font-weight: 600;
            color: #374151;
            margin-bottom: 4px;
        }
        .signature-title {
            color: #6B7280;
        }
        .footer {
            text-align: center;
            margin-top: 48px;
            padding-top: 32px;
            border-top: 1px solid #E5E7EB;
        }
        .footer-text {
            font-size: 12px;
            color: #6B7280;
            margin-bottom: 4px;
        }
        .footer-link {
            color: #667eea;
            text-decoration: none;
        }
        .footer-link:hover {
            text-decoration: underline;
        }
        @media (max-width: 600px) {
            .email-container {
                padding: 16px 8px;
            }
            .main-title {
                font-size: 28px;
            }
            .card {
                padding: 16px;
            }
            .social-links-container {
                flex-direction: column;
                gap: 12px;
            }
        }
        
        /* Force white text on button */
        .cta-button, .cta-button:visited, .cta-button:active {
            color: #FFFFFF !important;
        }
        
    </style>
</head>
<body>
    <div class="email-container">
        <header class="header">
            <h1 class="main-title">Message Received!</h1>
            <p class="subtitle">Thank you for reaching out, {{to_name}}!</p>
        </header>
        
        <main>
            <div class="card">
                <h2 class="card-title">Your message has been successfully delivered:</h2>
                <div class="message-content">
                    <div class="message-item">
                        <p class="message-label">Subject:</p>
                        <p class="message-text">{{subject}}</p>
                    </div>
                    <div class="message-item">
                        <p class="message-label">Message:</p>
                        <p class="message-text">{{message}}</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <p class="greeting">Hi {{to_name}},</p>
                <p class="main-text">
                    Thank you for taking the time to reach out to me! I've received your message and will get back to you as soon as possible, typically within 24 hours.
                </p>
                <p class="list-title">In the meantime, feel free to:</p>
                <ul class="list">
                    <li>Check out my latest projects on my portfolio</li>
                    <li>Connect with me on LinkedIn</li>
                    <li>Follow my coding journey on GitHub</li>
                </ul>
                <div class="cta-container">
                    <a href="{{site_url}}" class="cta-button">Visit My Portfolio</a>
                </div>
            </div>
            
            <div class="social-links">
                <div class="social-links-container">
                    <a href="https://www.linkedin.com/in/engineer-awais-ali/" class="social-link">LinkedIn</a>
                    <span style="color: #D1D5DB; margin: 0 8px;">|</span>
                    <a href="https://github.com/MuhammadAwaisAli" class="social-link">GitHub</a>
                    <span style="color: #D1D5DB; margin: 0 8px;">|</span>
                    <a href="mailto:engineer.awais.a@gmail.com" class="social-link">Email</a>
                </div>
            </div>
            
            <div class="signature">
                <p class="signature-text">Best regards,</p>
                <p class="signature-name">Muhammad Awais</p>
                <p class="signature-title">Full Stack Developer</p>
            </div>
        </main>
        
        <footer class="footer">
            <p class="footer-text">This is an automated confirmation. Please do not reply to this email.</p>
            <p class="footer-text">If you need immediate assistance, please call: (+92) 347-3444895</p>
            <p class="footer-text">Email sent via <a href="#" class="footer-link">EmailJS.com</a></p>
        </footer>
    </div>
</body>
</html>
```

**IMPORTANT - Template Variables:**
- `{{to_name}}` - Recipient's name
- `{{to_email}}` - Recipient's email
- `{{subject}}` - Original subject
- `{{message}}` - Original message
- `{{site_url}}` - Portfolio URL

**Recipient Configuration:**
- **To Email**: `{{to_email}}`
- **From Name**: `Muhammad Awais`
- **From Email**: `engineer.awais.a@gmail.com`
- **Reply To**: `engineer.awais.a@gmail.com`

### Step 4: Test Your Templates

1. **Save both templates** in your EmailJS dashboard
2. **Test the contact form** on your portfolio
3. **Check your email** for the contact notification
4. **Check the sender's email** for the receipt

### Step 5: Common Issues & Solutions

**If you still get "recipients address is empty":**
1. Make sure the "To Email" field is set to `engineer.awais.a@gmail.com` in template_contact
2. Make sure the "To Email" field is set to `{{to_email}}` in template_receipt
3. Verify your template IDs match exactly: `template_contact` and `template_receipt`

**If emails don't send:**
1. Check your EmailJS service is active
2. Verify your public key is correct
3. Make sure your templates are published (not in draft mode)

## Quick Test
After setting up the templates, test by:
1. Going to your portfolio
2. Clicking the email icon
3. Filling out the contact form
4. Submitting it

You should receive an email notification and the sender should get a receipt!
