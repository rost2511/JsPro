console.log('----- First Task -----');
const objectJohn = {
    name: 'John'
};
const symbol = Symbol('Hello');
console.log('null ', typeof null);
console.log('undefined ', typeof undefined);
console.log('true ', typeof true);
console.log('5 ', typeof 5);
console.log('"5" ', typeof '5');
console.log("const objectJohn = {name: 'John'}; ", typeof objectJohn);
console.log("const symbol = Symbol('Hello'); ", typeof symbol);
console.log('9007199254740991n ', typeof 9007199254740991n);

console.log('----- Second Task -----');
const name = prompt('Enter your name');
const age = prompt('Enter your age');
const phoneNumber = prompt('Enter your phone number');
console.log(`Hello ${name}! You are ${age} y.o. and phone number - ${phoneNumber}.`);

console.log('----- Third Task -----');
const number = 12345;
const newString = number.toString().split('').join(' ');
console.log('Was: ', number, ', Now: ', newString);