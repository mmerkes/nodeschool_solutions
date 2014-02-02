var level = require('level'),
	db = level(process.argv[2]),
	obj = JSON.parse(process.argv[3]);

for( key in obj ) {
	db.put(key, obj[key], function(err) {
		if(err)
			throw err;
	});
}