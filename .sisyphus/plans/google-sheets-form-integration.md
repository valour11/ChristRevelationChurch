# Google Apps Script + Google Sheets Form Integration

## TL;DR
> Connect all 5 website forms to a Google Sheet so the ministry receives every submission in a centralized, real-time spreadsheet without any backend server.
>
> **Deliverables**:
> - 1 Google Sheet with 5 tabs (one per form type)
> - 1 Google Apps Script web app (API endpoint)
> - 5 modified form files in the codebase
>
> **Estimated Effort**: Medium (~1-2 hours including Google setup)
> **Parallel Execution**: YES — 4 parallel waves

---

## Context

### Current State
All 5 forms currently simulate a 2-second delay and log to console — data goes nowhere. The Partnership form includes a file upload (picture for intercession) which adds complexity.

### Forms to Connect

| # | Form | File | Key Fields | Has File Upload? |
|---|------|------|-----------|------------------|
| 1 | New Convert | `NewConvert.tsx` | Name, Email, Phone, Location, Testimony, Prayer Needs | No |
| 2 | Prayer Request | `PrayerRequest.tsx` | First Name, Last Name, Email, Category, Request | No |
| 3 | Partnership | `Partnership.tsx` | Name, Email, Countries, Phone, Occupation, Pledge, 2 Prayer Points, Picture | **Yes** |
| 4 | Contact | `Contact.tsx` | Name, Email, Subject, Message | No |
| 5 | School Enrollment | `School.tsx` | Name, Email, Phone, Level, Reason | No |

### How Google Apps Script Works

```
User fills form → Submit → POST to Apps Script Web App URL
                                           ↓
                              Google Apps Script (doPost)
                                           ↓
                              Writes to Google Sheet row
                                           ↓
                              Optional: Email notification
                                           ↓
                              Returns JSON success response
                                           ↓
                              Website shows success message
```

---

## Work Objectives

### Core Objective
Route all 5 form submissions to a Google Sheet via Google Apps Script.

### Concrete Deliverables
- Google Sheet with 5 named tabs
- Deployed Google Apps Script web app
- 5 form files updated to POST to the web app instead of simulating
- Partnership file upload sent as base64-encoded string (within size limits)

### Guardrails
- No backend server — must remain a static site
- Must handle CORS (Apps Script handles this via `doPost`)
- Partnership image must be under Apps Script's 50MB request limit (images are ~100-500KB, fine)
- Website should still work gracefully if the script is unreachable

---

## Verification Strategy
- `npm run lint && npm run build` passes
- Create a test Google Sheet, deploy the script, submit test data via curl
- Verify data appears in the correct sheet tab

---

## Execution Strategy

```
Wave 1 (Google Setup — sequential):
├── Task 1: Create Google Sheet + Apps Script + deploy web app

Wave 2 (Forms — all parallel):
├── Task 2: Update NewConvert.tsx to POST to web app
├── Task 3: Update PrayerRequest.tsx to POST to web app
├── Task 4: Update Contact.tsx to POST to web app
├── Task 5: Update School.tsx to POST to web app

Wave 3 (Partnership — depends on file upload pattern):
├── Task 6: Update Partnership.tsx to POST with file as base64

Wave FINAL (Verification):
├── Task F1: Submit test data for all 5 forms → verify in sheet
└── Task F2: Build + type-check
```

---

## TODOs

- [ ] 1. Create Google Sheet + Apps Script Web App

  **What to do**:
  This is a Google Drive / Apps Script task, not code. The user (or someone with a Google account) needs to:

  1. Go to [sheets.new](https://sheets.new) and create a new spreadsheet
  2. Rename it to `Ministry Form Submissions`
  3. Create 5 sheet tabs at the bottom:
     - `PrayerRequests` (rename default "Sheet1")
     - `NewConverts` (add new tab)
     - `Partnerships` (add new tab)
     - `Contacts` (add new tab)
     - `Enrollments` (add new tab)
  4. Add headers to each tab (these become the column structure):

     **PrayerRequests**: Timestamp | FirstName | LastName | Email | Category | Request

     **NewConverts**: Timestamp | FullName | Email | Phone | Location | Testimony | PrayerNeeds

     **Partnerships**: Timestamp | FullName | Email | CountryOfOrigin | CountryOfResidence | TownOrRegion | ContactNumber | Occupation | MonthlyPledge | PrayerPoint1 | PrayerPoint2 | PictureBase64

     **Contacts**: Timestamp | FullName | Email | Subject | Message

     **Enrollments**: Timestamp | FullName | Email | Phone | Level | Reason

  5. Go to **Extensions → Apps Script**
  6. Name the project `Ministry Form Handler`
  7. Replace the default `Code.gs` content with the script below
  8. Deploy → New deployment → Type: Web app → Execute as: Me → Who has access: Anyone
  9. Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/.../exec`) URL: `https://script.google.com/macros/s/AKfycbw_JTNhN6VC2Yfh7oEQL64gxXyOvGggwzDHaGOMt859IuqYCSpLqUukMI6ivzvnPxAgsQ/exec` Deployment ID: `AKfycbw_JTNhN6VC2Yfh7oEQL64gxXyOvGggwzDHaGOMt859IuqYCSpLqUukMI6ivzvnPxAgsQ

  new URL:https://script.google.com/macros/s/AKfycbxSH0qXOxuB0s3sF3tKM2TrxQUY0xFep9c58p_DJvEHr1fS8SYWsm2t47YSQG9-Zuas0w/exec

  **Apps Script Code (`Code.gs`)**:
  ```javascript
  function doPost(e) {
    try {
      const ss = SpreadsheetApp.openById(SCRIPT_PROP.getProperty('key'));
      const data = JSON.parse(e.postData.contents);
      const sheetName = data.formType || 'Contacts';
      const sheet = ss.getSheetByName(sheetName);

      if (!sheet) {
        return ContentService
          .createTextOutput(JSON.stringify({ success: false, error: 'Sheet not found: ' + sheetName }))
          .setMimeType(ContentService.MimeType.JSON);
      }

      const timestamp = new Date();
      const row = [];

      switch (sheetName) {
        case 'PrayerRequests':
          row.push(timestamp, data.firstName, data.lastName, data.email, data.category, data.request);
          break;
        case 'NewConverts':
          row.push(timestamp, data.fullName, data.email, data.phone, data.location, data.testimony, data.prayerNeeds);
          break;
        case 'Partnerships':
          row.push(timestamp, data.fullName, data.email, data.countryOfOrigin, data.countryOfResidence, data.townOrRegion, data.contactNumber, data.occupation, data.monthlyPledge, data.prayerPoint1, data.prayerPoint2, data.pictureBase64 || '');
          break;
        case 'Contacts':
          row.push(timestamp, data.fullName, data.email, data.subject, data.message);
          break;
        case 'Enrollments':
          row.push(timestamp, data.fullName, data.email, data.phone, data.level, data.reason);
          break;
        default:
          return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: 'Unknown form type' }))
            .setMimeType(ContentService.MimeType.JSON);
      }

      sheet.appendRow(row);

      return ContentService
        .createTextOutput(JSON.stringify({ success: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  function doGet() {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'Running', endpoints: ['PrayerRequests', 'NewConverts', 'Partnerships', 'Contacts', 'Enrollments'] }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  ```

  10. In the Apps Script editor, go to **Project Settings** → add a script property:
      - Property: `key`
      - Value: (the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_KEY/edit`)

  11. Re-deploy: Deploy → Manage deployments → Edit pencil → New version → Deploy

  **Must NOT do**:
  - Do not share the Sheet publicly (only share with ministry emails)
  - Do not expose the Script editor login in code

  **QA Scenarios**:
  ```
  Scenario: Test the web app via curl
    Tool: Bash
    Steps:
      1. curl -X POST -H "Content-Type: application/json" -d '{"formType":"Contacts","fullName":"Test","email":"test@test.com","subject":"Test","message":"Hello"}' WEB_APP_URL
      2. Open the Google Sheet and verify a new row appears in Contacts tab
    Expected Result: Sheet has new row with timestamp + test data
  ```

  **Commit**: NO (Google setup, no code)

- [ ] 2. Update NewConvert.tsx — POST to web app

  **What to do**:
  Modify the `handleSubmit` function in `src/pages/NewConvert.tsx`:

  1. Add a constant at the top of the component (after `useState` lines):
     ```ts
     const WEB_APP_URL = 'https://script.google.com/macros/s/.../exec';
     ```

  2. Replace the simulated API call (lines 45-50):
     ```ts
     try {
       await new Promise(resolve => setTimeout(resolve, 2000));
       console.log('New Convert Form Submitted:', formData);
       setIsSuccess(true);
     }
     ```
     With:
     ```ts
     try {
       const response = await fetch(WEB_APP_URL, {
         method: 'POST',
         mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           formType: 'NewConverts',
           fullName: formData.fullName,
           email: formData.email,
           phone: formData.phone,
           location: formData.location,
           testimony: formData.testimony,
           prayerNeeds: formData.prayerNeeds
         })
       });
       setIsSuccess(true);
     }
     ```
     
  **Note**: `mode: 'no-cors'` means we can't read the response body, but the request still reaches the Apps Script. The success state shows regardless, which is fine UX since `no-cors` prevents us from detecting errors server-side. This is the standard pattern for Apps Script from static sites.

  **Must NOT do**:
  - Don't import any new libraries or dependencies
  - Don't change form UI or validation

  **QA Scenarios**:
  ```
  Scenario: Submit form and verify data in sheet
    Tool: Bash + manual verification (requires deployed script)
    Steps:
      1. Fill form in browser and submit
      2. Check Google Sheet → NewConverts tab for new row
    Expected Result: Row appears with all field data
  ```

  **Commit**: YES — `feat: connect new convert form to Google Sheets`
  - Files: `src/pages/NewConvert.tsx`

- [ ] 3. Update PrayerRequest.tsx — POST to web app

  **What to do**:
  Same pattern as Task 2 but for `src/pages/PrayerRequest.tsx`:

  1. Add `WEB_APP_URL` constant
  2. Replace the simulated API call block with:
     ```ts
     try {
       await fetch(WEB_APP_URL, {
         method: 'POST',
         mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           formType: 'PrayerRequests',
           firstName: formData.firstName,
           lastName: formData.lastName,
           email: formData.email,
           category: formData.category,
           request: formData.request
         })
       });
       setIsSuccess(true);
     }
     ```

  **Commit**: YES — `feat: connect prayer request form to Google Sheets`
  - Files: `src/pages/PrayerRequest.tsx`

- [ ] 4. Update Contact.tsx — POST to web app

  **What to do**:
  Same pattern for `src/pages/Contact.tsx`:

  1. Add `WEB_APP_URL` constant
  2. Replace the simulated API call with:
     ```ts
     try {
       await fetch(WEB_APP_URL, {
         method: 'POST',
         mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           formType: 'Contacts',
           fullName: formData.fullName,
           email: formData.email,
           subject: formData.subject,
           message: formData.message
         })
       });
       setIsSuccess(true);
     }
     ```

  **Commit**: YES — `feat: connect contact form to Google Sheets`
  - Files: `src/pages/Contact.tsx`

- [ ] 5. Update School.tsx — POST to web app

  **What to do**:
  Same pattern for `src/pages/School.tsx`:

  1. Add `WEB_APP_URL` constant
  2. Replace the simulated API call with:
     ```ts
     try {
       await fetch(WEB_APP_URL, {
         method: 'POST',
         mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           formType: 'Enrollments',
           fullName: formData.fullName,
           email: formData.email,
           phone: formData.phone,
           level: formData.level,
           reason: formData.reason
         })
       });
       setIsSuccess(true);
     }
     ```

  **Commit**: YES — `feat: connect enrollment form to Google Sheets`
  - Files: `src/pages/School.tsx`

- [ ] 6. Update Partnership.tsx — POST with image as base64

  **What to do**:
  This is the only form with a file upload. The approach:
  - Read the file as base64 using `FileReader`
  - Include the base64 string in the JSON payload
  - The Apps Script will store it in the sheet (as text — the cell will show the full string, but the ministry can view it)

  1. Add `WEB_APP_URL` constant
  2. Replace the simulated API call with:
     ```ts
     try {
       let pictureBase64 = '';
       if (formData.picture) {
         pictureBase64 = await new Promise((resolve) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result as string);
           reader.readAsDataURL(formData.picture as File);
         });
       }

       await fetch(WEB_APP_URL, {
         method: 'POST',
         mode: 'no-cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           formType: 'Partnerships',
           fullName: formData.fullName,
           email: formData.email,
           countryOfOrigin: formData.countryOfOrigin,
           countryOfResidence: formData.countryOfResidence,
           townOrRegion: formData.townOrRegion,
           contactNumber: formData.contactNumber,
           occupation: formData.occupation,
           monthlyPledge: formData.monthlyPledge,
           prayerPoint1: formData.prayerPoint1,
           prayerPoint2: formData.prayerPoint2,
           pictureBase64: pictureBase64
         })
       });
       setIsSuccess(true);
     }
     ```

  **Must NOT do**:
  - Don't resize or compress the image (keep original quality)
  - Don't store the base64 string in component state (it can be large)

  **Commit**: YES — `feat: connect partnership form to Google Sheets`
  - Files: `src/pages/Partnership.tsx`

---

## Final Verification Wave

- [ ] F1. **Build & Type Check**
  Run `npm run lint && npm run build`. Both must pass.

- [ ] F2. **Live Test All 5 Forms**
  Open the site (npm run dev), submit test data for each form, verify each appears in the correct sheet tab.

---

## Success Criteria
- [ ] Google Sheet receives data from all 5 forms
- [ ] Sheet has 5 separate tabs with proper column headers
- [ ] Partnership image is stored in the sheet
- [ ] `npm run lint && npm run build` passes
- [ ] Web app responds to `doGet` with status JSON
