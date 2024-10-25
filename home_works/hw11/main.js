console.log('----- First Task -----');
// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
const table = document.createElement('table');
document.querySelector('#task1').appendChild(table);
for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 1; j <= 10; j++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = i * j;
    }
}

console.log('----- Second Task -----');
// Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір
const text = document.querySelector('.task2-text');
const button = document.querySelector('.task2-button');
button.addEventListener('click', () => {
    text.classList.toggle('blueColor');
});

console.log('----- Third Task -----');
// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)
const img = document.createElement('img');
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const imgNumber = getRandomInt(1, 9);
img.src = `img/${imgNumber}.jpg`;
img.alt = 'Random meme';
document.querySelector('.task3-text').textContent = `Random image number ${imgNumber}!`;
document.querySelector('#task3').appendChild(img);