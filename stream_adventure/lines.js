var through = require('through'),
	split = require('split'),
	odd = true;

process.stdin
	.pipe(split())
	.pipe(
		through( function(line) {
			if(odd) {
				this.queue( line.toString().toLowerCase() + '\n');
				odd = false;
			}
			else {
				this.queue( line.toString().toUpperCase() + '\n');
				odd = true;
			}
		}, 
		function() {
			this.queue(null);
		})
	)
	.pipe(process.stdout);