var level = require('level');

module.exports = function(db, date, callback) {
	var count = 0;
	return db.createReadStream({ start : date })
		.on('data', function() {
			count++;
		})
		.on('end', function() {
			return callback( null, count );
		})
		.on('error', function(error) {
			return callback( error );
		});
}