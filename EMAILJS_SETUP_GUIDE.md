# EmailJS Setup Guide - Fix Template Error

## 🚨 Current Issue
You're getting this error:
```
{
    "status": 400,
    "text": "The template ID not found. To find this ID, visit https://dashboard.emailjs.com/admin/templates"
}
```

This means the EmailJS templates haven't been created yet.

## 🔧 Step-by-Step Fix

### Step 1: Go to EmailJS Dashboard
1. Visit: https://dashboard.emailjs.com/
2. Log in to your EmailJS account
3. Go to **Templates** section

### Step 2: Create Template 1 - Contact Form
1. Click **"Create New Template"**
2. **Template ID**: `template_contact`
3. **Template Name**: "Contact Form Submission"
4. **Subject**: "New Contact Form Submission - {{subject}}"

**HTML Content** (copy and paste this):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #667eea; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #667eea; }
        .message-box { background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; min-height: 100px; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 New Contact Form Submission</h1>
        <p>Someone wants to connect with you!</p>
    </div>
    <div class="content">
        <div class="field">
            <div class="label">👤 From:</div>
            <div class="value">{{from_name}} ({{from_email}})</div>
        </div>
        <div class="field">
            <div class="label">📋 Subject:</div>
            <div class="value">{{subject}}</div>
        </div>
        <div class="field">
            <div class="label">💬 Message:</div>
            <div class="message-box">{{message}}</div>
        </div>
        <div class="field">
            <div class="label">📧 Reply To:</div>
            <div class="value">{{reply_to}}</div>
        </div>
    </div>
    <div class="footer">
        <p>This message was sent from your portfolio contact form.</p>
        <p>Reply directly to this email to respond to {{from_name}}.</p>
    </div>
</body>
</html>
```

### Step 3: Create Template 2 - Receipt Confirmation
1. Click **"Create New Template"**
2. **Template ID**: `template_receipt`
3. **Template Name**: "Contact Form Receipt"
4. **Subject**: "Message Received - {{subject}}"

**HTML Content** (copy and paste this):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Message Received - Muhammad Awais</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .success-icon { font-size: 48px; margin-bottom: 20px; }
        .message { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #28a745; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .social-links { margin: 20px 0; }
        .social-links a { display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; }
    </style>
</head>
<body>
    <div class="header">
        <div class="success-icon">✅</div>
        <h1>Message Received!</h1>
        <p>Thank you for reaching out, {{to_name}}!</p>
    </div>
    <div class="content">
        <div class="message">
            <h3>Your message has been successfully delivered:</h3>
            <p><strong>Subject:</strong> {{subject}}</p>
            <p><strong>Message:</strong> {{message}}</p>
        </div>
        
        <p>Hi {{to_name}},</p>
        <p>Thank you for taking the time to reach out to me! I've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
        
        <p>In the meantime, feel free to:</p>
        <ul>
            <li>Check out my latest projects on my portfolio</li>
            <li>Connect with me on LinkedIn</li>
            <li>Follow my coding journey on GitHub</li>
        </ul>
        
        <div style="text-align: center;">
            <a href="{{site_url}}" class="cta-button">Visit My Portfolio</a>
        </div>
        
        <div class="social-links" style="text-align: center;">
            <a href="https://www.linkedin.com/in/engineer-awais-ali/">LinkedIn</a>
            <a href="https://github.com/MuhammadAwaisAli">GitHub</a>
            <a href="mailto:engineer.awais.a@gmail.com">Email</a>
        </div>
        
        <p>Best regards,<br>
        <strong>Muhammad Awais</strong><br>
        Full Stack Developer</p>
    </div>
    <div class="footer">
        <p>This is an automated confirmation. Please do not reply to this email.</p>
        <p>If you need immediate assistance, please call: (+92) 347-3444695</p>
    </div>
</body>
</html>
```

### Step 4: Save Both Templates
1. Click **"Save"** for both templates
2. Make sure the Template IDs are exactly:
   - `template_contact`
   - `template_receipt`

### Step 5: Test the Templates
1. Go to **"Test"** tab in each template
2. Fill in sample data:
   - `from_name`: "Test User"
   - `from_email`: "test@example.com"
   - `subject`: "Test Message"
   - `message`: "This is a test message"
3. Click **"Send Test"**
4. Check your email for the test messages

### Step 6: Update Environment Variables
Create a `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=service_n247s8g
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_contact
VITE_EMAILJS_TEMPLATE_ID_RECEIPT=template_receipt
VITE_EMAILJS_PUBLIC_KEY=ke8AJ0OmR1ahFlC7p
VITE_CONTACT_EMAIL=engineer.awais.a@gmail.com
VITE_SITE_URL=https://awais-portfolio.com
```

### Step 7: Test Your Portfolio
1. Start your development server: `npm run dev`
2. Go to http://localhost:8080
3. Click the email icon in the Hero section
4. Try sending a test message
5. Check your email for the contact form submission
6. Check the sender's email for the receipt confirmation

## 🎯 Quick Fix Alternative

If you want to test immediately without setting up templates, I can modify the code to use a simpler approach. Let me know if you'd like me to create a temporary fix while you set up the EmailJS templates.

## 📞 Need Help?

If you encounter any issues:
1. Check the EmailJS dashboard for template IDs
2. Verify your service ID and public key
3. Make sure the template IDs match exactly in your `.env` file
4. Test each template individually in the EmailJS dashboard

The templates are now ready to be created! Once you've set them up, the email popup will work perfectly. 🚀
