exports.index = async function (ctx) {
	await wait();
	ctx.body = 'hello world!';
};

function wait() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}
