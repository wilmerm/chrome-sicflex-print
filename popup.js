
let printPage = document.getElementById("printPage");
var empresa = {}




printPage.onclick = function(element) {

    chrome.storage.sync.get(null, function(data) {
      empresa = data;
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, {code: "onPrint()"}
      );
    });
  };

