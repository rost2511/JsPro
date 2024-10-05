console.log('----- First Task -----')
// Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)
for (let i = 20; i <= 30; i += .5) {
    console.log(i);
}

console.log('----- Second Task -----')
// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
for (let i = 10; i <= 100; i += 10) {
    console.log(i + '$ = ' + (i * 26) + ' uah');
}

console.log('----- Third Task -----')
// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
const userNumber = +prompt('Enter a number');
for (let i = 1; i <= 100; i++) {
    if (Math.pow(i, 2) <= userNumber) {
        console.log(`Квадрат числа ${i} дорівнює ${Math.pow(i, 2)} і не перевищує ${userNumber} !`);
    }
}

console.log('----- Fourth Task -----')
// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
const userSimpleNumber = +prompt('Enter a simple number');
if (userSimpleNumber < 2) {
    console.log(`${userSimpleNumber} is not a simple number!`);
} else if (isNaN(userSimpleNumber)) {
    console.log(`You enter not a number!`);
} else {
    for (let i = 2; i <= userSimpleNumber; i++) {
        if (userSimpleNumber === 2 || userSimpleNumber % i !== 0) {
            console.log(`${userSimpleNumber} is a simple number!`);
            break;
        } else {
            console.log(`${userSimpleNumber} is not a simple number!`);
            break;
        }
    }
}
