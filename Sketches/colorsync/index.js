var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  //Setup RGB LED
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  led.on();
  led.color("#FF0000");

//Receive color from index.html and set the LED color accordingly
io.on('connection', function (socket) {
socket.on('msg', function (data) {
    console.log(data);
    led.color(data);
    });
  });
});

http.listen(4040, function() {});
