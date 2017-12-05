function unixPath(string) {
	return string.replace(/ /g, '\\ ')
		.replace(/'/g, "\\'")
		.replace(/\(/g, '\\(')
		.replace(/\)/g, '\\)')
		.replace(/-/g, '\\-')
		.replace(/&/g, '\\&');
}
module.exports = unixPath;