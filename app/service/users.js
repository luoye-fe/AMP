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
			}).sort({ createTime: -1 }).limit(limit).skip((page - 1) * limit);
			let result = {};
			result.meta = {
				total: users.length
			};
			result.data = users;
			return result;
		}
	}
	return UsersService;
};
