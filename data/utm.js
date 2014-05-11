if (/[?&]utm_/.test(location.search) && history.replaceState){
    // Replace the first of n>1 parameters
    var address = location.href.replace(/\?utm_[^&]*&/,'?');
    // Replace other parameters
    history.replaceState(null,'', address.replace(/[?&]utm_[^&]*/g,''));
}