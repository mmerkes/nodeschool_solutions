var fs = require('fs');

var path = process.argv[2];

var buf = fs.readFileSync(path);

var str = buf.toString();

str = str.split('\n');

console.log(str.length - 1);