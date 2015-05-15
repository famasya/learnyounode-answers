var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type':'text/plain'});
	var stream = fs.createReadStream(process.argv[3]);
	stream.pipe(res);
}).listen(process.argv[2]);