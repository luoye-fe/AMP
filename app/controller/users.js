exports.index = async function() {
	console.log(this.service);
	this.body = await this.service.users.index(this.params);
	this.status = 200;
};
