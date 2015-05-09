var fs = require('fs');
var path = require('path');
var filter = '.'+process.argv[3];
fs.readdir(process.argv[2], function(error, files){
	files.forEach(function(file){
		if(path.extname(file) == filter){
			console.log(file);
		}
	});
});