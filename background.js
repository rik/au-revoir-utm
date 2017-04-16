function removeUtms({ url }) {
    if (UTM.mayContain(url)) {
        return {
            redirectUrl: UTM.remove(url)
        }
    }
};

const browser = window.browser || window.chrome;
browser.webRequest.onBeforeRequest.addListener(
    removeUtms,
    {urls: ["<all_urls>"] },
    ['blocking']
);
