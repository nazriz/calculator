


//Calcualtor functions

let ans

add = (num1,num2) => {
answer = (num1+num2)
console.log(answer)
}

subtract = (num1,num2) => {
   answer = (num1-num2)
   console.log(answer)
}

multiply = (num1,num2) => {
   answer= (num1*num2)
   console.log(answer)
}

divide = (num1,num2) => {
    answer = (num1/num2)
    console.log(answer)
}

// operate function



let operate = (clickObj) => {
    let operator = clickObj.target.innerText;
    switch(operator) {
        case "+":
        pendingValue = displayValue;
        displayValue = "0";
        display.innerText.displayValue;
        evalStringArray.push(pendingVal);
        evalStringArray.push("+")
            break;
        case "-":
            pendingValue = displayValue;
            displayValue = "0";
            display.innerText.displayValue;
            evalStringArray.push(pendingVal);
            evalStringArray.push("-")
            break;
        case "x":
            pendingValue = displayValue;
            displayValue = "0";
            display.innerText.displayValue;
            evalStringArray.push(pendingVal);
            evalStringArray.push("*")
            break;
        case "÷":
            pendingValue = displayValue;
            displayValue = "0";
            display.innerText.displayValue;
            evalStringArray.push(pendingVal);
            evalStringArray.push("/")
            break;
        case "=":
            evalStringArray.push(displayValue);
            let evaluate = eval(evalStringArray.join(" "));
            displayValue = evaluate + "";
            display.innerText = displayValue;
            evalStringArray = [];
        default:
            console.log("test");
    }
    
}


// Button Variables

let zeroBtn = document.getElementById("zero");
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let sevenBtn = document.getElementById("seven");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");

let periodBtn = document.getElementById("period");
let allClearBtn = document.getElementById("allClear");
let clearBtn = document.getElementById("clear");
let deleteBtn = document.getElementById("delete");

let display = document.getElementById('display');

let numBtn = document.getElementsByClassName("numBtn");
let opBtn = document.getElementsByClassName("opBtn");

let displayValue = "0"
let pendingValue;
let evalStringArray = [];


// display functions

let displayUpdate = (clickObj) => {
    let btnOutput = clickObj.target.innerText;

    if(displayValue === "0")
        displayValue = "";

    displayValue += btnOutput;
    display.innerText = displayValue;
}

// Event listeners

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', displayUpdate, false);
}

// for (let i = 0; i < opBtn.length; i++) {
//     opBtn[i].addEventListener('click', initiateOperator, false);
// }


allClearBtn.onclick = () => {
    displayValue = "0";
    pendingValue = undefined;
    evalStringArray = [];
    display.innerHTML = displayValue;
}

deleteBtn.onclick = () => {
    let displayValueLength = displayValue.length;
    displayValue = displayValue.slice(0, displayValueLength - 1);
    if (displayValue === "")
    displayValue = "0";
    display.innerText = displayValue;

}

periodBtn.onclick = () => {
    if (!displayValue.includes("."))
        displayValue += ".";
    display.innerText = displayValue;
}