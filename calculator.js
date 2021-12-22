const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.

const number1 = prompt("Please enter the first number: ");
const number2 = prompt("Please enter the second number: ");
const operation = prompt("Please choose the operation (+, -, /, *): ");
console.log(`First number is ${number1}.`);
console.log(`Second number is ${number2}.`);
console.log(`The Operation is ${operation}.`);
let number3=0

if (isNaN(number1) && isNaN(number2)) {
    console.log("plesae enter right number")
}

else if (operation == "+"){
    number3=number1+number2
    console.log("number3")
}

else if (operation == "-"){
    number3=number1-number2
    console.log("number3")
}

else if (operation == "/"){
    number3=number1/number2
    console.log("number3")
}

else if (operation == "*"){
    number3=number1+number2
    console.log("number3")
}
else (
console.log("please enter right operation")
)
