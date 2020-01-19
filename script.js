fetch(window.location.pathname, {
    'method': 'POST',
    'body': 'name=<b>asf</b>&user_id=2&_csrf_token=' + document.getElementsByName('_csrf_token')[0].value
})
