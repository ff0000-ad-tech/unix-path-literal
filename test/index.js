const unixPathLiteral = require('../index.js');

const command = `Project/ESPN Wimbledon 2017 -- CLONE/creative (version 1 & '2')/my-bash-script.sh`;

// literal
const literal = unixPathLiteral(command);
console.log(literal);

const output = {
	literal: literal
}
console.log(output);
