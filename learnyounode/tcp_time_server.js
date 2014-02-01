var net = require('net');

function addZero(convert) {
	if(convert < 10)
		return '0' + convert;
	return convert;
}

var server = net.createServer(function(socket) {
	var date = new Date();

	var date_string = date.getFullYear() + '-' +
						addZero(date.getMonth() + 1) + '-' +
						addZero(date.getDate()) + ' ' +
						addZero(date.getHours()) + ':' +
						addZero(date.getMinutes());
	
	socket.end(date_string + '\n');
});

server.listen(process.argv[2]);