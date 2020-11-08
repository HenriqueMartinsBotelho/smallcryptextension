// executa sempre que uma página é carregada

console.log("gogoogoogoggogogogogo");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
}
