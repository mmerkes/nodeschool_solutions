var concat = require('concat-stream');

process.stdin
	.pipe( concat( function(body) {
		var newBody = body.toString().split('').reverse().join('');

		console.log(newBody);
	}));

// Not sure why adding .pipe(process.stdout) doesn't work 
// in this case