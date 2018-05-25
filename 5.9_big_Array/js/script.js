console.log('You are at '+window.location);

//При помощи любых циклов for переберите его так, чтобы в консоль вывели все птицы и животные


let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]

for(firstLevel of names) {
	//console.log(firstLevel);
	firstLevel.forEach((secondLevel)=> {
		//console.log(secondLevel);
		for(itemIndex in secondLevel) {
			console.log(secondLevel[itemIndex]);
		}
	});
}
