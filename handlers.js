import { add, sub, mult, div } from './test/utilities.js';

const valueOne = document.getElementById('num1');
const valueTwo = document.getElementById('num2');
const display1 = document.getElementById('add');

const valueThree = document.getElementById('num3');
const valueFour = document.getElementById('num4');
const display2 = document.getElementById('subtract');

const valueFive = document.getElementById('num5');
const valueSix = document.getElementById('num6');
const display3 = document.getElementById('multiply');

const valueSeven = document.getElementById('num7');
const valueEight = document.getElementById('num8');
const display4 = document.getElementById('divide');

export function handleAddClick() {
    const inputOne = valueOne.valueAsNumber;
    const inputTwo = valueTwo.valueAsNumber;
    const sum = add(inputOne, inputTwo);
    display1.textContent = sum;
}

export function handleSubClick() {
    const inputThree = valueThree.valueAsNumber;
    const inputFour = valueFour.valueAsNumber;
    const difference = sub(inputThree, inputFour);
    display2.textContent = difference;
}

export function handleMultClick() {
    const inputFive = valueFive.valueAsNumber;
    const inputSix = valueSix.valueAsNumber;
    const product = mult(inputFive, inputSix);
    display3.textContent = product;
}

export function handleDivClick() {
    const inputSeven = valueSeven.valueAsNumber;
    const inputEight = valueEight.valueAsNumber;
    const quotient = div(inputSeven, inputEight);
    display4.textContent = quotient;
}