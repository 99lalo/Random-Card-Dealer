let first = document.getElementById("first");
let second = document.getElementById("second");
let rnumbers = document.getElementById("number");
let card = document.getElementById("card")

window.onload = function() {
    let number1 =  Math.floor(Math.random() * 4);
    let number2 =  Math.floor(Math.random() * 9) + 1;
    let icon = document.createElement("h1");
    let icon2 = document.createElement("h1");
    let number = document.createElement("h1");
    if(number1 === 0){
        icon.innerHTML = "&#9824;";
        icon2.innerHTML = "&#9824;";
    } else if(number1 === 1){
        icon.innerHTML = "&#9827;"
        icon2.innerHTML = "&#9827;"
    } else if(number1 == 2){
        icon.innerHTML = "&#9829;"
        icon2.innerHTML = "&#9829;"
        document.getElementById("first").style.color ="red";
        document.getElementById("second").style.color = "red";
    } else{
        icon.innerHTML = "&#9830;"
        icon2.innerHTML = "&#9830;"
        document.getElementById("first").style.color = "red";
        document.getElementById("second").style.color = "red";
    }
    number.innerHTML = number2;
    first.appendChild(icon);
    second.appendChild(icon2);
    rnumbers.appendChild(number);
}

