var level = require('level');

module.exports.init = function( db, words, callback ) {
	var operations = words.map( function( word ) {
		return { 	type : 'put', 
					key : word.length + '!' + word, 
					value : word };
	});

	db.batch( operations, callback);
}

module.exports.query = function( db, word, callback ) {
	var results = [],
		end = word.replace(/\*/g, 'z'),
		startSearch = word.length + '!' + word,
		endSearch = end.length + '!' + end;

	return db.createReadStream({ start : startSearch, end : endSearch })
		.on('data', function(data) {
			results.push(data.value);
		})
		.on('end', function(data) {
			return callback(null, results);
		})
		.on('error', function(error) {
			return callback(error);
		});
}