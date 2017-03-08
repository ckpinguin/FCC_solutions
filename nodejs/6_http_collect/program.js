const mymodule = require('./mymodule');

const url = process.argv[2];

mymodule(url, function(err, res) {
    if (err) throw err;
    console.log(res.toString().length);
    console.log(res);
});
