

iaEvent = "click";
if (typeof navigator !== "undefined" && navigator.app) {
   iaEvent = "tap";
}

$('.int-link').each.bind(iaEvent, function() {
    var linktarget = this.attr("href");
	 window.open(linktarget);
});

$('.int-linkB').each.bind(iaEvent, function() {
    var linktarget = this.attr("href");
    window.location=linktarget;
});

$('.int-linkC').each.bind(iaEvent, function() {
    var linktarget = this.attr("href");
    window.location.href=linktarget;
});


$('.ext-link').each.bind(iaEvent, function() {
    var linktarget = this.attr("href");
    if (typeof navigator !== "undefined" && navigator.app) {
        navigator.app.loadUrl(linktarget, {openExternal: true});
    } else {
        window.open(linktarget, "_blank");
    }
});