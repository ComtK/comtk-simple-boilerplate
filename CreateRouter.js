const pagesDir = './src/pages/';
const routesDir = './router/';

const fse = require('fs-extra');

module.exports.create = async () => {
	const result = explorer(pagesDir);
};

const explorer = async (dir) => {
	const path = dir.replace(pagesDir, '/');
	const data = {
		importPath: [],
		routePath: [],
		element: [],
	};
	const files = await fse.readdir(dir);
	for (const file of files) {
		if (file.indexOf('.js') === -1) {
			const subDir = await explorer(dir + `${file}/`);
			data.importPath = [...data.importPath, ...subDir.importPath];
			data.routePath = [...data.routePath, ...subDir.routePath];
			data.element = [...data.element, ...subDir.element];
		} else {
			const element = file.replace('.js', '');
			data.importPath = [...data.importPath, `.${dir.substring(0, dir.length - 1)}/${element}`];
			data.routePath = [...data.routePath, `${path}${element}`];
			data.element = [...data.element, element];
		}
	}
	console.log(data);
	return data;
};
