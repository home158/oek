document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.getElementById("greetButton") as HTMLButtonElement;

    if (greetButton) {
        greetButton.addEventListener("click", () => {
            alert("Hello, World!");
        });
    }

    // 使用 chrome-types 型別，操作 Chrome API
    chrome.runtime.getPlatformInfo((info) => {
        console.log("Platform Info:", info);
    });

       
      let helloWorld:string = "Hello World";

      interface User {
        name: string;
        id: number;
      }
      const user: User = {
          name: "Hayes",
          id: 0
      };
      
});
