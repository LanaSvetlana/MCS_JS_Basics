console.log('You are at '+window.location);

const myForm = document.forms[0];
    const mySpan = document.getElementsByTagName('span')[0];
    myForm.onsubmit = (e) => {
	e.preventDefault();
	let myAngle = parseFloat(myForm.elements.angle.value);
	mySpan.innerHTML = Math.sin((myAngle * Math.PI)/180);
}



//Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла. Вам понадобится найти этот метод объекта Math