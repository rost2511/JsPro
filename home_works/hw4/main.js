console.log('----- First Task -----')
// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач
const userName = prompt('Enter your name');
console.log(`Hello, ${userName}! How are you?`);

console.log('----- Second Task -----')
// Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
const userNumber = prompt('Enter a three-digit number');
const numberArray = userNumber.split('');
console.log('Your number = ', userNumber);
if ((numberArray[0] === numberArray[1]) && (numberArray[1] === numberArray[2])) {
    console.log('All numbers in your number are the same');
}
if ((numberArray[0] === numberArray[1]) || (numberArray[1] === numberArray[2]) || (numberArray[0] === numberArray[2])) {
    console.log('There are identical numbers among the numbers');
}

// console.log('----- Third Task -----')
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
// Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).
// Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
const yearOfBirth = prompt('Введіть рік Вашого народження');
const cityOfResidence = prompt('Введіть місто в якому проживаєте');
const favoriteSport = prompt('Введіть Ваш улюблений спорт');
let yearsOldString = null;
let cityOfResidenceString = null;
let favoriteSportString = null;
let alertString = null;

switch (yearOfBirth) {
    case null:
        alert('Шкода, що Ви не захотіли ввести свій рік народження(');
        yearsOldString = 'Ви не вказали свій рік народження(';
        break;
    default:
        yearsOldString = 'Тобі ' + ((new Date().getFullYear()) - yearOfBirth) + ' років!';
}

switch (cityOfResidence) {
    case null:
        alert('Шкода, що Ви не захотіли ввести своє місто(');
        cityOfResidenceString = 'Ви не вказали своє місто(';
        break;
    case 'Київ':
        cityOfResidenceString = 'Ти живеш у столиці України!';
        break;
    case 'Вашингтон':
        cityOfResidenceString = 'Ти живеш у столиці Америки!';
        break;
    case 'Лондон':
        cityOfResidenceString = 'Ти живеш у столиці Британії!';
        break;
    default:
        cityOfResidenceString = 'Ти живеш у місті ' + cityOfResidence;
}

switch (favoriteSport) {
    case null:
        alert('Шкода, що Ви не захотіли ввести свій улюблений спорт(');
        favoriteSportString = 'Ви не вказали свой улюблений спорт(';
        break;
    case 'Футбол':
        favoriteSportString = 'Круто! Хочеш стати як Лионель Месси?';
        break;
    case 'Теніс':
        favoriteSportString = 'Круто! Хочеш стати як Новак Джоковіч?';
        break;
    case 'Хоббіхорсінг':
        favoriteSportString = 'Круто! Хочеш стати як Розі Муларі?';
        break;
    default:
        favoriteSportString = favoriteSport + ' - це гарний спорт!';
}

alertString = `${yearsOldString} \n ${cityOfResidenceString}. \n ${favoriteSportString}`;

alert(alertString);


console.log('----- Fourth Task -----')
// Переписати код нижче з використанням конструкції switch…case
//     let numOrStr = prompt('input number or string');
//     console.log(numOrStr)


//     if (numOrStr === null) {
//         console.log('ви скасували')
//     } else if (numOrStr.trim() === '') {
//         console.log('Empty String');
//     } else if (isNaN(+numOrStr)) {
//         console.log(' number is Ba_NaN')
//     } else {
//         console.log('OK!')
//     }
let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}