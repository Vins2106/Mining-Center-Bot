const fs = require("fs");

module.exports = (client) => {
	fs.readdir("src/events/list", (err, files) => {
		files.forEach(file => {
			const event = require(`./list/${file}`);
			if (!event) return;
			if (!event.name) return;
			if (!event.run) return;
			client.on(event.name, (...args) => {
				event.run({...args, client});
			})
		});
	})
}