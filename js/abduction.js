var abduction = document.getElementsByTagName("abduction")[0];

abduction.addEventListener("submit", function(e) {

  e.preventDefault();

  sendData();

});



// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript

function sendData() {

  var XHR = new XMLHttpRequest();

  var urlEncodedData = "";

  var urlEncodedDataPairs = [];



  urlEncodedDataPairs.push(

    encodeURIComponent("name") +

      "=" +

      encodeURIComponent(form.querySelector("[name='name']").value)

  );

  urlEncodedDataPairs.push(

    encodeURIComponent("send_to") +

      "=" +

      encodeURIComponent(form.querySelector("[name='send_to']").value)

  );

  urlEncodedDataPairs.push(

    encodeURIComponent("email") +

      "=" +

      encodeURIComponent(form.querySelector("[name='email']").value)

  );