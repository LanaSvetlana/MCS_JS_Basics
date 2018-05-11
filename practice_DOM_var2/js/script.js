console.log('You are at '+window.location);

const back = prompt('Какой будет фон у страницы?');
const textColor = prompt('Какой будет цвет текста на странице?');
const name = prompt('Как зовут человека, который вас вдохновляет');
const imgURL = prompt('Введите адрес картинки');
const pageText = prompt('Введите текст страницы');

const body = document.body
const page = document.querySelector('.page');
const personName = document.querySelector('.name');
const image = document.querySelector('.imageBlock img');
const bio = document.querySelector('.shortBio');

body.style.backgroundColor = back;
page.style.color = textColor;
personName.innerHTML = name;
image.setAttribute('src', imgURL);
bio.innerHTML = pageText;


const Animation = document.querySelector('.shortBio');
Animation.className += ' animated';