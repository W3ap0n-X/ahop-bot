const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getmembers')
		.setDescription('Replies with members and their roles'),
	async execute(interaction) {
		const listUsersAndRoles = require('../listUsersAndRoles');
		require('dotenv').config();

		const guildId = process.env.GUILD_ID;
		listUsersAndRoles(guildId)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				interaction.reply(error);
				console.log(error);
			});
	},
};