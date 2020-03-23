


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


operate("*",3,6)
