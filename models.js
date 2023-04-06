require('dotenv').config();


const { dbConfig } = require('eloquify');

dbConfig({
	driver: 'my-sql',
	user: 'aoe2bot',
	host: 'localhost',
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
});

const { Model } = require('eloquify');

class DumbTitle extends Model {
	init() {
		this.setTable('dumb_title');
	}
}

module.export = DumbTitle;

async function getTitles() {
	const all_titles = await DumbTitle.all();
	console.log(all_titles);
}

async function getTitleById(title_id) {
	const title = await DumbTitle.find(title_id);
	if (title.stored()) {
		return title;
	} else {
		return 'unable to retrieve title';
	}
}

async function updateTitle(title_id, new_title = false, new_description = false, new_points = false) {
	const update_data = {};
	if(new_title != false) {
		update_data.title = new_title;
	}
	if(new_description != false) {
		update_data.description = new_description;
	}
	if(new_points != false) {
		update_data.points = new_points;
	}
	await DumbTitle.update(update_data, title_id);
}

async function addTitle(title, description, points = 1) {
	const new_title = await DumbTitle.create({ title:title, description:description, points:points });
	console.log(new_title);
}

// addTitle('test2', 'another test');
// getTitles();

// updateTitle(1, 'Court Jester', 'a description goes here', 25);
// console.log(getTitleById(1));
// getTitles();