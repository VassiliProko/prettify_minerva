chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('enabled', (data) => {
        if (data.enabled === undefined) {
            chrome.storage.local.set({ enabled: true });
        }
    });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { hostEquals: 'horizon.mcgill.ca' }
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});