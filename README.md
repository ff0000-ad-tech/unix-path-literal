## Unix Path Literal

Different systems can use unix control characters in file/directory names. If trying to render the literal escapes, you may need extra escaping.

Disclaimer: *If you're using your spawning module correctly, __you do not need this__.* But if you need to return a Terminal-safe executable string to a view, then this might be handy.

#### The replacements:
The list is not exhaustive -- just the characters that our users constantly use:
- ` ` -> `\ `
- `'` -> `\'`
- `(` -> `\(`
- `)` -> `\)`
- `-` -> `\-`
- `&` -> `\&`


## Install
```bash
npm install git://github.com:gmcdev/unix-path.git --save
```

## Usage
```javascript
const unixPath = require('unix-path');

const command = `Project/ESPN Wimbledon 2017 -- CLONE/creative (version 1 & '2')/my-bash-script.sh`;
console.log(unixPath(command));
// => Project/ESPN\ Wimbledon\ 2017\ \-\-\ CLONE/creative\ \(version\ 1\ \&\ \'2\'\)/my\-bash\-script.sh
```




