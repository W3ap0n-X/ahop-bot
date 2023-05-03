const { SlashCommandBuilder, PermissionFlagsBits, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

const courtTitle = require('../models/courtTitle').init();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dubthee')
		.setDescription('Assign a court title to a user.')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {

		async function getTitles() {
			try {
				const titleList = [];
				const courtTitles = await courtTitle.find();

				courtTitles.forEach(title => {
					titleList.push({
						label: title.title,
						descript: title.description,
						value: title.title,
					});
				});

				const select = new StringSelectMenuBuilder()
					.setCustomId('courtTitleSelectMenu')
					.setPlaceholder('Select Court Title!')
					.addOptions(titleList);

				const row = new ActionRowBuilder()
					.addComponents(select);

				await interaction.reply({
					content: 'Select the Court Title',
					components: [row],
				});
			}
			catch (e) {
				console.error(e);
			}
		}
        getTitles();
	},
};
