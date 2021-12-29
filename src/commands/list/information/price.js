const Price = require("../../../price.js");

module.exports = {
	name: "price",
	description: "Give current bitcoin price",
	cooldown: 5,
	execute: async (message, args, client) => {
		message.reply(`Current price: **$${Price.get('price').toLocaleString()}**\n__Update every 3 hours__`)
	}
}