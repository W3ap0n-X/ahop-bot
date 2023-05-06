const { Events, ComponentType } = require('discord.js');


module.exports = {
	name: Events.createMessageComponentCollector,
	async execute(interaction) {
		const collector = interaction.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 3_600_000 });

		console.log('Made it here');

		collector.on('collect', async i => {
			const selection = i.values;
			console.log(selection);
			await i.reply(`${i.user} has selected ${selection}`);
		});
	},
};