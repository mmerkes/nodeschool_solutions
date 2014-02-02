var level = require('level'),
	db = level(process.argv[2]);

db.get('levelmeup', function(err, value) {
	if(err)
		throw err;

	console.log(value);
})