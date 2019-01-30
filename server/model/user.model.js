var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
	dob: Date,
	post: [{type: Schema.Types.ObjectId, ref: 'post'}],
	password: String,
	friend: [{type: Schema.Types.ObjectId, ref: 'user'}]
});

module.exports = mongoose.model('user', userSchema);