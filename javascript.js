


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

operate = (operator,num1,num2) => {
    switch(operator) {
        case "+":
            add(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
        default:
            console.log("test");
    }
    
}


// Button Variables

let oneBtn = document. 

// display functions

let display = document.getElementById('display');
let displayedContent = document.createTextNode("0");
display.appendChild(displayedContent);

let seven = document.getElementById('seven');

// Event listeners

document.getElementById("seven").addEventListener("click", )



