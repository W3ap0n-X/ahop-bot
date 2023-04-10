const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();


function listUsersAndRoles(guildId) {
	return new Promise((resolve, reject) => {
		const client = new Client({ intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMembers,
		] });

		client.on('ready', async () => {
			console.log(`Logged in as ${client.user.tag}!`);

			const guild = await client.guilds.fetch(guildId).catch(() => null);
			if (!guild) {
				reject(new Error(`Guild with ID ${guildId} not found`));
				return;
			}

			const result = [];
			const members = await guild.members.fetch();
			for (const member of members.values()) {
				const roles = member.roles.cache.map(role => role.name);
				result.push(`${member.user.username} - ${roles.join(', ')}`);
			}

			resolve(result);
			client.destroy();
		});

		client.login(process.env.BOT_TOKEN);
	});
}

module.exports = listUsersAndRoles;
