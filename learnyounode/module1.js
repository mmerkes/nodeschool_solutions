var fs = require('fs')
	path = require('path');

module.exports = function(dir, filetype, callback) {
	return fs.readdir(dir, function(err, list) {
		if(err) 
			return callback(err);

		var result = [];

		list.forEach( function(item) {
			if(path.extname(item).replace('.', '') === filetype)
				result.push(item);
		});

		return callback(null, result);
	});
}
