var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, '/')));
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {

io.on('connection', function (socket) {
socket.on('msg', function (data) {
        if(data == 'cmd') {
                
        // --- TRIGGER ARDUINO FEEDBACK ---
                
        }
    });
  });
});

http.listen(4040, function() {});
 
