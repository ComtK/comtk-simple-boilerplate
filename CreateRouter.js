const testFolder = './src/pages/';
const fs = require('fs');

module.exports.create = function () {
	console.log('__dirname', __dirname);
	fs.readdir(testFolder, (err, files) => {
		files.forEach((file) => {
			console.log(file);
		});
	});
};
