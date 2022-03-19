function doGet() {
  
  return HtmlService.createHtmlOutputFromFile('index');
}


function entriesMade(name, city, profession, age){
  let url = "https://docs.google.com/spreadsheets/d/1l-YPBUkrSS4tCwRUPnvU1dpUR2yVOw5PlZBeTp5A3qU/edit#gid=0";
  let currentsheet = SpreadsheetApp.openByUrl(url);
  let destinationsheet = currentsheet.getSheetByName("Sheet1");
  
  destinationsheet.appendRow([name, city, profession, age]);
    
}
