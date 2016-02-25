var nodejsWebSocket = require('nodejs-websocket');
var server = nodejsWebSocket.createServer(function(connection){
	console.log('a new connection is established @' + new Date());
	connection.on('text', function(msg){
		console.log('message received -> ', msg);
		server.connections.forEach(function(con){
			con.sendText(msg);
		});
	});
});
server.listen(9090);
console.log('server listening on port 9090!!');