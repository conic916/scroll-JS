'use strict';
document.body.style.height = 10000 + "px";
const myDiv = document.createElement("div");
document.body.appendChild(myDiv);
let size = 100;
let growRect = true;
//style 
myDiv.style.position = "fixed";
myDiv.style.top = 0;
myDiv.style.left = 0;
myDiv.style.backgroundColor = "green";
myDiv.style.height = size + "px";
myDiv.style.width = "100%";

// fonction pour changeHeight: 

const changeHeight = function () {
    if (size > window.innerHeight / 2) {
        growRect = !growRect; //false;
        myDiv.style.backgroundColor = "red";
    } else if (size <= 0) {
        growRect=!growRect; //true
        myDiv.style.backgroundColor = "black";
    }
    if (growRect) {
        size += 10;
    } else {
        size -= 10;
    }
    myDiv.style.height = size + "px";
};

window.addEventListener("scroll", changeHeight);