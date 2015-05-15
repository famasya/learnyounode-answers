var http = require('http');

http.get(process.argv[2], function(response){
	var str = "";
	response.on("data", function(data){
		str += data;
	});
	response.on("end", function(end){
		console.log(str.length);
		console.log(str.toString());
	});

}).on("error", function(err){
	throw err;
});