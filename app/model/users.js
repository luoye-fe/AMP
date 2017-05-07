module.exports = mongoose => {
	const UserSchema = new mongoose.Schema({
		userName: { type: String },
		email: { type: String },
		password: { type: String },
		createTime: { type: Number, default: Date.now() }
	});

	return mongoose.model('Users', UserSchema);
};
