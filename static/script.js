let firstNumber = "";
let secondNumber = "";
let operation = "";
let isSecond = false;

function press(value) {

    if (['+','-','*','/'].includes(value)) {
        operation = value;
        isSecond = true;
        document.getElementById("display").value += value;
    } else {
        if (!isSecond) {
            firstNumber += value;
        } else {
            secondNumber += value;
        }
        document.getElementById("display").value += value;
    }
}

function clearDisplay(){
    firstNumber = "";
    secondNumber = "";
    operation = "";
    isSecond = false;
    document.getElementById("display").value = "";
}

async function calculate() {
    const response = await
    fetch("/calculate",{
         method: "POST", headers: { "Content-Type": "application/json" },
         body:JSON.stringify({
            num1 : firstNumber,
            num2 : secondNumber,
            operation:operation
        })
});

const data = await response.json();
document.getElementById("display").value =  data.result;
firstNumber = data.result.toString();
secondNumber = "";
operation = "";
isSecond = false;
}