#!/usr/bin/env node
let insert = document.getElementById("conp").innerHTML= "This was inserted by JS";
function nameTap(tapper) {
    let showMessage = insert;
    console.log(tapper);
}
nameTap("This is the value of the function parameter");