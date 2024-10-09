console.log('----- First Task -----')
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.
function removeFromString(string, arrayOfRemoveLetters) {
    let resultStrind = '';
    for (let i = 0; i < string.length; i++) {
        if (!arrayOfRemoveLetters.includes(string[i])) {
            resultStrind += string[i];
        }
    }
    return resultStrind;
}

console.log(removeFromString('Hello world', ['e', 'l']));

console.log('----- Second Task -----')
// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function arithmeticMeanFromArray(array) {
    let sum = 0;
    let count = 0;
    for (let ell of array) {
        if (typeof ell === 'number') {
            sum += ell;
            count++;
        }
    }
    return sum / count;
}
console.log(`Cереднє арифметичне  масиву дорівнює `, arithmeticMeanFromArray([1, 7, 'hello', '', true, 12, 20, 'hello2']));

console.log('----- Third Task -----')
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array);  Результат: [1, 3, 6, 2, 5, 7]

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, number) {
    let newArray = [];
    for (let ell of array) {
        if (ell !== number) {
            newArray.push(ell);
        }
    }
    return newArray;
}
console.log(removeElement(array, 4));
