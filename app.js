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

//Addition
const valueOne = document.getElementById('num1');
const valueTwo = document.getElementById('num2');
const addButton = document.getElementById('add-button');
const display1 = document.getElementById('add');
//Subtraction
const valueThree = document.getElementById('num3');
const valueFour = document.getElementById('num4');
const subButton = document.getElementById('subtract-button');
const display2 = document.getElementById('subtract');
//Multiplication
const valueFive = document.getElementById('num5');
const valueSix = document.getElementById('num6');
const multButton = document.getElementById('multiply-button');
const display3 = document.getElementById('multiply');
//Division
const valueSeven = document.getElementById('num7');
const valueEight = document.getElementById('num8');
const divButton = document.getElementById('divide-button');
const display4 = document.getElementById('divide');

// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    const inputOne = valueOne.valueAsNumber;
    const inputTwo = valueTwo.valueAsNumber;
    const sum = inputOne + inputTwo;
    display1.textContent = sum;
    //console.log(sum);
});

subButton.addEventListener('click', () => {
    const inputThree = valueThree.valueAsNumber;
    const inputFour = valueFour.valueAsNumber;
    const difference = inputThree - inputFour;
    display2.textContent = difference;
   //console.log(difference);
});

multButton.addEventListener('click', () => {
    const inputFive = valueFive.valueAsNumber;
    const inputSix = valueSix.valueAsNumber;
    const product = inputFive * inputSix;
    display3.textContent = product;
    //console.log(product);
});

divButton.addEventListener('click', () => {
    const inputSeven = valueSeven.valueAsNumber;
    const inputEight = valueEight.valueAsNumber;
    const quotient = inputSeven / inputEight;
    display4.textContent = quotient;
    //console.log(quotient);
});


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

