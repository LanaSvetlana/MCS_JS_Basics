console.log('You are at '+window.location);

const Page = document.querySelector('.page');

let Body = prompt('Какой фон у страницы?');
Page.style['background-color'] = Body;


const Color = document.querySelector('.page');

let text = prompt('Какой цвет текста у страницы?');
Color.style['color'] = text;


const Human = document.querySelector('.name');

let Name = prompt('Как зовут человека, который вас вдохновляет?');
Human.innerHTML = 'Алена Алехина';


const image = document.querySelector('img');
let address = prompt('Введите адрес картинки')
image.setAttribute('src', 'img/foto.jpg');



const Short = document.querySelector('.shortBio');

let Text = prompt('Введите текст страницы');
Short.innerHTML = 'Мне казалось, что каждая минута, которую я посвящала чему-то ещё, украдена у моей реабилитации. Тогда казалось, что я буду лишать себя тех малых шансов восстановиться, если буду отвлекаться хоть на что-то ещё.';


const Bio = document.querySelector('.shortBio');

Bio.className += ' animated';