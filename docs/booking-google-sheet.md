# COZY Koh Tao Booking Sheet

Use this structure when connecting website booking requests to Google Sheets.

## Sheet Columns

Create a Google Sheet with a tab named `Bookings` and this header row:

```text
Booking ID | Created At | Status | Check-in | Check-out | Guests | Room | Name | Phone | Email | Notes | Source
```

## Apps Script

Open the Google Sheet, then go to Extensions > Apps Script and paste this code:

```js
const SHEET_NAME = "Bookings";
const SECRET = "change-this-secret";

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");

  if (SECRET && payload.secret !== SECRET) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: "Unauthorized" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const booking = payload.booking || {};
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  sheet.appendRow([
    booking.id || "",
    booking.createdAt || new Date().toISOString(),
    booking.status || "New",
    booking.checkIn || "",
    booking.checkOut || "",
    booking.guests || "",
    booking.room || "",
    booking.name || "",
    booking.phone || "",
    booking.email || "",
    booking.notes || "",
    booking.source || "website"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Deploy the script as a Web App:

1. Click Deploy > New deployment.
2. Select type: Web app.
3. Execute as: Me.
4. Who has access: Anyone.
5. Copy the Web app URL.

## Netlify Environment Variables

In Netlify, add:

```text
GOOGLE_SHEET_WEBHOOK_URL = your Apps Script Web app URL
BOOKING_WEBHOOK_SECRET = change-this-secret
```

After saving the variables, trigger a new deploy. Booking requests will then be written to the Google Sheet.
