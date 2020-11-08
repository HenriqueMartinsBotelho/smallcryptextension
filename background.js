// chrome.tabs.onLoad.addListener((tab) => {
//   // chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
//   chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
//     console.log("i injected");
//   });
// });

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
//     console.log("i injected");
//   });
// });

// chrome.runtime.onInstalled.addListener(function () {
//   chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
//   chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
//     console.log("i injected");
//   });
// });
console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "hello",
  };
  //   console.log(tab);
  chrome.tabs.sendMessage(tab.id, msg);
}
