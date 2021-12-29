module.exports = {
	name: "ping",
	description: "Pong!",
	cooldown: 5,
	aliases: ["pong", "poong"],
	execute: async (message, args, client) => {
		message.reply("Pong!");
	}
}