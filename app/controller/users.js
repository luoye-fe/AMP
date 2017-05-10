exports.index = async function() {
	this.body = await this.service.users.index(this.query);
	this.status = 201;
};

exports.show = async function() {
	this.body = await this.service.users.show(this.params);
	this.status = 201;
};
