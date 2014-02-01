var http = require('http'),
	map = require('through2-map');

http.createServer(function(request, response) {
	if(request.method === 'POST') {
		request.pipe( map( function(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	}
}).listen(process.argv[2]);