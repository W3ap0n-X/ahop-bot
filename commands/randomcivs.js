const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomciv')
		.setDescription('Gets a list of players, and assigns random civilizations to them'),
	async execute(interaction) {
		const civs = ['Aztecs', 'Bengalis', 'Berbers', 'Bohemians', 'Britons', 'Bulgarians', 'Burgundians', 'Burmese', 'Byzantines', 'Celts', 'Chinese', 'Cumans', 'Dravidians', 'Ethiopians', 'Franks', 'Goths', 'Gurjaras', 'Hindustanis', 'Huns', 'Incas', 'Italians', 'Japanese', 'Khmer', 'Koreans', 'Lithuanians', 'Magyars', 'Malay', 'Malians', 'Mayans', 'Mongols', 'Persians', 'Poles', 'Portuguese', 'Saracens', 'Sicilians', 'Slavs', 'Spanish', 'Tatars', 'Teutons', 'Turks', 'Vietnamese', 'Vikings'];

        await interaction.reply(civs[3]);
	},
};

