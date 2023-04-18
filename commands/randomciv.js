const { SlashCommandBuilder } = require('discord.js');

const Civs = require('../models/civs').init();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomciv')
		.setDescription('Takes in a list of players and randomly assigns their civ to them!')
		.addStringOption(option =>
			option.setName('players')
				.setDescription('List players with comma seperating their names.')
				.setRequired(true)),
	async execute(interaction) {
		const players = interaction.options.getString('players');

		async function checkCivs() {
			try {
				const playerList = players.split(',');
				const civs = await Civs.find();
				const message = [];

				const trimmedPlayerList = playerList.map(player => player.trim());

				trimmedPlayerList.forEach(player => {
					const randomIndex = civs[Math.floor(Math.random() * civs.length)];
					message.push(`${player} will play: ${randomIndex.civ_name}\n`);
				});
				return message;
			}
			catch (e) {
				console.error(e);
			}

		}

		const getCivs = await checkCivs();
		const randomCivs = getCivs.join('');

		await interaction.reply(`${randomCivs}`);
	},
};