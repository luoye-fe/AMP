const mongoose = require('mongoose');

const models = require('./models.js');

const Schema = mongoose.Schema;

for (let item in models) {
	mongoose.model(item, new Schema(models[item]));
}

module.exports = function(type) {
	return mongoose.model(type);
};
