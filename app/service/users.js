module.exports = app => {
	class UsersService extends app.Service {
		async index(params) {
			let users = await this.ctx.model.users.find({});
			let result = {};
			result.meta = { total: users.length };
			result.data = users;
			return result;
		}
	}
	return UsersService;
};
