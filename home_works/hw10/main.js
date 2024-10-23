console.log('----- First Task -----');
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.
const user = {
    name: 'John',
    age: 30,
    phoneNumber: '+380991231234',
    showUserInformation: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} = ${this[key]}`)
            }
        }
        return this;
    }
}

const showUser = user.showUserInformation();

console.log('----- Second Task -----');
// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, 
// в якому лише парні числа з оригінального масиву.
const arrayOriginal = [1, 2, 13, 44, 53, 88, 102];
const arrayOfPairedNumbers = [];

for (let number of arrayOriginal) {
    if (number % 2 === 0) {
        arrayOfPairedNumbers.push(number);
    }
}

console.log(`Original array = ${arrayOriginal}\nArray of paired numbers = ${arrayOfPairedNumbers}`
);

console.log('----- Third Task -----');
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const contactsBook = {
    contacts: [
        {
            name: 'Julia',
            phoneNumber: '+380991201213',
            email: 'julia@gmail.com'
        },
        {
            name: 'Peter',
            phoneNumber: '+380931234567',
            email: 'peter@gmail.com'
        },
        {
            name: 'Alex',
            phoneNumber: '+380973456789',
            email: 'alex@gmail.com'
        }
    ],

    getContactByName: function (name) {
        for (const contact of this.contacts) {
            if (contact.name === name) {
                return contact;
            }
        }
    },

    showInfoByName: function (name) {
        const contact = this.getContactByName(name);
        const contactInfo = `Name = ${contact.name} \nPhone Number = ${contact.phoneNumber} \nEmail = ${contact.email}`;
        return console.log(contactInfo);
    },

    setNewContact: function (name = 'undefined name', phoneNumber = 'undefined phone number', email = 'undefined email') {
        const newContact = { name, phoneNumber, email };
        this.contacts.push(newContact);
    },
}

contactsBook.showInfoByName('Julia');
contactsBook.showInfoByName('Peter');
contactsBook.showInfoByName('Alex');

contactsBook.setNewContact('Maria', '+380507234561', 'maria@gmail.com');
contactsBook.setNewContact('Andrew');

console.log(contactsBook.contacts);
