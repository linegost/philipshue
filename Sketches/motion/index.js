var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, '/')));
var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function()
{
  var led = new five.Led.RGB(
  {
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  let keycard = new five.Pin(10);


  //Store brightness in variable because led.intensity doesn't appear to be readable
  let LEDBrightness = 0;
  let oldZ = 0;
  led.on();
  led.intensity(0);

  io.on('connection', function (socket)
  {
    socket.on('msg', function (data)
    {
    //Increase brightness if motion data is larger than previously
    if(LEDBrightness < data)
    {
      LEDBrightness = data;
      led.intensity(100 - LEDBrightness);
    }
    // LEDBrightness = data;
    console.log(LEDBrightness);
    led.intensity(100 - LEDBrightness);
    });
  });
});

http.listen(4040, function() {});
 
