var level = require('level'),
	db = level(process.argv[2]),
	results = [];

function searchGibberish(count) {
	if(count > 100) {
		return;
	}

	var key = 'gibberish' + count;
	db.get( key, function(err, value) {
		if(err) {
			if(!err.notFound)
				throw err;
			return searchGibberish(count + 1);
		}
		
		console.log(key + '=' + value);
		return searchGibberish(count + 1);
	});
}

searchGibberish(0);