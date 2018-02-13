const utmPrefix = 'utm_'

class UTM {
    /**
    This is a very fast test to discard most of the requests.
    It will match URLs that do not contain UTM parameters but that's ok.
    */
    static mayContain(url) {
        return url.includes(utmPrefix)
    }

    static remove(url) {
        const parsedURL = new URL(url)
        for (let param of [...parsedURL.searchParams.keys()]) {
            if (param.startsWith(utmPrefix)) {
                parsedURL.searchParams.delete(param)
            }
        }

        const parsedFragment = new URLSearchParams(parsedURL.hash.substring(1))
        for (let param of [...parsedFragment.keys()]) {
            if (param.startsWith(utmPrefix)) {
                parsedFragment.delete(param)
            }
        }
        parsedURL.hash = parsedFragment.toString()

        return parsedURL.toString()
    }
}
