#!/usr/bin/env node
let insert = document.getElementById("conp").innerHTML= "This was inserted by JS";
function nameTap(tapper) {
    let showMessage = insert;
    console.log(tapper);
}
nameTap("This is the value of the function parameter");


let secureKey = "Encrypted_Key"
function callKey(pundit) {
    console.log(`${pundit} ${secureKey}`);
    return pundit;
}

callKey("This is the classfied key:");
let stdout = document.getElementsByClassName("asap")[0].innerHTML= `${callKey("This is the classfied key:")} ${ secureKey}`;