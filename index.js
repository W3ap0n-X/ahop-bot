// Required packages
const fs = require('node:fs');
const path = require('node:path');
const mongoose = require('mongoose');
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');

// const { dbConfig } = require('eloquify');
require('dotenv').config();
db_connection();

// Define Client and intents
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMembers,
] });

// Bot commands are collected and stored.

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {


	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	}
	else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(process.env.BOT_TOKEN);


// dbConfig({
// 	driver: 'my-sql',
// 	user: 'aoe2bot',
// 	host: 'localhost',
// 	database: process.env.DB_NAME,
// 	password: process.env.DB_PASS,
// });

// const { Model } = require('eloquify');

// class DumbTitle extends Model {
// 	init() {
// 		this.setTable('dumb_title');
// 	}
// }

// module.export = DumbTitle;

// async function getTitles() {
// 	const all_titles = await DumbTitle.all();
// 	console.log(all_titles);
// }

// async function getTitleById(title_id = 1) {
// 	const title = await DumbTitle.find(title_id);
// 	if (title.stored()) {
// 		return title;
// 	}
// 	else {
// 		return 'unable to retrieve title';
// 	}
// }

// async function updateTitle(title_id, new_title = false, new_description = false, new_points = false) {
// 	const update_data = {};
// 	if (new_title != false) {
// 		update_data.title = new_title;
// 	}
// 	if (new_description != false) {
// 		update_data.description = new_description;
// 	}
// 	if (new_points != false) {
// 		update_data.points = new_points;
// 	}
// 	await DumbTitle.update(update_data, title_id);
// }

// async function addTitle(title, description, points = 1) {
// 	const new_title = await DumbTitle.create({ title:title, description:description, points:points });
// 	console.log(new_title);
// }

async function db_connection() {
	await mongoose.connect('mongodb://aoe2_ctw_test:' + process.env.DB_PASS + '@127.0.0.1:27017/aoe2_ctw_test');
}