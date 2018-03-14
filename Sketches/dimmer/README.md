# About

A brightness synchronization between a LED light on a Arduino and a mobile device. 
The initial screen presents hotel’s wi-fi connection, then a new screen appears when the wi-fi is connected. 
On the new screen, the background color changes simultaneously with the brightness of the LED. 
The LED slowly dims down and up in duration of 6 seconds.

# Installation

Download the [master.zip](https://github.com/tanerolcxy/philipshue/archive/master.zip) file and unpack it. Open **npm command line** and change directory to the location of the *fadein-w-sound* folder inside the *philipshue-master* folder. 
```
$ cd /YOUR_PATH/philipshue-master/dimmer
```
Run the following command prompt to install necessary packages required. This may take a while, be patient.
```
$ npm install
```
Once the installation is complete, run the following prompt line. 
```
$ npm start
```
(*The Arduino is ready to receive commands once **Repl Initialized** shows up in the console.*)

# Deployment

### DESKTOP
Launch your desktop's web browser, and go to localhost:4040.

### MOBILE DEVICE
Launch your phone's mobile browser, and go to e.g. **192.168.1.157:4040**. The IP adress is the internal/local ip adress of the computer running the Node.js.
