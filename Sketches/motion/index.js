var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, '/')));
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

let LEDBrightness = 0;

led.on();
led.intensity(0);


io.on('connection', function (socket) {
  socket.on('msg', function (data) {
    if(LEDBrightness < data)
    {
      LEDBrightness = data;
      led.intensity(100 - LEDBrightness);
    }

    //led.intensity(100 - data);
    console.log(Math.floor(data));
      });
    });
  });

http.listen(4040, function() {});
 
