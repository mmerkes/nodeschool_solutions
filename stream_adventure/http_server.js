var http = require('http'),
	through = require('through');

var server = http.createServer( function( request, response ) {
	if (request.method === 'POST') {
		request.pipe( through( function(data) {
			this.queue(data.toString().toUpperCase());
		},
		function() {
			this.queue(null);
		}))
		.pipe(response);
	}
	else
		res.send('This is not a POST request\n');
});

server.listen(process.argv[2]);