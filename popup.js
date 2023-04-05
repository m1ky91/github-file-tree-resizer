const sidebarRange = document.querySelector("#sidebar-range");
const sidebarValue = document.querySelector("#sidebar-value");

// Retrieve last modified value of slider from localStorage
const lastValue = localStorage.getItem("sidebarWidth");
if (lastValue) {
  sidebarRange.value = lastValue;
  sidebarValue.textContent = lastValue + "px";
}

sidebarRange.addEventListener("input", () => {
  const sidebarWidth = sidebarRange.value;
  sidebarValue.textContent = sidebarWidth + "px";

  // Store current value of slider in localStorage
  localStorage.setItem("sidebarWidth", sidebarWidth);
});

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const sidebarWidth = sidebarRange.value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: "content.js" },
      () => {
        chrome.tabs.sendMessage(tabs[0].id, {
          command: "modifyMediaQuery",
          value: sidebarWidth,
        });
      }
    );
  });
});