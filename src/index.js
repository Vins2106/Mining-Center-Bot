module.exports = () => {
	const Discord = require("djst-client");
	const client = new Discord.Client({
		intents: ["GUILDS", "GUILD_MESSAGES"],
		prefix: process.env.PREFIX,
		messages: {
			cooldown: "You have cooldown (**{cdTime}**) in **{command}**"
		},
		config: {
			messages: {
				cooldown: true
			}
		},
		initCommands: true		
	});
	client.login(process.env.TOKEN);

	// events handler
	require("./events/handler.js")(client);
	require("./commands/handler.js")(client);
}