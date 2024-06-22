#! bin/usr/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter scond number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform opration",
        type: "list",
        name: "operator",
        choices: ["Addition", "Multiplication", "Subtration", "Division"],
    },
]);
// conditinal statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtration") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    // console.log("Please select valid opretor")
}
