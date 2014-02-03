var level = require('level'),
	multilevel = require('multilevel'),
	net = require('net'),
	db = multilevel.client(),
	connection = net.connect(4545);

connection.pipe( db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function(err, data) {
	if(err) throw err;

	console.log(data);
	connection.end();
});