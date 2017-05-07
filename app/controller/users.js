exports.index = async function() {
	// this.validate();
	this.body = await this.service.users.index(this.query);
	this.status = 200;
};
