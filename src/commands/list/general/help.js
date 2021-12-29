const { MessageEmbed } = require("djst-client");

module.exports = {
	name: "help",
	description: "Show all commands",
	cooldown: 10,
	aliases: ["commands"],
	execute: async (message, args, client) => {
		const modules = client.getModules();
		const embed = new MessageEmbed()
		.setColor("#FFD700")
		.setAuthor(client.user.username, client.user.displayAvatarURL())

		modules.map(mod => {
			embed.addField(mod.name, `${mod.cmds.map(cmd => `\`\`\`md
# ${cmd.name}${!cmd.aliases ? '\n- No aliases' : `\n- ${cmd.aliases.join(", ")}`}
\`\`\``).join("")}`, true)
		})

		message.reply({
			embeds: [embed]
		});
	}
}