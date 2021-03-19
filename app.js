//Imported Functions

import { handleAddClick, handleSubClick, handleMultClick, handleDivClick } from './handlers.js';
//Addition
const addButton = document.getElementById('add-button');
//Subtraction
const subButton = document.getElementById('subtract-button');

//Multiplication
const multButton = document.getElementById('multiply-button');

//Division
const divButton = document.getElementById('divide-button');

// set event listeners to update state and DOM

addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubClick);
multButton.addEventListener('click', handleMultClick);
divButton.addEventListener('click', handleDivClick);

//Simpler Calculator

const computeButton = document.getElementById('calculate');
const digitOne = document.getElementById('input1');
const digitTwo = document.getElementById('input2');
const answer = document.getElementById('solution');
const select = document.getElementById('selector');

let operator = '+';
select.addEventListener('change', (e) => {
    operator = e.target.value;
});

computeButton.addEventListener('click', () => {
    const x = digitOne.valueAsNumber;
    const y = digitTwo.valueAsNumber;
    if (operator === '+') {
        const solution = x + y;
        answer.textContent = solution;
    } else if (operator === '-') {
        const solution = x - y;
        answer.textContent = solution;
    } else if (operator === 'x') {
        const solution = x * y;
        answer.textContent = solution;
    } else if (operator === '/') {
        const solution = x / y;
        answer.textContent = solution;
    }
}
);
    
