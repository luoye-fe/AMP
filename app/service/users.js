const filterResponse = {
	userName: 1,
	email: 1,
	_id: 0
};

module.exports = app => {
	class UsersService extends app.Service {
		async index(query) {
			const limit = parseInt(query.limit) || 10;
			const page = parseInt(query.page) || 1;
			const email = query.email || '';
			let users = await this.ctx.model.users.find({
				$or: [{
					email: new RegExp('.*' + email + '.*', 'i')
				}]
			}, filterResponse).sort({ createTime: -1 }).limit(limit).skip((page - 1) * limit);
			let result = {};
			result.meta = {
				total: users.length
			};
			result.data = users;
			return result;
		}
		async show(params) {
			let users = await this.ctx.model.users.find({
				_id: params.id
			}, filterResponse);
			let result = {};
			result.meta = { total: users.length };
			result.data = users;
			return result;
		}
	}
	return UsersService;
};
