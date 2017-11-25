function removeUtms({ url }) {
    if (!UTM.mayContain(url)) {
        return
    }

    const redirectUrl = UTM.remove(url)
    // Avoid infinite redirections
    // See https://github.com/rik/au-revoir-utm/issues/14
    if (redirectUrl === url) {
        return
    }

    return {
        redirectUrl,
    }
}

const browser = window.browser || window.chrome
browser.webRequest.onBeforeRequest.addListener(
    removeUtms,
    { urls: ['<all_urls>'] },
    ['blocking']
)
