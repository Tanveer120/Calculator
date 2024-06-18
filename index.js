let keys = document.querySelectorAll(".key");   
let mulKey = document.querySelector(".mulKey");
let addKey = document.querySelector(".addKey");
let subKey = document.querySelector(".subKey");
let divKey = document.querySelector(".divKey");
let eqlKey = document.querySelector(".eqlKey");
let clear = document.querySelector("#clear");

let dispText = document.querySelector(".dispText");


let operator = ""

console.log(keys)

for(let key of keys) {
    key.addEventListener("click",() => {
        if (dispText.textContent === "0") {
            dispText.textContent = String(key.id);
        }
        else {
            dispText.textContent += String(key.id);
        }
        
    });
}


addKey.addEventListener("click", () => {
    let str = dispText.textContent;
    if (str.slice(-1) === "+" || str.slice(-1) === "-" || str.slice(-1) === "*" || str.slice(-1) === "/") {
        let str2 = str.slice(0, -1) + "+";
        dispText.textContent = str2;
        return;
    }
    for (let character in dispText.textContent) {
        if (operator === "") {
            operator = "+";
            dispText.textContent += "+";
            break;
        }
        else {
            callResult();
            operator = "+";
            dispText.textContent += "+";
            break;
        }
    }
})

mulKey.addEventListener("click", () => {
    let str = dispText.textContent;
    if (str.slice(-1) === "+" || str.slice(-1) === "-" || str.slice(-1) === "*" || str.slice(-1) === "/") {
        let str2 = str.slice(0, -1) + "*";
        dispText.textContent = str2;
        return;
    }
    for (let character in dispText.textContent) {
        if (operator === "") {
            operator = "*";
            dispText.textContent += "*";
            break;
        }
        else {
            callResult();
            operator = "*";
            dispText.textContent += "*";
            break;
        }
    }
})

subKey.addEventListener("click", () => {
    let str = dispText.textContent;
    if (str.slice(-1) === "+" || str.slice(-1) === "-" || str.slice(-1) === "*" || str.slice(-1) === "/") {
        let str2 = str.slice(0, -1) + "-";
        dispText.textContent = str2;
        return;
    }
    for (let character in dispText.textContent) {
        if (operator === "") {
            operator = "-";
            dispText.textContent += "-";
            break;
        }
        else {
            callResult();
            operator = "-";
            dispText.textContent += "-";
            break;
        }
    }
})

divKey.addEventListener("click", () => {
    let str = dispText.textContent;
    if (str.slice(-1) === "+" || str.slice(-1) === "-" || str.slice(-1) === "*" || str.slice(-1) === "/") {
        let str2 = str.slice(0, -1) + "/";
        dispText.textContent = str2;
        return;
    }
    for (let character in dispText.textContent) {
        if (operator === "") {
            operator = "/";
            dispText.textContent += "/";
            break;
        }
        else {
            callResult();
            operator = "/";
            dispText.textContent += "/";
            break;
        }
    }
})


eqlKey.addEventListener("click", () => {
    let str = dispText.textContent;
    if (str.slice(-1) === "+" || str.slice(-1) === "-" || str.slice(-1) === "*" || str.slice(-1) === "/") {
        let str2 = str.slice(0, -1);
        dispText.textContent = str2;
        operator = "";
        return;
    }
    if (operator === "") {
        
    }
    else {
        callResult();
    }
})

function callResult() {
    let firstNumFlag = true;
    let firstNum = "";
    let secondNum = "";
    for (let character in dispText.textContent) {
        if (dispText.textContent[character] === "+" || dispText.textContent[character] === "-" || dispText.textContent[character] === "*" || dispText.textContent[character] === "/") {
            operator = dispText.textContent[character];
            firstNumFlag = false;
            continue;
        }
        if (firstNumFlag) {
            firstNum += dispText.textContent[character];
        }
        else {
            secondNum += dispText.textContent[character];
        }
        
    }

    if (operator === "/" && secondNum === "0") {
        dispText.textContent = "0";
        operator = "";
    }
    if (operator === "+") {
        dispText.textContent = `${parseInt(firstNum) + parseInt(secondNum)}`;
        operator = "";
        // return output;
    }
    else if (operator === "-") {
        dispText.textContent = `${parseInt(firstNum) - parseInt(secondNum)}`;
        operator = "";
        // return firstNum - secondNum;
    }
    else if (operator === "*") {
        dispText.textContent = `${parseInt(firstNum) * parseInt(secondNum)}`;
        operator = "";
        // return firstNum * secondNum;
    }
    else if (operator === "/") {
        dispText.textContent = `${parseInt(firstNum) / parseInt(secondNum)}`;
        operator = "";
        // return firstNum / secondNum;
    }

}


clear.addEventListener("click", () => {
    dispText.textContent = "0";
    operator = "";
})




