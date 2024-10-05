console.log('----- First Task -----');
// Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. 
// Використовуючи оператор typeof та console.log
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
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);
const name = prompt('Enter your name');
const age = prompt('Enter your age');
const phoneNumber = prompt('Enter your phone number');
console.log(`Hello ${name}! You are ${age} y.o. and phone number - ${phoneNumber}.`);

console.log('----- Third Task -----');
// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. 
// Приклад: 10369 -> 1 0 3 6 9
const number = 12345;
const newString = number.toString().split('').join(' ');
console.log('Was: ', number, ', Now: ', newString);