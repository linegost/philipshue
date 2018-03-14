var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, '/')));
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {
	var led = new five.Led.RGB([6, 5, 3]);
	io.on('connection', function(socket) {
		socket.on('msg', function(data) {
			if (data == 'cmd') {
				led.intensity(0);
				led.color("#ff5100");
				var i = 0;
				var timer = setInterval(function() {
					led.intensity(i);
					i = i + 5;
					if (i > 100) {
						clearInterval(timer);
					}
				}, 100);
			}
		});
	});
});
http.listen(4040, function() {});
