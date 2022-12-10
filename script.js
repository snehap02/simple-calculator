const display = document.querySelector('.calc_display');
const clear = document.getElementById('clear');
const keys = document.querySelector('.num-key');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.key-equal');

clear.addEventListener('click', () => {
    display.innerText = " ";
})

function show(input){
    display.innerText += input
}

function dec(){
    if(!display.innerText.includes('.')){
        display.innerText = `${display.innerText}.`;
    }
}
decimal.addEventListener('click', dec);

// function calc(){
//     let output = eval(display.innerText);
//     output = display.innerText;
// }

equal.addEventListener('click', () => {
    let next = display.innerText;
    display.innerText= eval(next);
})







