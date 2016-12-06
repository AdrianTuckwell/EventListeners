var clickTotal = 0;

var app = function(){
  // querySelector will return the first element called button
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

}

var handleButtonClick = function() {

  var pTag = document.querySelector('#button-result');
  pTag.innerText = "ive been clicked " + clickTotal + " times";
  clickTotal ++;



}






window.onload = app;