var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {

var led = new five.Led(9); // ARDUINO PIN #9

io.on('connection', function (socket) {
socket.on('msg', function (data) {
        if(data == 'cmd') {
        // DIMMING ANIMATION
        led.fade({
          easing: "linear",
          duration: 6000,
          cuePoints: [0, 0.2, 0.45, 0.85, 1],
          keyFrames: [0, 255, 5, 5, 255],
          onstop: function() {
            console.log("Dimming stopped");
          }
        });
      
        }
    });
  });
});

http.listen(4040, function() {});
