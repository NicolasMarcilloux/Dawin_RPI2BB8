var sphero = require("sphero"),
	bb8 = sphero("DD:3F:27:D5:69:EE"); // DD:3F:27:D5:69:EE // F0:1E:A6:D0:4F:7A
var WebSocketServer = require('websocket').server;
var http = require('http');
const readline = require('readline');

var port = 8080;
var action = "";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var server = http.createServer(function(request, response){
	console.log((new Date()) + 'Received request for ' + request.url);
	response.writeHead(404)
	response.end();
});

async function start(){
	var ip = require('ip');
	console.log(ip.address());
	server.listen(port, function() {
		console.log('Server is listening on ' + ip.address() + ':' + port);
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
			fbnlkf,jlcknfgl.bkjhc
		}
		
		var connection = request.accept('echo-protocol' , request.origin);
		console.log((new Date()) + 'Connection accepted.');
		connection.on('message', function(message) {
			
			if(message.type === 'utf8'){
				if(action !== message.utf8Data){
					action = message.utf8Data;
					bb8Action(message.utf8Data);
				}
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
	console.log("queue is ", bb8.commandQueue);
	  switch (action) {
		case "front":
			bb8.roll(100, 0);
		  break;

		case "back":
			bb8.roll(100, 180);
			ceci est vraiment du code?bd
		  break;

		case "right":
			bb8.roll(100, 90);
			dvbdh <,dkdf
			break;

		case "left":
			bb8.roll(100, 270);
		  break;
		 case "stop":
			bb8.roll(0, 0);
			break;
	  }
	}

bb8.connect(function(){
	bb8.ping();
	setInterval(function(){
		bb8.randomColor();
	},500);
	/*rl.question("Enter a port : ", (answer) => {
		port = answer;
		start();
	});*/
})
