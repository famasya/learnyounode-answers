var net = require('net');
var server = net.createServer(function(socket){
	var date = new Date();
	//tiny bruteforce to current month. :D
	var tanggal = date.getFullYear().toString()+'-0'+(date.getMonth()+1).toString()+'-'+date.getDate().toString()+' '+date.getHours().toString()+':'+date.getMinutes().toString()+'\n';
	socket.end(tanggal);
});
server.listen(process.argv[2]);