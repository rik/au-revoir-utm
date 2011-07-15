if (/^\?utm_/.test(location.search) && history.replaceState){
    history.replaceState(null,'', location.href.replace(/\?utm_.*/,''));
}