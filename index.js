var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {

// var led = new five.Led.RGB([6, 5, 3]);
var led = new five.Led(9);

io.on('connection', function (socket) {
socket.on('msg', function (data) {

        if(data == 'cmd') {
        led.blink(500);
        }

    });
  });
});

http.listen(4040, function() {});
