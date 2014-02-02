var level = require('level');

module.exports = function( db, date, callback) {
	var results = [];

	return db.createReadStream({ start : date, end : date + '\xff'})
		.on('data', function(data) {
			results.push(data.value);
		})
		.on('end', function() {
			return callback(null, results);
		})
		.on('error', function(error) {
			return callback(error);
		});
}