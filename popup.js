// var printPage = document.getElementById("printPage");

// printPage.onclick = function(event) {
//   chrome.storage.sync.get(null, function(data) {
//     let empresa = data;

//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { action: "print" });
//     });
//   });
// };
