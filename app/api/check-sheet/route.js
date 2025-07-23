import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Contact Form Submissions';

    if (!SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      return NextResponse.json({
        error: 'Missing configuration',
        envCheck: {
          hasSheetId: !!SHEET_ID,
          hasServiceAccountEmail: !!GOOGLE_SERVICE_ACCOUNT_EMAIL,
          hasPrivateKey: !!GOOGLE_PRIVATE_KEY,
        }
      }, { status: 400 });
    }

    // Set up Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get sheet information
    const sheetInfo = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });

    const availableSheets = sheetInfo.data.sheets?.map(sheet => ({
      title: sheet.properties?.title,
      id: sheet.properties?.sheetId,
      rowCount: sheet.properties?.gridProperties?.rowCount,
      columnCount: sheet.properties?.gridProperties?.columnCount
    })) || [];

    // Try to read the first few rows to check headers
    const firstSheet = availableSheets[0]?.title;
    let headers = null;
    let sampleData = null;

    if (firstSheet) {
      try {
        const headerResponse = await sheets.spreadsheets.values.get({
          spreadsheetId: SHEET_ID,
          range: `${firstSheet}!A1:K1`,
        });
        headers = headerResponse.data.values?.[0] || [];

        const dataResponse = await sheets.spreadsheets.values.get({
          spreadsheetId: SHEET_ID,
          range: `${firstSheet}!A1:K3`,
        });
        sampleData = dataResponse.data.values || [];
      } catch (error) {
        console.log('Could not read sheet data:', error.message);
      }
    }

    return NextResponse.json({
      success: true,
      sheetInfo: {
        title: sheetInfo.data.properties?.title,
        sheetId: sheetInfo.data.spreadsheetId,
        url: `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`
      },
      configuration: {
        expectedSheetName: SHEET_NAME,
        actualSheets: availableSheets
      },
      currentData: {
        headers: headers,
        sampleRows: sampleData,
        hasData: sampleData && sampleData.length > 0
      },
      recommendations: {
        correctSheetName: availableSheets.find(s => s.title === SHEET_NAME) ? 
          `✅ Sheet "${SHEET_NAME}" found` : 
          `❌ Sheet "${SHEET_NAME}" not found. Available: ${availableSheets.map(s => s.title).join(', ')}`,
        suggestedHeaders: [
          'Timestamp', 'Name', 'Email', 'Phone', 'Country', 
          'Service', 'Urgency', 'Preferred Contact', 'Subject', 'Message', 'Status'
        ]
      }
    });

  } catch (error) {
    console.error('Sheet check error:', error);
    return NextResponse.json({
      error: 'Failed to check sheet',
      details: error.message
    }, { status: 500 });
  }
} 