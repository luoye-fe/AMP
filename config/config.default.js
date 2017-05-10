const dbConfig = require('./db.config.js');

module.exports = appInfo => {
	return {
		keys: 'AMP',
		middleware: ['errorHandler'],
		errorHandler: {
			match: '/api'
		},
		mongoose : {
			url: `mongodb://${dbConfig[appInfo.env].host}:${dbConfig[appInfo.env].port}/${dbConfig[appInfo.env].database}`,
			options: {
				user: dbConfig[appInfo.env].user,
				pass: dbConfig[appInfo.env].password
			}
		}
	};
}
