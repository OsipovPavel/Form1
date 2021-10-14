'use strict';

let form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let table = document.querySelector('#table');
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let birthday = document.querySelector('#birthday').value;
    let male = document.querySelector('#male').checked;
    let country = document.querySelector('#country').value;
    let town = document.querySelector('#town').value;
    let skills = document.querySelector('.skills');
    let userSkills = '';

    // console.dir(skills.childNodes);
    let i=1;
    console.dir(skills.childNodes);
    while (i<skills.childNodes.length) {
        if (skills.childNodes[i].checked) {userSkills += skills.childNodes[i+2].innerText + ' ';}
        i += 4;
    }
    table.textContent='';
    table.insertAdjacentHTML('beforeend', `
    <caption>Результат</caption>
    <tr>
        <td>Имя</td>
        <td>${firstName}</td>
    </tr>
    <tr>
        <td>Фамилия</td>
        <td>${lastName}</td>
    </tr>
    <tr>
        <td>День рождения</td>
        <td>${birthday}</td>
    </tr>
    <tr>
        <td>Пол</td>
        <td>${male ? 'М' : 'Ж'}</td>
    </tr>
    <tr>
        <td>Страна</td>
        <td>${country}</td>
    </tr>
    <tr>
        <td>Город</td>
        <td>${town}</td>
    </tr>
    <tr>
        <td>Навыки</td>
        <td>${userSkills}</td>
    </tr>
    `);
    // form.submit();
})