# work with brenda, setup (10 minutes, no coding)

Two files matter here:

- **index.html**: the form people fill out (host it on a personal account, see "hosting" below)
- **google-apps-script.gs**: the tiny script that drops every submission into a Google Sheet

Connect them once, then it runs itself. Use your PERSONAL Google account for the sheet, this is a personal project.

## step 1: make the spreadsheet
1. Go to https://sheets.new
2. Name it **work with brenda, leads**
3. Leave it empty. The script writes the headers on the first submission.

## step 2: add the script
1. In the sheet: **Extensions** > **Apps Script**
2. Delete the code in the box, paste everything from **google-apps-script.gs**
3. Save (Cmd+S)

## step 3: publish it
1. **Deploy** > **New deployment** > gear next to "Select type" > **Web app**
2. Execute as: **Me**. Who has access: **Anyone**
3. **Deploy**, authorize with your Google account (Advanced > Go to project > Allow is normal for your own scripts)
4. Copy the **Web app URL** (ends in `/exec`)

## step 4: connect the form
Tell Claude: "paste this url into the work with brenda form: https://script.google.com/macros/s/.../exec"
(or open index.html and set `const LEADS_ENDPOINT = "...";` near the top), then publish the page again wherever you host it (personal account only, not the First Chair Vercel).

## step 5: test it
Open the live url, submit once, check the sheet. Column G (STATUS) is yours for notes like "replied" or "booked".

## sharing
Link in bio version with tracking (shows up in the Source column): add
`?utm_source=instagram&utm_medium=bio&utm_campaign=workwithme` to whatever url you end up hosting it at.

## hosting
Not on the First Chair Vercel. Personal options, all free:
- Netlify Drop (https://app.netlify.com/drop): drag this folder in, done, you get a url
- a personal Vercel account (sign up with your personal email, then `vercel deploy --prod` from this folder)
- GitHub Pages from a personal GitHub repo
