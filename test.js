window.addEventListener('load', function () {
  
    document.getElementById("name").value = "<b>Hello</b>";
    document.forms[0].action="/settings";
    document.forms[0].submit();
   })
