var mongoose = require('mongoose');
var Schema = mongoose.Schema;

	var postSchema = new Schema({
		content: String,
		datetime: {type:Date, default: Date.now},
		publish: String,
		author: String
	});
module.exports = mongoose.model('post', postSchema);