var sphero = require("sphero"),
	bb8 = sphero("DD:3F:27:D5:69:EE"); // DD:3F:27:D5:69:EE // F0:1E:A6:D0:4F:7A
var WebSocketServer = require('websocket').server;
var http = require('http');

var action = "front";

var server = http.createServer(function(request, response){
	console.log((new Date()) + 'Received request for ' + request.url);
	response.writeHead(404)
	response.end();
});

async function start(){
	server.listen(10001, function() {
		console.log((new Date()) + 'Server is listening on port 8080');
	});

	wsServer = new WebSocketServer({
		httpServer: server,
		autoAcceptConnections: false
	});

	function originIsAllowed(origin) {
		return true;
	}

	wsServer.on('request', function(request) {
		if(!originIsAllowed(request.origin)){
			request.reject();
			console.log((new Date()) + 'Connection from origin ' + request.origin + ' rejected.');
			return;
		}
		
		var connection = request.accept('echo-protocol' , request.origin);
		console.log((new Date()) + 'Connection accepted.');
		connection.on('message', function(message) {
			if(message.type === 'utf8'){
				bb8Action(message.utf8Data);
				connection.sendUTF(message.utf8Data);
			}
			else if (message.type === 'binary'){
				console.log('Received binary message of ' + message.binaryData.length + ' bytes.');
				connection.sendBytes(message.binaryData);
			}
		});
		
		connection.on('close', function(reasonCode, description){
			console.log((new Date()) + 'Peer ' + connection.remoteAddress + ' disconnected.');
		});
	});
}

async function bb8Action(action){
		console.log(action);
	  switch (action) {
		case "front":
			bb8.roll(50, 0);
		  break;

		case "back":
			bb8.roll(50, 180);
		  break;

		case "right":
			bb8.roll(50, 90);
			break;

		case "left":
			bb8.roll(50, 270);
		  break;
		 case "stop":
			bb8.roll(0, 0);
			break;
		case "Color":
		  break;

		case "SetupOn":
		  bb8.startCalibration();
		  break;

		case "SetupOf":
		  bb8.finishCalibration();
		  break;
	  }
	}

bb8.connect(function(){
	start();
})
