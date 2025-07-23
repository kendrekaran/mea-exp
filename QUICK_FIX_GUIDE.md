

### 1. Create Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **APIs & Services** → **Credentials** → **Create Credentials** → **Service Account**
3. Name: `contact-form-service`
4. Click **Create and Continue** → **Done**

### 2. Get Service Account Key
1. Click on your service account
2. **Keys** tab → **Add Key** → **Create New Key** → **JSON**
3. Download the JSON file



**Example from your JSON file:**
```json
{
  "client_email": "contact-form-service@my-project-123.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG...\n-----END PRIVATE KEY-----\n"
}
```

Copy these values **exactly** (including the quotes around private_key).

### 3. Share Your Sheet
1. Open your Google Sheet
2. Click **Share**
3. Add the **service account email** as **Editor**
4. Click **Send**

### 4. Share these data with me 
1. GOOGLE_SERVICE_ACCOUNT_EMAIL
2. GOOGLE_PRIVATE_KEY
3. GOOGLE_SHEET_ID