const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gettitle')
		.setDescription('Replies with a title from the database'),
	async execute(interaction) {
		const title = require('../index.js');
		const data = await title.getTitleById();

		await interaction.reply(`${data.title}`);
	},
};