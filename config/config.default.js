const dbConfig = require('./db.config.js');

module.exports = appInfo => {
	return {
		keys: 'AMP',
		middleware: ['errorHandler'],
		errorHandler: {
			match: '/api'
		},
		i18n: {
			enable: false
		},
		static: {
			enable: false
		},
		view: {
			enable: false
		},
		static: {
			enable: false
		},
		security: {
			ignore: '/api/',
			csrf: {
				ignoreJSON: true,
			}
		},
		mongoose: {
			url: `mongodb://${dbConfig[appInfo.env].host}:${dbConfig[appInfo.env].port}/${dbConfig[appInfo.env].database}`,
			options: {
				user: dbConfig[appInfo.env].user,
				pass: dbConfig[appInfo.env].password
			}
		}
	};
}
