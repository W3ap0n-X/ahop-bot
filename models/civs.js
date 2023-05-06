const mongoose = require('mongoose');

exports.model = function () {
	const civsSchema = new mongoose.Schema({
		civ_name : String,
        game_id: { type:Number, default:0 },
	});

	return mongoose.model('Civs', civsSchema);
};
