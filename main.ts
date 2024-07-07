import inquirer from "inquirer";

let myBalance = 5000000; //Dollar
let myPin = 20516;

let pinAnswer = await inquirer.prompt(
{
    name: "q1",
    message: "enter yupr pin",
    type: "number"
}
);

if (pinAnswer.q1 === myPin) {
console.log("Correct pin code!!!");

let operationAns = await inquirer.prompt(
    [
        {
            name:"operation",
            message:"please select option",
            type:"list",
            choices: ["withdraw", "check balance"]
        }
    ]
);
console.log(operationAns);

if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message:"enter your amount",
                type:"number"
            }
        ]
    );
    myBalance -= amountAns.amount;

    console.log("your remaining balance is: " + myBalance)

}else if (operationAns.operation === "check balance"){
    console.log("your balance is: " + myBalance)
}
}


else {
    console.log("Incorrect pin number");
}