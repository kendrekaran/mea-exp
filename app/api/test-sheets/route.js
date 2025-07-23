import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Contact Form Submissions';

    console.log('Testing Google Sheets API connection with Service Account...');
    console.log('Sheet ID:', SHEET_ID);
    console.log('Service Account Email exists:', !!GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log('Private Key exists:', !!GOOGLE_PRIVATE_KEY);
    console.log('Sheet Name:', SHEET_NAME);

    if (!SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      return NextResponse.json({
        error: 'Missing configuration',
        details: {
          hasSheetId: !!SHEET_ID,
          hasServiceAccountEmail: !!GOOGLE_SERVICE_ACCOUNT_EMAIL,
          hasPrivateKey: !!GOOGLE_PRIVATE_KEY,
          message: 'Please check your .env.local file and set up Service Account credentials'
        }
      }, { status: 400 });
    }

    // Set up Google Auth with Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Test connection by getting sheet info
    const result = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });

    return NextResponse.json({
      success: true,
      message: 'Google Sheets API connection successful with Service Account!',
      sheetInfo: {
        title: result.data.properties?.title,
        sheetId: result.data.spreadsheetId,
        sheets: result.data.sheets?.map(sheet => sheet.properties?.title)
      }
    });

  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      error: 'Test failed',
      details: error.message,
      troubleshooting: {
        'Service account setup required': 'You need to create a Google Service Account and set up credentials',
        'Sheet permissions': 'Make sure to share your sheet with the service account email',
        'Private key format': 'Make sure the private key is properly formatted in .env.local'
      }
    }, { status: 500 });
  }
} 