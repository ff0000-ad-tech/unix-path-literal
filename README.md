## Unix Path

Different systems can use unix control characters in file/directory names. You may need to escape them in some circumstances.

Disclaimer: *If you're using your spawning module correctly, __you should not need to do this__.* But if you need to return a Terminal-safe executable string, then this might be handy.

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




