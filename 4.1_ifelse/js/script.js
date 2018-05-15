console.log('You are at '+window.location);

let num = prompt("Введите число");
num = parseInt(num);

if(num >= 0) {
	console.log(num);
}else {
	console.log(Math.abs(num));
}


