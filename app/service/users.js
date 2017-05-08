const resultFilter = {
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
			}, resultFilter).sort({ createTime: -1 }).limit(limit).skip((page - 1) * limit);
			let result = {};
			result.meta = {
				total: users.length
			};
			result.data = users;
			return result;
		}
		async show(params) {
			if (!/^[0-9a-fA-F]{24}$/.test(params.id)) {
				// it's not a valid ObjectId
				return {
					error: 123
				}
			}
			let users = await this.ctx.model.users.find({
				_id: params.id
			}, resultFilter);
			let result = {};
			result.meta = { total: users.length };
			result.data = users;
			return result;
		}
	}
	return UsersService;
};
