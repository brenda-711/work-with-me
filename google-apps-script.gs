/**
 * work with brenda, lead catcher.
 *
 * Paste this whole file into the Apps Script editor attached to your
 * Google Sheet (Extensions > Apps Script), then deploy it as a Web App.
 * Every form submission adds one row to the sheet. Full steps in SETUP.md.
 *
 * Columns: A Timestamp, B Name, C Email, D Need, E Details, F Budget,
 *          G STATUS (yours, manual, the script never touches it), H Source, I Page
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Need', 'Details', 'Budget', 'STATUS', 'Source', 'Page']);
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var p = e.parameter;
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.email || '',
      p.need || '',
      p.details || '',
      p.budget || '',
      '',
      p.source || '',
      p.page || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the /exec URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('work with brenda lead catcher is running.');
}
