const unixPathLiteral = require('../index.js');

const command = `Project/ESPN Wimbledon 2017 -- CLONE/creative (version 1 & '2')/my-bash-script.sh`;
const output = {
	str: unixPathLiteral(command)
}
console.log(output);