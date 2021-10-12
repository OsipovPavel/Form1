'use strict';

let form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let password = document.querySelector('#password').value;
    let password1 = document.querySelector('#password1');
    if (password1.value===password) {
        password1.classList.remove('red-border');
        let email = document.querySelector('#email').value;
        alert (`На почту ${email} отправлено письмо с подтверждением`);
        form.submit();
    } else {
        alert(`Введенные пароли не совпадают!`);
        password1.classList.add('red-border');
    }
})