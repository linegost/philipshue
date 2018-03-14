var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });

var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function() {

  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  // RGB LED alternate constructor
  // This will normalize an array of pins in [r, g, b]
  // order to an object (like above) that's shaped like:
  // {
  //   red: r,
  //   green: g,
  //   blue: b
  // }
  //var led = new five.Led.RGB([3,5,6]);

  // Add led to REPL (optional)
  

  // Turn it on and set the initial color
  led.on();
  led.color("#FF0000");

  // led.blink(100);

io.on('connection', function (socket) {
socket.on('msg', function (data) {
  console.log(data);
    led.color(data);
    });
  });
});

http.listen(4040, function() {});
