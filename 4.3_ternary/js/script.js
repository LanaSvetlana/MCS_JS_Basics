console.log('You are at '+window.location);

let num = prompt("Введите число");
num = parseInt(num);

(num >= 0) ? console.log(num) : console.log(Math.abs(num));

