var mod = require('./module1.js');

mod(process.argv[2], process.argv[3], function(err, data) {
	if(err) throw err;
	
	data.forEach(function(file) {
		console.log(file);
	});
});