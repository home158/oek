chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "sample-menu",
      title: "嘸蝦米查碼",
      contexts: ["all"]
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case "sample-menu":
        chrome.windows.create({
            url: "https://boshiamy.then.tw/query/"+info.selectionText,
            type: "popup",
            width: 800,
            height: 800
        }, (window) => {
            chrome.scripting.insertCSS({
              target: { tabId: window.tabs[0].id },
              files: ["styles.css"], // Path to your CSS file
            });

            chrome.scripting.executeScript({
              target: { tabId: window.tabs[0].id },
              files: ["script.js"]
            }, () => {
              console.log("JavaScript 插入成功");
            });            
        });
      break;
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateContextMenu" && message.selectionText) {
    chrome.contextMenus.update("sample-menu", {
      title: `嘸蝦米查碼: ${message.selectionText}`,
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Failed to update menu:", chrome.runtime.lastError);
      }
    });
  }
});
