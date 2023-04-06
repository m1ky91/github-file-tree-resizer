function modifyMediaQuery(value) {
  const sidebarWidth = value + "px";
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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === "modifyMediaQuery") {
    modifyMediaQuery(request.value);
  }
});