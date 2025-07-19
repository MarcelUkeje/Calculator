//Edge case for "add" is that ints have limited capacity.
//But then thinking about it, I think that is the case for all the other operations.

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

//The edge case for this one would be division by 0 and division by very small numbers
//Dividing two zeros give NaN while dividing by zero gives Infinity.
//I'll just display "Syntax Error" or something like that if number 2 === 0.
function divide(number1, number2){
    return number1 / number2;
}

//I'm currently thinking about making the parameters for these functions to be able to take as many arguments as possible.

function operate(sign, number1, number2){
    if (sign === "+"){
        return add(number1, number2);
    }
    else if(sign === "-"){
        return subtract(number1, number2);
    }else if(sign === "*"){
        return multiply(number1, number2);
    }else{
        return divide(number1, number2);
    }
}