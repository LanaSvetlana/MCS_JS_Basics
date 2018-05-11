console.log('You are at '+window.location);


let money = parseFloat(prompt('How much do you have?'))
let applesCount = parseInt(prompt('How many apples'))
let breadCount = parseFloat(prompt('How many bread'))
let sumApples = applesCount * parseFloat(prompt('Apple price'))
let sumBread = breadCount * parseFloat(prompt('Bread price'))
let result = money >= (sumApples + sumBread)
document.body.innerHTML = result