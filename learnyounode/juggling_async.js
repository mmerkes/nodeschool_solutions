var http = require('http');

http.get(process.argv[2], function(response) {
	var result = ['', '', ''];
	response.setEncoding('utf8');
	response.on('data', function(data) {
		result[0] += data;
	});

	response.on('end', function() {
		http.get(process.argv[3], function(response) {
			response.setEncoding('utf8');
			response.on('data', function(data) {
				result[1] += data;
			});
			response.on('end', function() {
				http.get(process.argv[4], function(response) {
					response.setEncoding('utf8');
					response.on('data', function(data) {
						result[2] += data;
					});
					response.on('end', function() {
						result.forEach(function(data) {
							console.log(data);
						});
					});

					response.on('error', function(e) {
						throw e;
					});
				});
			});

			response.on('error', function(e) {
				throw e;
			});
		});
	});

	response.on('error', function(e) {
		throw e;
	});
});

