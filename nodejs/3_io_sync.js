var fs = require('fs');
// console.log(process.argv);
var file = process.argv[2];

var buffer = fs.readFileSync(file);
var str = buffer.toString();

var lines = str.split('\n');

var linecount = 0;
for (var line of lines) {
    console.log(line);
}
