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
       
        // // BLINK SIMPLE TEST
        // led.blink(750); //LED blinks every 750ms
        // board.wait(6000, function() { //Toggle the led after 6 seconds 
        //   led.fadeIn(); //keep the LED on
        // });
        
        // BLINK
        led.pulse({
          easing: "linear",
          duration: 6000, //LED blinks for 6 seconds
          cuePoints: [0, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
          keyFrames: [0, 250, 0, 255, 0, 255, 0, 255],
          onstop: function() {
            console.log("Pulse stopped");
          }
        });
        board.wait(6000, function() {
          led.stop(); // terminates the interval
        });

      
        }
    });
  });
});

http.listen(4040, function() {});
