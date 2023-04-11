chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.get(tab.tabId, (currentTab) => {
      if (currentTab.url.includes('github.com')) {
        chrome.action.setBadgeText({text: 'ON'});
      } else {
        chrome.action.setBadgeText({text: ''});
      }
    });
  });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});