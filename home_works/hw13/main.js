console.log('----- First Task -----');
// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.

document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#exampleFormControlInput1');
    const message = document.querySelector('#exampleFormControlTextarea1');
    const phone = document.querySelector('#exampleFormControlInput2');
    const email = document.querySelector('#exampleFormControlInput3');

    let isValid = true;

    if (!name.value.trim()) {
        name.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        name.nextElementSibling.style.display = 'none';
    }

    if (message.value.trim().length < 5) {
        message.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        message.nextElementSibling.style.display = 'none';
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        phone.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        phone.nextElementSibling.style.display = 'none';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        email.nextElementSibling.style.display = 'none';
    }

    if (isValid) {
        const formData = new FormData(event.target);
        const formObj = {};

        formData.forEach((value, key) => formObj[key] = value)

        console.log(formObj);
    }
});