console.log('----- First Task -----');
// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
const promptButton = document.querySelector('.prompt_button');
const linkButton = document.querySelector('.link_button');
let promptLink = '';

promptButton.addEventListener('click', () => {
    return promptLink = prompt('Enter page link');
});

linkButton.addEventListener('click', () => {
    if (promptLink === '') {
        alert('You do not enter a link!');
    } else {
        location.href = promptLink;
    }
});

console.log('----- Second Task -----');
// Створіть HTML-сторінку з декількома кнопками. 
// Ваше завдання - створити обробник подій для батьківського елементу, який відслідковуватиме кліки на всіх кнопках.
// 1. Створіть HTML-елементи: батьківський контейнер з декількома вкладеними кнопками.
// 2. Додайте обробник подій до батьківського контейнера, який відслідковуватиме кліки.
// 3. Після кліку на будь-якій кнопці, виведіть повідомлення про те, яка саме кнопка була клікнута.
const buttonsWrap = document.querySelector('.buttons_wrap');

buttonsWrap.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        alert('Click on ' + target.textContent);
    }
});

console.log('----- Third Task -----');
// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. 
// Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, 
// який дозволить видаляти завдання при кліку на них.
// Покроковий план:
// 1. Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// 2. Додайте обробник подій до списку завдань ul, використовуючи делегування.
// 3. При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// 4. Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const toDoList = document.querySelector('.todo_list');
const addNewTaskButton = document.querySelector('.addNewTask button');

toDoList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        target.closest('li').remove();
    }
});

addNewTaskButton.addEventListener('click', function (event) {
    const input = document.querySelector('.addNewTask input');
    if (input.value !== '') {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
            <p>${input.value}</p>
            <button>Remove task</button>
        `;
        toDoList.append(newLi);
    }
    input.value = '';
});
