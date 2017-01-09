const Mongoose = require('mongoose');

const dbConfig = require('./db.config.js');
const env = require('../config/env.config.js');

Mongoose.connect('mongodb://' + dbConfig[env].host + ':' + dbConfig[env].port + '/' + dbConfig[env].database, {
	user: dbConfig[env].username,
	pass: dbConfig[env].password
});
