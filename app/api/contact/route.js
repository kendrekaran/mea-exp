import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Extract form data
    const {
      name,
      email,
      phone,
      subject,
      service,
      message,
      preferredContact,
      country,
      urgency,
      timestamp
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const sheetData = [
      new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), // Indian Standard Time
      name,
      email,
      phone,
      country || 'Not specified',
      service,
      urgency,
      preferredContact,
      subject,
      message,
      'New' // Status column
    ];

    // Google Sheets configuration
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Contact Form Submissions';

    if (!SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error('Missing Google Sheets configuration');
      console.log('SHEET_ID exists:', !!SHEET_ID);
      console.log('SERVICE_ACCOUNT_EMAIL exists:', !!GOOGLE_SERVICE_ACCOUNT_EMAIL);
      console.log('PRIVATE_KEY exists:', !!GOOGLE_PRIVATE_KEY);
      console.log('Form data that would be saved:', sheetData);
      
      // Return success in development mode when Google Sheets is not configured
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully! (Note: Google Sheets integration not configured - data logged to console)' 
      });
    }

    console.log('Setting up Google Sheets API with Service Account...');
    console.log('Sheet ID:', SHEET_ID);
    console.log('Sheet Name:', SHEET_NAME);
    console.log('Service Account Email:', GOOGLE_SERVICE_ACCOUNT_EMAIL);

    // Set up Google Auth with Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // First, get the sheet info to find the correct tab name
    const sheetInfo = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });

    console.log('Available sheet tabs:', sheetInfo.data.sheets?.map(s => s.properties?.title));

    // Find the sheet tab (either by exact name or use the first sheet)
    let targetSheetName = SHEET_NAME;
    const availableSheets = sheetInfo.data.sheets?.map(s => s.properties?.title) || [];
    
    if (!availableSheets.includes(SHEET_NAME)) {
      console.log(`Sheet "${SHEET_NAME}" not found. Using first available sheet: "${availableSheets[0]}"`);
      targetSheetName = availableSheets[0] || 'Sheet1';
    }

    console.log('Using sheet tab:', targetSheetName);

    // Append data to the sheet
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${targetSheetName}!A:K`,
      valueInputOption: 'RAW',
      resource: {
        values: [sheetData],
      },
    });

    console.log('Successfully saved to Google Sheets:', result.data);

    // Send email notification (optional)
    await sendEmailNotification(body);

    return NextResponse.json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Please try again or contact us directly'
      },
      { status: 500 }
    );
  }
}

// Optional: Send email notification
async function sendEmailNotification(formData) {
  try {
    // You can integrate with services like SendGrid, Resend, or Nodemailer here
    // For now, we'll just log the notification
    console.log('Email notification would be sent for:', {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      urgency: formData.urgency
    });
  } catch (error) {
    console.error('Email notification failed:', error);
    // Don't throw error as form submission should still succeed
  }
} 