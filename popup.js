
let printPage = document.getElementById("printPage");

chrome.storage.sync.get('color', function(data) {
  //changeColor.style.backgroundColor = data.color;
  //changeColor.setAttribute('value', data.color);
});


printPage.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id, {code: "printPagina()"}
      );
      //chrome.tabs.executeScript(
        //tabs[0].id, {code: "var head=document.head.innerHTML; document.head.innerHTML = ''; var body=document.body.innerHTML; window.print(); document.head.innerHTML = head;"}
      //);
    });
  };

