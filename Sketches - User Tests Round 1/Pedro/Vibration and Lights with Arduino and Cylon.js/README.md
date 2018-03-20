# About

This application was created for user testing with lights and vibration. It uses a LED light and a Servo motor to simulate vibration. It requires a Arduino board, Node.je and the Cylon.js API to run JavaScript code.
# Installation

Download the [master.zip](https://github.com/tanerolcxy/philipshue/archive/master.zip) file and unpack it. Open **npm command line** and change directory to the location of the *Vibration and Lights with Arduino and Cylon.js* folder inside the *philipshue-master/Sketches - User Tests Round 1/Pedro* folder. 
```
$ cd /YOUR_PATH/philipshue-master/Sketches/Vibration and Lights with Arduino and Cylon.js
```
Run the following command prompt to install necessary packages required. This may take a while, be patient.
```
$ npm install
```
Run *gort.exe*.
Go to [Arduino Editor](https://create.arduino.cc/) and upload "Standard Firmata" to your Arduino using (*philipshue-master/cross-device-template/StandardFirmata.ino*). Once the upload is complete, run the following prompt line. 
```
$ gort scan serial
```
*Shows your port the arduino is connected to.*
```
$ gort arduino upload firmata COM6
```
*COM6 is the port I'm using, copy the result from gort scan serial and replace COM6, should be /dev/ + what port you got from scan serial to put in here if using a Mac.*


## Using gort on Mac
(For Mac users, please visit http://gort.io/documentation/getting_started/downloads/ to download gort for Mac, and replace the current gort.exe file that currently exists in this folder, or use the one included in the /gort for mac/gort.exe)

## Starting it up
```
$ npm start
```
*Starts a live-server at localhost:5000 and starts the 'robot' on the arduino.*




