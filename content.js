document.addEventListener("mouseup", () => {
    // Get the selected text
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
  
    if (selectedText) {
      // Log the selected text
      console.log("Selected text:", selectedText);
  

    }
  });
  