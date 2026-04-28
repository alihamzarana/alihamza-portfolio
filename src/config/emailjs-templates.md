# EmailJS Templates Configuration

## Template 1: Contact Form (template_contact)
**Template ID**: template_contact
**Purpose**: Send contact form submissions to Muhammad Awais

### Template Variables:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Message subject
- {{message}} - Message content
- {{to_email}} - Recipient email (engineer.awais.a@gmail.com)
- {{reply_to}} - Reply-to email (sender's email)

### Email Template (HTML):
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

## Template 2: Receipt Confirmation (template_receipt)
**Template ID**: template_receipt
**Purpose**: Send confirmation receipt to the person who submitted the form

### Template Variables:
- {{to_name}} - Recipient's name (sender)
- {{to_email}} - Recipient's email (sender)
- {{from_name}} - Muhammad Awais
- {{from_email}} - engineer.awais.a@gmail.com
- {{subject}} - Original subject
- {{message}} - Original message
- {{site_url}} - Portfolio website URL

### Email Template (HTML):
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

## Setup Instructions:

1. Go to EmailJS Dashboard
2. Create two new templates with the IDs above
3. Copy the HTML content for each template
4. Set the template variables as shown
5. Test the templates with sample data
6. Update the environment variables with the correct template IDs


