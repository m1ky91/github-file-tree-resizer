chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.command === "modifyMediaQuery") {
    console.log("receiving command");
    const sidebarWidth = request.value + "px";
    const style = document.createElement("style");
    style.innerHTML = `
      @media (min-width: 1012px) {
        .Layout {
          --Layout-sidebar-width: ${sidebarWidth};
        }
      }
      @media (min-width: 768px) {
        .Layout {
          --Layout-sidebar-width: ${sidebarWidth};
        }
      }
      @media (min-width: 544px) {
        .Layout {
          --Layout-sidebar-width: ${sidebarWidth};
        }
      }
    `;
    document.head.appendChild(style);
  }
});