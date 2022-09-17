
let printPage = document.getElementById("printPage");
var empresa = {}


printPage.onclick = function(event) {

    chrome.storage.sync.get(null, function(data) {
      empresa = data;
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      //chrome.scripting.executeScript(tabs[0].id, { code: "onPrint()" });
      chrome.scripting.executeScript({
        target: { tabId: tabs.id },
        func: onPrint,
        args: [],
      });

    });
  };

