// Функция для события onclick кнопки "Формы заказа продукта или услуги"
function validationNotification(event) {
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const telNumber = document.getElementById("telephone_number1");
    const destination = document.getElementById("destination");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const quantity = document.getElementById("quantity");

    if (firstName.value === "" || lastName.value === "" || telNumber.value === "" || destination.value === "" || date.value === "" || time.value === "" || quantity.value === "") {
        alert("Все поля формы должны быть заполнены!!!");
        event.returnValue = false;
        return;
    }
    else if (firstName.style.color === 'red' || lastName.style.color === 'red' || telNumber.style.color === 'red' || destination.style.color === 'red'|| date.style.color === 'red' || time.style.color === 'red' || quantity.style.color === 'red') {
        alert("Одно или несколько полей заполнены неверно!!!");
        event.returnValue = false;
        return;
    }

    const notification = `Вы точно хотите сделать следующий заказ?\nИмя: ${firstName.value}\nФамилия: ${lastName.value}\nНомер телефона: ${telNumber.value}\n` +
    `Место назначения: ${destination.value}\nДата и время: ${date.value}  ${time.value}\nКоличество: ${quantity.value}`;
    
    if (!confirm(notification)) {
        event.returnValue = false;
    }
}

// Функция для события onclick кнопки "Формы заказа обратного звонка"
function notification(event) {
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telNumber = document.getElementById("telephone_number2").value;
    const theme = document.getElementById("theme").value;
    const isEnoughData = fullName !== "" && email !== "" && telNumber !== "" && theme !== "";
    
    if (isEnoughData) {
        const notification = `Вы точно хотите сделать следующий заказ?\nИмя: ${fullName}\nE-mail: ${email}\nНомер телефона: ${telNumber}\n` +
        `Интересующая тема: ${theme}`;

        if (!confirm(notification)) {
            event.returnValue = false;
        }
    }
}


// Функция валидации поля "Имя"
function validateFirstName() {
    const firstName = document.getElementById("first_name");
    const regex = /^[А-Яа-яЁёA-Za-z]{2,15}$/;

    if (regex.test(firstName.value)) {
        firstName.style.color = 'black';
        return true;
    }
    else {
        firstName.style.color = 'red';
        return false;
    }
}

// Функция валидации поля "Фамилия"
function validateLastName() {
    const lastName = document.getElementById("last_name");
    const regex = /^[А-Яа-яЁёA-Za-z]{2,20}$/;

    if (regex.test(lastName.value)) {
        lastName.style.color = 'black';
        return true;
    }
    else {
        lastName.style.color = 'red';
        return false;
    }
}

// Функция валидации поля "Номер телефона"
function validateTelephoneNumber() {
    const telNumber = document.getElementById("telephone_number1");
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (regex.test(telNumber.value)) {
        telNumber.style.color = 'black';
        return true;
    }
    else {
        telNumber.style.color = 'red';
        return false;
    }
}
// Функция валидации поля "Место назначения"
function validateDestination() {
    const destination = document.getElementById("destination");
    const regex = /^[0-9А-Яа-яA-Za-z/,.\s\-]{5,50}$/;

    if (regex.test(destination.value)) {
        destination.style.color = 'black';
        return true;
    }
    else {
        destination.style.color = 'red';
        return false;
    }
}
// Функция валидации поля "Количество"
function validateQuantity() {
    const quantity = document.getElementById("quantity");
    const regex = /^[0-9]{1,3}$/;

    if (regex.test(quantity.value)) {
        quantity.style.color = 'black';
        return true;
    }
    else {
        quantity.style.color = 'red';
        return false;
    }
}

// Добавление JS кода к элементам

// Реализация исчезания остальных блоков при нажатии на один из них в "Что Вам необходимо?"
// Количества нажатий на блок 1, 2 и 3 соответственно
let count1 = 0;
let count2 = 0;
let count3 = 0;
// Флаги, указывающие на то, что блоки стали невидимыми
let isFirstBlockDisappeared = false;
let isSecondBlockDisappeared = false;
let isThirdBlockDisappeared = false;

// Функция, реализующая исчезание 2 и 3 элементов при нажатии на 1
function elements23Disappear() {
    if (!isFirstBlockDisappeared) {
        const secondBlock = document.getElementById("second_block");
        const thirdBlock = document.getElementById("third_block");
        count1++;
        
        if (count1%2 !== 0) {
            secondBlock.style.opacity = 0;
            thirdBlock.style.opacity = 0;
            isSecondBlockDisappeared = true;
            isThirdBlockDisappeared = true;
        }
        else {
            secondBlock.style.opacity = 1;
            thirdBlock.style.opacity = 1;
            isSecondBlockDisappeared = false;
            isThirdBlockDisappeared = false;
        }
    }
}

// Функция, реализующая исчезание 1 и 3 элементов при нажатии на 2
function elements13Disappear() {
    if (!isSecondBlockDisappeared) {
        const firstBlock = document.getElementById("first_block");
        const thirdBlock = document.getElementById("third_block");
        count2++;
        
        if (count2%2 !== 0) {
            firstBlock.style.opacity = 0;
            thirdBlock.style.opacity = 0;
            isFirstBlockDisappeared = true;
            isThirdBlockDisappeared = true;
        }
        else {
            firstBlock.style.opacity = 1;
            thirdBlock.style.opacity = 1;
            isFirstBlockDisappeared = false;
            isThirdBlockDisappeared = false;
        }
    }
}

// Функция, реализующая исчезание 1 и 2 элементов при нажатии на 3
function elements12Disappear() {
    if (!isThirdBlockDisappeared) {
        const firstBlock = document.getElementById("first_block");
        const secondBlock = document.getElementById("second_block");
        count3++;

        if (count3%2 !== 0) {
            firstBlock.style.opacity = 0;
            secondBlock.style.opacity = 0;
            isFirstBlockDisappeared = true;
            isSecondBlockDisappeared = true;
        }
        else {
            firstBlock.style.opacity = 1;
            secondBlock.style.opacity = 1;
            isFirstBlockDisappeared = false;
            isSecondBlockDisappeared = false;
        }
    }
}

// Реализация изменения фона формы "Форма заказа обратного звонка"
function changeColor() {
    const form = document.getElementById("form2");

    form.style.backgroundColor = "#eca3f8";
}

function returnColor() {
    const form = document.getElementById("form2");

    form.style.backgroundColor = "#ecf3f8";
}