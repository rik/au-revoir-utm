function removeUtms({ url }) {
    if (UTM.mayContain(url)) {
        return {
            redirectUrl: UTM.remove(url)
        }
    }
};

browser.webRequest.onBeforeRequest.addListener(
    removeUtms,
    {urls: ["<all_urls>"] },
    ['blocking']
);
