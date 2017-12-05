function unixPathLiteral(string) {
	return string.replace(/\s/g, `\\ `)
		.replace(/'/g, `\\'`)
		.replace(/\(/g, `\\(`)
		.replace(/\)/g, `\\)`)
		.replace(/-/g, `\\-`)
		.replace(/&/g, `\\&`);
}
module.exports = unixPathLiteral;
