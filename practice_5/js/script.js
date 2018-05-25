console.log('You are at '+window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const bitcoinTitle = document.querySelector('.bitcoin .title');
const etherTitle = document.querySelector('.ethereum .title');
const liteTitle = document.querySelector('.litecoin .title');

const bitcoinP = document.querySelector('.bitcoin .price');
const etherP = document.querySelector('.ethereum .price');
const liteP = document.querySelector('.litecoin .price');

const bitcoinLevel = document.querySelector('.bitcoin .level');
const etherLevel = document.querySelector('.ethereum .level');
const liteLevel = document.querySelector('.litecoin .level');

bitcoinTitle.innerHTML = crypto[0].name
etherTitle.innerHTML = crypto[1].name
liteTitle.innerHTML = crypto[2].name

bitcoinP.innerHTML = crypto[0].price
etherP.innerHTML = crypto[1].price
liteP.innerHTML = crypto[2].price

bitcoinLevel.style.width = crypto[0].price + 'px';
etherLevel.style.width = crypto[1].price + 'px';
liteLevel.style.width = crypto[2].price + 'px';



