console.log('----- First Task -----');
// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 4
// console.log(sum(10)); // 4
// console.log(sum(7)); // 4
function getSum() {
    let sum = 0;

    return function (number) {
        sum += number;
        return sum;
    };
}
const sum = getSum();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

console.log('----- Second Task -----');
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function sum2Numbers(number1) {
    return function (number2) {
        return number1 + number2;
    };
}
console.log(sum2Numbers(5)(2));


console.log('----- Third Task -----');
// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу). 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. 
// Якщо користувач вводить більше ста або текст цикл закінчує всі ітерації, 
// то функція виводить в консоль останній введення користувача і завершує функцію.

function getNumberMore100() {
    let number = 0;
    for (let i = 0; i < 10; i++) {
        let userNumber = prompt('Enter number more 100');
        if (userNumber < 100) {
            number = userNumber;
        } else {
            number = userNumber;
            break;
        }
    }

    return number;
}

console.log(getNumberMore100());
