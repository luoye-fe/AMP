module.exports = {
	mongoose: {
		enable: true,
		package: 'egg-mongoose',
	},
	validate: {
		enable: true,
		package: 'egg-validate'
	},
	static: {
		enable: false
	},
	security: {
		ignore: '/api/',
		csrf: {
			ignoreJSON: true,
		}
	}
};
