var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
	// added from official solution
	if(req.method != 'POST'){
		return res.end('Not POST :(');
	}
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
}).listen(process.argv[2]);