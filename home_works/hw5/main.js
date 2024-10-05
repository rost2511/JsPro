console.log('----- First Task -----')
// for (let i = 20; i <= 30; i += .5) {
//     console.log(i);
// }

console.log('----- Second Task -----')
// for (let i = 10; i <= 100; i += 10) {
//     console.log(i + '$ = ' + (i * 26) + ' uah');
// }

console.log('----- Third Task -----')
// const userNumber = +prompt('Enter a number');
// for (let i = 1; i <= 100; i++) {
//     if (Math.pow(i, 2) <= userNumber) {
//         console.log(`Квадрат числа ${i} дорівнює ${Math.pow(i, 2)} і не перевищує ${userNumber} !`);
//     }
// }

console.log('----- Fourth Task -----')
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


        // if (userSimpleNumber % i === 0) {
        //     console.log(`${userSimpleNumber} is not a simple number!`);
        //     break;
        // } else {
        //     console.log(`${userSimpleNumber} is a simple number!`);
        //     break;
        // }
    }
}
