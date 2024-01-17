chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'confetti') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ['node_modules/canvas-confetti/dist/confetti.browser.js']
            }, () => {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    function: function() {
                        confetti();
                    }
                });
            });
        });
    }
});
