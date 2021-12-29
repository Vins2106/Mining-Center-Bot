const Vgas = require("../../../../assets/VGA.json");

module.exports = {
	name: "vgas",
	description: "Show all VGA information",
	cooldown: 10,
	execute: async (message, args, client) => {
		message.reply(`All vga information [${Vgas.length}]
${Vgas.map(vga => `\`\`\`md
# ${vga.name}
# ${vga.description}
# Earning:
- Minimal: ${vga.chance[0]}
- Maximal: ${vga.chance[1]}
# Type:
- ${vga.type}
# Price: $${vga.price}
\`\`\``).join("")}`)
	}
}