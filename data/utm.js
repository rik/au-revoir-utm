if (/[?&]utm_/.test(location.href) && history.replaceState){
    history.replaceState(null,'', location.href.replace(/[?&]utm_.*/,''));
}