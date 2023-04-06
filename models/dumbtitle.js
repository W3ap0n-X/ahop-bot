const { Model } = require('eloquify');

class DumbTitle extends Model {
	init() {
		this.setTable('dumb_title');
	}

	// getAll() {
	// 	getTitles();
	// }
}
async function getTitles() {
	const all_titles = await DumbTitle.all();
	console.log(all_titles);
}
module.exports.DumbTitle = DumbTitle;


module.exports.DumbTitle.getTitles = getTitles;

async function getTitleById(title_id) {
	const title = await DumbTitle.find(title_id);
	console.log(title);
	return title;
	// if (DumbTitle.stored()) {
	// 	return title;
	// } else {
	// 	return 'unable to retrieve title';
	// }
}
module.exports.DumbTitle.getTitleById = getTitleById;

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
module.exports.DumbTitle.addTitle = addTitle;