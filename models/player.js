const mongoose = require('mongoose');
// const PlayerTitles = require('./playerTitle').init();
exports.model = function() {
	const playerSchema = new mongoose.Schema({
		user_id: String,
        user_name: String,
        roles: [String],
		k_id: { type: 'number', unique: true, required: true },
	});

	playerSchema.statics.count = async function() {
		const count = await this.find();
		return count.length;
	};

	return mongoose.model('Player', playerSchema);
};