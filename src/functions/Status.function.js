const Price = require("../price.js");

module.exports = (client) => {
	function setStatus() {
		client.setStatus({
			name: `Bitcoin price: $${Price.get("price").toLocaleString()}`,
			type: "WATCHING"
		})
	}

	setStatus();
	setInterval(() => {
		setStatus();
	}, 30 * 1000)
}