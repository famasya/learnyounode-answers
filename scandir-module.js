var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	var lists = [];
	fs.readdir(dir, function(err, files){
		if(err){
			return callback(err, null);
		} else {
			files.forEach(function(file){
				if(path.extname(file) == '.'+ext){
					lists.push(file);
				}
			});
		}
		return callback(null, lists);
	})
}