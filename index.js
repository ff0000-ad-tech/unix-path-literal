function unixPath(string) {
	return string.replace(/\s/g, `\\ `)
		.replace(/'/g, `\\'`)
		.replace(/\(/g, `\\(`)
		.replace(/\)/g, `\\)`)
		.replace(/-/g, `\\-`)
		.replace(/&/g, `\\&`);
}
module.exports = unixPath;
