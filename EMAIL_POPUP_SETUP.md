# Email Popup Setup Guide

## 🎉 Implementation Complete!

I've successfully implemented a beautiful email popup with EmailJS integration and database storage. Here's what has been created:

## 📁 Files Created/Modified:

### New Components:
- `src/components/EmailPopup.tsx` - Beautiful email popup with multiple options
- `src/components/EmailJSTest.tsx` - Test component for EmailJS integration
- `src/utils/database.ts` - Database utility for storing contacts
- `src/api/contact.ts` - API endpoint for contact storage
- `src/config/emailjs-templates.md` - EmailJS template configurations

### Modified Files:
- `src/components/Hero.tsx` - Updated to use EmailPopup instead of direct mailto
- `env.example` - Added environment variables
- `package.json` - Added EmailJS and database dependencies

## 🚀 Features Implemented:

### 1. Beautiful Email Popup
- **Glassmorphism Design** - Matches your portfolio's aesthetic
- **Multiple Actions**:
  - Send direct email (opens mail client)
  - Copy email to clipboard
  - Quick contact form
- **Smooth Animations** - Fade in/out, hover effects
- **Responsive Design** - Works on all devices

### 2. EmailJS Integration
- **Dual Email System**:
  - Contact form email to you
  - Receipt confirmation to sender
- **Professional Templates** - Inspired by big tech companies
- **Error Handling** - Graceful fallbacks

### 3. Database Storage
- **PostgreSQL Integration** - Stores all contact submissions
- **LocalStorage Fallback** - Works even without database
- **Contact Management** - Easy to retrieve and manage contacts

## 🔧 Setup Instructions:

### 1. Environment Variables
Create a `.env` file in your project root with:
```env
VITE_EMAILJS_SERVICE_ID=service_n247s8g
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_contact
VITE_EMAILJS_TEMPLATE_ID_RECEIPT=template_receipt
VITE_EMAILJS_PUBLIC_KEY=ke8AJ0OmR1ahFlC7p
VITE_DATABASE_URL=postgresql://neondb_owner:npg_n3avyzNpxS9d@ep-mute-truth-agfd1e3a-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
VITE_CONTACT_EMAIL=engineer.awais.a@gmail.com
VITE_SITE_URL=https://awais-portfolio.com
```

### 2. EmailJS Templates Setup
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create two templates:

#### Template 1: Contact Form (ID: template_contact)
- **Purpose**: Send contact form to you
- **Variables**: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}, {{reply_to}}
- **HTML Template**: See `src/config/emailjs-templates.md`

#### Template 2: Receipt Confirmation (ID: template_receipt)
- **Purpose**: Send confirmation to sender
- **Variables**: {{to_name}}, {{to_email}}, {{from_name}}, {{subject}}, {{message}}, {{site_url}}
- **HTML Template**: See `src/config/emailjs-templates.md`

### 3. Database Setup
The system will automatically create a `contacts` table with:
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- timestamp (TIMESTAMP)
- created_at (TIMESTAMP)

## 🎨 Design Features:

### Email Templates (Big Tech Inspired):
- **Facebook-style** clean layout
- **Airbnb-style** professional colors
- **Google-style** minimal design
- **Gradient headers** matching your portfolio
- **Responsive design** for all devices

### Popup Features:
- **Quick Actions** - Direct email, copy email
- **Contact Form** - Name, email, subject, message
- **Loading States** - Smooth animations
- **Error Handling** - User-friendly messages
- **Accessibility** - ARIA labels, keyboard navigation

## 🧪 Testing:

### 1. Test EmailJS Integration
```bash
npm run dev
```
- Click the email icon in the Hero section
- Try the "Test EmailJS Integration" button
- Check your email for test messages

### 2. Test Contact Form
- Fill out the contact form
- Submit and check for:
  - Email sent to you
  - Receipt sent to sender
  - Data stored in database

### 3. Test Database Storage
- Check browser console for contact storage logs
- Verify data in localStorage (fallback)
- Check PostgreSQL database for stored contacts

## 📧 Email Templates Preview:

### Contact Form Email (to you):
- Professional header with gradient
- Sender information clearly displayed
- Message content in styled box
- Reply-to information
- Footer with instructions

### Receipt Email (to sender):
- Success confirmation with checkmark
- Message summary
- Professional response from you
- Call-to-action buttons
- Social media links
- Contact information

## 🚀 Deployment:

1. **Build the project**: `npm run build`
2. **Deploy to your hosting service**
3. **Set environment variables** in your hosting platform
4. **Test the live contact form**

## 🔍 Troubleshooting:

### Common Issues:
1. **EmailJS not working**: Check service ID, template IDs, and public key
2. **Database connection failed**: Check database URL and credentials
3. **Templates not found**: Ensure template IDs match exactly
4. **Environment variables**: Make sure they're set in production

### Debug Mode:
- Check browser console for detailed error messages
- Use the EmailJSTest component to verify integration
- Check EmailJS dashboard for delivery status

## 🎯 Next Steps:

1. **Set up EmailJS templates** using the provided HTML
2. **Test the integration** with the test component
3. **Deploy and test** the live contact form
4. **Monitor contact submissions** in your database
5. **Customize templates** if needed

The email popup is now fully functional and ready to use! 🎉


