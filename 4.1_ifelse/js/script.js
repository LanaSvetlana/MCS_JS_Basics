console.log('You are at '+window.location);

let num = prompt("Введите число");
num = parseFloat(num);

if(num >= 0) {
	console.log(num);
}else {
	console.log(-num);
}
