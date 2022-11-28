// const buttons = document.querySelectorAll('button');
// const inputDisplay = document.querySelector('h1');
// const clearButton = document.getElementById('clearBtn');
// const toggle = document.getElementById('toggle');
// const container = document.querySelector('.calculator-container');


// // 🟡calculate first and second values depending on operator
// const calculate = {
//     '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

//     '*': (firstNumber, secondNumber) => firstNumber * secondNumber,

//     '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

//     '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

//     '=': (firstNumber, secondNumber) => secondNumber
// };


// let firstValue = 0;
// let operatorValue = '';
// let waitingNextValue = false;


// // 🟡this function will run whenever we click a button and a number is send to the display 
// function sendNumberValues(number){
//     // 🟡Replace current display value if first value is entered.
//     if(waitingNextValue){
//         inputDisplay.textContent = number;
//         waitingNextValue = false;
//     }else{
//         // 🟡if current value is 0, replace it, if not add number
//         const displayVal = inputDisplay.textContent;
//         inputDisplay.textContent = displayVal === '0' ? number : displayVal + number;
//     }
// }


// // 🟡For Decimal
// function addDec(){
//     // 🟡if operator is pressed, dont add decimal
//     if(waitingNextValue) return;
//     // 🟡if no decimal, add one
//     if(!inputDisplay.textContent.includes('.')){
//         inputDisplay.textContent = `${inputDisplay.textContent}.`;
//     }
// }


// // 🟡For operators
// function operatorFunc(operator){
//     const currValue = Number(inputDisplay.textContent);
//     // 🟡prevent multiple operator
//     if(operatorValue && waitingNextValue){
//         operatorValue = operator;
//         return;
// }
//     // 🟡 assign firstValue , if no value exist
//     if(!firstValue){
//         firstValue = currValue;
//     }else{
//         //stores the calculations
//         const calculations = calculate[operatorValue](firstValue, currValue);
//         inputDisplay.textContent = calculations;
//         firstValue = calculations;
//     }
//     // 🟡 next value store ,operator
//     //this will trigger after we press the operator, by default it is declared false.
//     waitingNextValue = true;
//     operatorValue = operator;
// }


// // 🟡Reset all values and the Display
// function resetBtn(){
//     firstValue = 0;
//     operatorValue = '';
//     waitingNextValue = false;
//     inputDisplay.textContent = '0';
// }


// // 🟡Add event listeners for operators, numbers and decimal.
// buttons.forEach((inputButton) => {
//     if(inputButton.classList.length === 1){
//         inputButton.addEventListener('click', () => sendNumberValues(inputButton.value));
//     }else if(inputButton.classList.contains('operator')){
//         inputButton.addEventListener('click', () => operatorFunc(inputButton.value));
//     }else if(inputButton.classList.contains('decimal')){
//         inputButton.addEventListener('click', () => addDec());
//     }
// });


// // 🟡reset event listener
// clearButton.addEventListener('click', resetBtn);


// // 🟡light-dark mode
// toggle.onclick = function(){
//     toggle.classList.toggle('active');
//     container.classList.toggle('active');
// }