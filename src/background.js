chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['node_modules/canvas-confetti/dist/confetti.browser.js']
    }, () => {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: function() {
                confetti();
            }
        });
    });
});
