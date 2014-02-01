var http = require('http'),
	url = require('url');

function convertISO(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function convertUNIX(time) {
	return {
		unixtime: time.getTime()
	}
}

http.createServer(function(request, response) {
	if(request.method === 'GET') {
		var route = url.parse(request.url, true),
			time = new Date(route.query.iso);
		switch (route.pathname) {
			case '/api/parsetime':
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end( JSON.stringify( convertISO(time) ));
				break;
			case '/api/unixtime':
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end( JSON.stringify( convertUNIX(time) ) );
				break;
			default:
				response.end('That is not a valid URL.');
				break;
		}
	}
}).listen(process.argv[2]);