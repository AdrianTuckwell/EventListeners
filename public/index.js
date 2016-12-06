var clickTotal = 1;

var app = function(){
  // querySelector will return the first element called button
  var button = document.querySelector('button');
  // handleButtonClick is an event handler
  button.onclick = handleButtonClick;

  // querySelector will return text that is entered
  var inputBox = document.querySelector('input');
  // handleKeyPress is an event handler
  inputBox.onkeyup = handleKeyPress;

  var selectBox = document.querySelector('select');
  // handleSelectChanged is an event handler
  selectBox.onchange = handleSelectChanged;
}

  var handleSelectChanged = function(event){
    //event is a free object that can be used to get additional infor about the method...
    console.log("Select list, has pressed:" , event.target.value);
    var pTag = document.querySelector('#select-result');
    // this is the select box and the value is what is selected...
    pTag.innerText = this.value;
  }

  var handleKeyPress = function() {
    var pTag = document.querySelector('#text-result');
    // var input = document.querySelector('input');
    //console.log(this);
    pTag.innerText = this.value;
  }

  var handleButtonClick = function() {
    var pTag = document.querySelector('#button-result');
    pTag.innerText = "ive been clicked " + clickTotal + " times";
    clickTotal ++;  
  }






window.onload = app;