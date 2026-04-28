(async function runOnPopupOpened(){
    const [tabs] = await browser.tabs.query({
        active: true,
        currentWindow: true,
    });

    const executing = browser.scripting.executeScript({
        files: ["/background-script.js"],
        target:{
            tabId: tabs.id,
        },
    });

})();
