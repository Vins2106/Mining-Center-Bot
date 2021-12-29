const Price = require("../price.js");

module.exports = () => {
	Price.set('price', getRandomInt(0, getRandomInt(100, 999999)));
	setInterval(() => {
		const curPrice = getRandomInt(0, getRandomInt(100, 999999))
		Price.set('price', curPrice);
		console.log(`[Price.function.js / LINE 7]: price changed to $${curPrice.toLocaleString()}`);
	}, 1.08e+7)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}