function doPost(e) {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Form Responses 1");
  const user = e.parameter.user;
  const action = e.parameter.action;

  if (action === "deleteLast") {
    deleteLast(user);
  }

  if (action === "deleteAll") {
    deleteAll(user);
  }

  return ContentService.createTextOutput("OK");
}

function deleteLast(user) {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Form Responses 1");
  const data = sheet.getDataRange().getValues();

  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][1] === user) {   // column B = nickname
      sheet.deleteRow(i + 1);
      return;
    }
  }
}

function deleteAll(user) {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Form Responses 1");
  const data = sheet.getDataRange().getValues();

  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][1] === user) {
      sheet.deleteRow(i + 1);
    }
  }
}
