
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

// class PlayerTitle extends Model {
// 	init() {
// 		this.setTable('player_title');
// 	}
// }

// module.export = PlayerTitle;

// async function addPlayerTitle(player_id, title_id, decree = '', points = 0) {
// 	const new_player_title = await MapInfo.create({ player_id: player_id, title_id: title_id, decree: decree, points: points });
// 	console.log(new_player_title);
// }

// class MapInfo extends Model {
// 	init() {
// 		this.setTable('map_info');
// 	}
// }

// module.export = MapInfo;

// async function addMapInfo(map_name, map_description, map_info) {
// 	const new_map = await MapInfo.create({ name: map_name, description: map_description, info: map_info });
// 	console.log(new_map);
// }

// async function updateMapInfo(map_id, new_name = false, new_description = false, new_info = false) {
// 	const update_data = {};
// 	if (new_name != false) {
// 		update_data.title = new_name;
// 	}
// 	if (new_description != false) {
// 		update_data.description = new_description;
// 	}
// 	if (new_info != false) {
// 		update_data.points = new_info;
// 	}
// 	await MapInfo.update(update_data, map_id);
// }