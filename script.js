

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");

//var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverurl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverurl + "?" + "text=" + input;
}


function errorHandler(error){
console.log("error occured", error);
alert("something is wrong with server! try again after some time");
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))// go fetch the url
    .then(Response => Response.json())// convert the response into json
    //.then(json =>console.log(json.contents.translated))
    .then(json => outputDiv.innerText = json.contents.translated)// from the translated jason take the translated txt and show it into output
    .catch(errorHandler)// if some error occurs we can catch it
    
}


// function clickEventHandler(){
//     outputDiv.innerText = "ajssjjsjsj" + txtInput.value;
// }

btnTranslate.addEventListener("click", clickHandler)