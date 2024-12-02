document.addEventListener("selectionchange", () => {
  const selection = window.getSelection()?.toString().trim();
  if (selection) {
    chrome.runtime.sendMessage({
      action: "updateContextMenu",
      selectionText: selection,
    });
  }
});
