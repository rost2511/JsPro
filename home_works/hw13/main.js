document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Получаем поля
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
        console.log({
            name: name.value.trim(),
            message: message.value.trim(),
            phone: phone.value.trim(),
            email: email.value.trim()
        });
    }
});