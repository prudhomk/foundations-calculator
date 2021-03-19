// import functions and grab DOM elements
//Future drop down implementation
//const computeButton = document.getElementById('calculate');
//const digitOne = document.getElementById('input1');
//const digitTwo = document.getElementById('input2');
//const operatorOne = document.getElementById('a');
//const operatorTwo = document.getElementById('b');
//const operatorThree = document.getElementById('c');
//const operatorFour = document.getElementById('d');
//const answer = document.getElementById('solution');
//Imported Functions

import { handleAddClick, handleSubClick, handleMultClick, handleDivClick } from './handlers.js';

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
   
//computeButton.addEventListener('click', () => {
//    const x = digitOne.valueAsNumber;
//    const y = digitTwo.valueAsNumber;
//
//    if (mainOperator = operatorOne) {
//   const solution = x + y;
//    answer.textContent = solution;
//}
//
//});

