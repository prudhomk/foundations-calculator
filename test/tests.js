import { add, sub, mult, div } from './utilities.js';

const test = QUnit.test;

test('add two numbers', (expect) => {
    const expected = 4;
    const actual = add(2, 2);
    expect.equal(actual, expected);
});

test('subtract two numbers', (expect) => {
    const expected = 2;
    const actual = sub(6, 4);
    expect.equal(actual, expected);
});

test('multiply two numbers', (expect) => {
    const expected = 4;
    const actual = mult(2, 2);
    expect.equal(actual, expected);
});

test('divide two numbers', (expect) => {
    const expected = 2;
    const actual = div(4, 2);
    expect.equal(actual, expected);
});