var http = require('http');
var bl = require('bl');
var callback = 0;
var stack = [process.argv[2],process.argv[3],process.argv[4]];
var store = [];

stack.forEach(function(el, index){
	http.get(el, function(res){
		res.pipe(bl(function(err,data){
			if(err){
				return console.error(err);
			} else {
				store[index] = (data.toString());
				callback++;
				if(callback == 3){
					printIt(store);
				}
			}
		}))
	});
});

function printIt(array){
	array.forEach(function(el){
		console.log(el);
	})
}