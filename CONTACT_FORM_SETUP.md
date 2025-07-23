# Contact Form with Google Sheets Integration Setup Guide

## Overview
This contact form has been integrated into your MEA Expert website with a modern, responsive design that matches your existing UI. The form collects user inquiries and saves them directly to a Google Sheet for easy management.

## Features
- ✅ Responsive design matching your website's aesthetic
- ✅ Form validation with required fields
- ✅ Service-specific dropdowns
- ✅ Urgency level selection
- ✅ Preferred contact method selection
- ✅ Google Sheets integration for data storage
- ✅ Success/error messaging
- ✅ Loading states during submission

## Google Sheets Setup

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "MEA Expert - Contact Form Submissions"
4. Set up the following column headers in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Country`
   - F1: `Service`
   - G1: `Urgency`
   - H1: `Preferred Contact`
   - I1: `Subject`
   - J1: `Message`
   - K1: `Status`

### Step 2: Create Google Service Account (REQUIRED)
**Important**: Google no longer allows API keys for writing to sheets. You must use Service Account authentication.

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"
4. Create a Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Enter a name (e.g., "contact-form-service")
   - Click "Create and Continue"
   - Skip roles for now, click "Continue"
   - Click "Done"
5. Create and Download Service Account Key:
   - Click on your newly created service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Choose "JSON" format
   - Click "Create" - this downloads a JSON file
6. Extract credentials from the JSON file:
   - Open the downloaded JSON file
   - Copy the `client_email` value
   - Copy the `private_key` value (including the `\n` characters)

### Step 3: Get Sheet ID
1. Open your Google Sheet
2. Copy the Sheet ID from the URL
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - The SHEET_ID is the long string between `/d/` and `/edit`

### Step 4: Set Environment Variables
Create a `.env.local` file in your project root with:

```bash
# Google Sheets Integration with Service Account
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SHEET_NAME=Contact Form Submissions
```

**Important**: 
- Keep the quotes around the `GOOGLE_PRIVATE_KEY`
- Don't remove the `\n` characters in the private key
- Use the exact email from the JSON file

### Step 5: Share Sheet with Service Account (CRITICAL!)
1. Open your Google Sheet
2. Click "Share" button (top right)
3. Add the **service account email** (from your JSON file) as an editor
4. Set permission to **"Editor"** 
5. Click "Send"

**Note**: The service account needs direct access to edit the sheet. You don't need to make the sheet public anymore!

## Form Fields

The contact form includes the following fields:

### Required Fields:
- **Full Name**: User's complete name
- **Email Address**: Contact email
- **Phone Number**: Contact phone number
- **Service Required**: Dropdown with your services
- **Subject**: Brief description of inquiry
- **Message**: Detailed message about requirements

### Optional Fields:
- **Country**: User's country
- **Urgency Level**: Normal, Urgent, or Express
- **Preferred Contact Method**: Email, Phone, or WhatsApp

## Testing the Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form with test data
4. Submit the form
5. Check your Google Sheet for the new row of data

## Troubleshooting

### Common Issues:

1. **"Missing Google Sheets configuration" error**
   - Check that your environment variables are set correctly
   - Ensure `.env.local` file is in the project root
   - Restart your development server after adding environment variables

2. **"Google Sheets API error: 403" error**
   - Make sure your Google Sheet is publicly accessible
   - Verify your API key is correct
   - Check that the Google Sheets API is enabled in your Google Cloud project

3. **"Google Sheets API error: 400" error**
   - Verify your Sheet ID is correct
   - Check that the sheet name matches exactly (case-sensitive)
   - Ensure the sheet has the correct column headers

4. **Form submission hangs**
   - Check browser console for errors
   - Verify network connectivity
   - Check that the API route is working: `/api/contact`

## Data Management

### Viewing Submissions
- All form submissions are automatically saved to your Google Sheet
- Each submission includes a timestamp in Indian Standard Time
- Status column is set to "New" for all submissions

### Managing Submissions
- You can add additional columns for notes, follow-up dates, etc.
- Change the status from "New" to "In Progress", "Completed", etc.
- Use Google Sheets' filtering and sorting features to organize data

## Security Considerations

1. **API Key Security**: Never commit your API key to version control
2. **Sheet Access**: Only share the sheet with team members who need access
3. **Data Privacy**: Ensure compliance with data protection regulations
4. **Rate Limiting**: Google Sheets API has usage limits - monitor if you get high traffic

## Customization

### Adding New Service Options
Edit the `serviceOptions` array in `app/components/ContactForm.jsx`:

```javascript
const serviceOptions = [
  'MEA Attestation',
  'Embassy Attestation',
  'Your New Service', // Add here
  // ... other services
];
```

### Changing Form Fields
- Edit the `ContactForm.jsx` component to add/remove fields
- Update the API route in `app/api/contact/route.js` to handle new fields
- Add corresponding columns to your Google Sheet

### Styling Changes
The form uses Tailwind CSS classes matching your website's design. Key colors:
- Primary: `#0A9DB2` (teal)
- Secondary: `#0881A3` (darker teal)
- Accent: `#065660` (dark teal)

## Email Notifications (Optional)

The API route includes a placeholder for email notifications. To enable:

1. Choose an email service (SendGrid, Resend, Nodemailer)
2. Add email configuration to environment variables
3. Implement the `sendEmailNotification` function in `app/api/contact/route.js`

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Google Sheets setup
3. Test the API endpoint directly using a tool like Postman
4. Ensure all environment variables are correctly set

The form is now ready to use and will provide a professional way for your customers to contact MEA Expert! 