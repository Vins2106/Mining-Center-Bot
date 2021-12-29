const fs = require("fs");

module.exports = (client) => {
	fs.readdir("src/commands/list", (err, folders) => {
		folders.forEach(folder => {
			fs.readdir(`src/commands/list/${folder}`, (err, files) => {
				const module = require(`./list/${folder}/module.json`);
				if (!module) return;

				files.forEach(file => {
					if (!file.endsWith('.js')) return;

					const command = require(`./list/${folder}/${file}`);
					if (!command) return;
					if (!command.execute) return;

					client.createCommand({
						...command,
						category: module.name
					});
				});
			});
		})
	})
}