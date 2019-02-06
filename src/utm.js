const utmPrefixes = ['utm_', 'fbclid']

class UTM {
    /**
    This is a very fast test to discard most of the requests.
    It will match URLs that do not contain UTM parameters but that's ok.
    */
    static mayContain(url) {
        return utmPrefixes.some(function(prefix) {
            return url.includes(prefix)
        }
    }

    static remove(url) {
        const parsedURL = new URL(url)
        for (let param of [...parsedURL.searchParams.keys()]) {
            if (utmPrefixes.some(function(prefix) { return param.startsWith(prefix); })) {
                parsedURL.searchParams.delete(param)
            }
        }

        const parsedFragment = new URLSearchParams(parsedURL.hash.substring(1))
        for (let param of [...parsedFragment.keys()]) {
            if (utmPrefixes.some(function(prefix) { return param.startsWith(prefix); })) {
                parsedFragment.delete(param)
            }
        }
        parsedURL.hash = parsedFragment.toString()

        return parsedURL.toString()
    }
}
