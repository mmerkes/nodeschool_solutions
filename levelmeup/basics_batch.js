var level = require('level'),
	fs = require('fs'),
	db = level(process.argv[2]),
	path = process.argv[3];

fs.readFile( path, { encoding: 'utf8' }, function(err, data) {
	if(err) throw err;

	var content = data.split('\n');
	content = content.map(function(line) {
		return line.split(',');
	});

	var operations = content.map( function( value ) {
		var operation = {};
		operation.type = value[0];
		operation.key = value[1];
		if(value[2])
			operation.value = value[2];

		return operation;
	});

	db.batch( operations, function(err) {
		if(err) throw err;
	});
});