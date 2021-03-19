import { test } from './example.test.js';
import { add, sub, mult, div } from './utilities.js';

test('add two numbers', (expect) => {
    const expected = 4;
    const actual = add(2, 2);
    expect.equal(actual, expected);
});

test('subtract two numbers', (expect) => {
    const expected = 4;
    const actual = sub(8, 2);
    expect.equal(actual, expected);
});

test('multiply two numbers', (expect) => {
    const expected = 4;
    const actual = mult(2, 2);
    expect.equal(actual, expected);
});

test('divide two numbers', (expect) => {
    const expected = 4;
    const actual = div(4, 2);
    expect.equal(actual, expected);
});