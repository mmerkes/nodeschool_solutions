var level = require('level'),
	db = level(process.argv[2], { valueEncoding: 'json' }),
	file = require(process.argv[3]);

file.forEach( function(row, index) {
	if(row.type == 'user') {
		db.put( row.name, row, function(err) {
			if(err) throw err;
		});
	} 
	db.put(row.user + '!' + row.name, row, function(err) {
		if(err) throw err;
	});
});

// make an implementation with batch as well.