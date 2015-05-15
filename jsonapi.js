var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	if(req.method != 'GET'){
		return res.end('Not GET method');
	}
	res.writeHead(200,{'Content-Type': 'application/json'})

	var path = url.parse(req.url, true);
	var date = new Date(path.query.iso);
	if(path.pathname == '/api/parsetime'){
		return res.end(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}
	if(path.pathname == '/api/unixtime'){
		return res.end(JSON.stringify({
			unixtime: date.getTime()
		}))
	}
}).listen(process.argv[2]);