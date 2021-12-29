const SetStatus = require("../../functions/Status.function.js");

module.exports = {
	name: "ready",
	run: async ({client}) => {
		require("../../functions/Price.function.js")();

		console.log(`[ready.js / LINE 4]: Bot online as ${client.user.tag}`);

		SetStatus(client);
	}
}