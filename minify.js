const Terser = require('terser');
const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
	const files = fs.readdirSync(dirPath);

	arrayOfFiles = arrayOfFiles || [];

	files.forEach((file) => {
		if (fs.statSync(dirPath + '/' + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
		} else {
			arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
		}
	});

	return arrayOfFiles.filter(path => path.match(/\.js$/));
}

function minifyFiles(filePaths) {
	filePaths.forEach(filePath => {
		const fileContent = fs.readFileSync(filePath, 'utf8');
		Terser.minify(fileContent).then(miniFile => {
			fs.writeFileSync(filePath, miniFile.code);
		});
	});
}

const files = getAllFiles('./dist');
minifyFiles(files);
