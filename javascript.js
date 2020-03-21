


//Calcualtor functions

let ans

add = (num1,num2) => {
   return num1+num2 }

subtract = (num1,num2) => num1-num2;

multiply = (num1,num2) => num1*num2;

divide = (num1,num2) => num1/num2;

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


operate("+",3,6)
