// console.log("hello banana");
// var username = prompt("Give me your name"); // input
// alert("give me your name");
// console.log("my name is: ", username)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");


function clickEventHandler(){
    outputDiv.innerText = "ajssjjsjsj" + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler)

// console.log(outputDiv.innerText);
// outputDiv.innerText = "not so much!";