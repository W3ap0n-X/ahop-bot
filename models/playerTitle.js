const mongoose = require('mongoose');
// const CourtTitleSchema = require('./courtTitle').getSchema();
// const CourtTitle = require('./courtTitle').init();
exports.model = function() {
	const playerTitleSchema = new mongoose.Schema({
		court_title: { type: mongoose.ObjectId, ref: 'CourtTitle' },
		decree: String,
		points: { type:Number, default:0 },
		of: String,
        k_id: String,
	});

	// courtTitleSchema.methods.speak = function speak(msg = false) {
	// 	if (msg == false) {
	// 		const greeting = this.name ? '[' + this.name + '] "Meow name is ' + this.name + '"' : '[Subject-' + this.id + '] "I don\'t have a name..."';
	// 		console.log(greeting);
	// 	}
	// 	else {
	// 		console.log('[' + (this.name ? this.name : 'Subject-' + this.id) + '] "' + msg + '"');
	// 	}
	// };
	// mongoose.
	return mongoose.model('PlayerTitle', playerTitleSchema);
};