const pagesDir = './src/pages/';
const routesDir = './router/';

const fse = require('fs-extra');

module.exports.create = async () => {
	const result = await explorer(pagesDir);

	const reactDefault = `import React from 'react'; \nimport { Route, Routes } from 'react-router-dom';`;

	let imp = '';
	result.importPath.map((path, index) => {
		imp = imp + `import ${result.element[index]} from ${path};\n`;
	});

	let routeList = '';
	result.routePath.map((route, index) => {
		routeList = routeList + `<Route path={'${route}'} element={< ${result.element[index]} />} />\n`;
	});

	const routes = `const CustomRouter = () => {\n
		return (\n
			<Routes>\n
				${routeList}
			</Routes>\n
		);\n
	};\n\n

	export default CustomRouter;`;

	const router = reactDefault + `\n` + imp + `\n` + routes;

	console.log(router);

	const file = 'index.js';
	fs.writeFile(routesDir + file, router, 'utf8', function (err) {
		if (err) throw err;
		console.log('write end');
	});
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
			data.importPath = [...data.importPath, `'.${dir.substring(0, dir.length - 1)}/${element}'`];
			data.routePath = [...data.routePath, `${path}${element}`];
			data.element = [...data.element, element];
		}
	}
	return data;
};
