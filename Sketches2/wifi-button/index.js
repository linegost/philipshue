var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, '/')));
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {

var led = new five.Led(9); // --- EDIT HERE ---

io.on('connection', function (socket) {
socket.on('msg', function (data) {
        if(data == 'cmd') {
                
        led.on(); // --- EDIT HERE ---
        setTimeout(function(){ led.off(); }, 6000); 
        }
    });
  });
});

http.listen(4040, function() {});
