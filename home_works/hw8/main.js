console.log('----- First Task -----');
// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
// let ladder = {
//   up: function () { // підніматиме вас на одну сходинку
//   },
//   down: function () { // опускатиме вас на одну сходинку
//   },
//   showStep: function () { // показує поточну сходинку
//   }
// };
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
// ladder.up().up().down().showStep(); // 1
// Такий підхід широко використовується в бібліотеках JavaScript.

let ladder = {
    floor: 0,

    up: function () {
        this.floor++;
        return this;
    },
    down: function () {
        this.floor--;
        return this;
    },
    showStep: function () {
        return this.floor;
    }
};

console.log(ladder.up().up().down().showStep());