var fs = require('fs')
	path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	list.forEach( function(item) {
		if(path.extname(item).replace('.', '') === process.argv[3])
			console.log(item);
	});
});
