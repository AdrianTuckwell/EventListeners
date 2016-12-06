var clickTotal = 1;

var app = function(){
  // querySelector will return the first element called button
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  // querySelector will return text that is entered
  var inputBox = document.querySelector('input');
  inputBox.onkeyup = handleKeyPress;

}

var handleKeyPress = function() {
  var pTag = document.querySelector('#text-result');
  var input = document.querySelector('input');
  pTag.innerText = input.value;
}

var handleButtonClick = function() {
  var pTag = document.querySelector('#button-result');
  pTag.innerText = "ive been clicked " + clickTotal + " times";
  clickTotal ++;
}






window.onload = app;