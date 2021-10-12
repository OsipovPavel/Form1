'use strict';

let form = document.querySelector('#form');

form.addEventListener('submit', () => {
    // event.preventDefault();
    let login = document.querySelector('#login').value;
    let remember = document.querySelector('#remember');
    alert(`Привет, ${login}! Я тебя ${remember.checked && 'запомнил' || 'не запомнил'}`);
})