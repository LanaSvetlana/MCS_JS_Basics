console.log('You are at '+window.location);


//let money = parseFloat(prompt('How much do you have?'))
//let applesCount = parseInt(prompt('How many apples'))
//let breadCount = parseFloat(prompt('How many bread'))
//let sumApples = applesCount * parseFloat(prompt('Apple price'))
//let sumBread = breadCount * parseFloat(prompt('Bread price'))
//let result = money >= (sumApples + sumBread)
//document.body.innerHTML = result





let haveEnough = (money, applesCount, breadCount, applePrice, breadPrice) => {
	let totalApples = appleCount*applePrice;
	let totalBread = breadCount*breadPrice;
	let result = money >= (totalApples+totalBread);
	let answerString;
	if(result) {
		answerString = 'Yo have have enough'
	} else {
		answerString = 'Yo do not have enough'
	}
	return answerString;
}
console.log(haveEnough(1000, 4, 2, 30, 40));
console.log(haveEnough(30, 4, 2, 30, 40));
//let money = prompt('how much?'); 
