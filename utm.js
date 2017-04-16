const needle = 'utm_';
const replace = /[?&]utm_.*/;

class UTM {
    /**
    This is a very fast test to discard most of the requests.
    It will match URLs that do not contain UTM parameters but that's ok.
    */
    static mayContain(url) {
        return url.includes(needle);
    }

    static remove(url) {
        return url.replace(replace, '');
    }
}
