# About
This concept builds upon the "colour change" concept and adds a button indicating to go to the smart light control panel. 


# Installation

Download the [master.zip](https://github.com/tanerolcxy/philipshue/archive/master.zip) file and unpack it. Open **npm command line** and change directory to the location of the *wifi-button* folder inside the *philipshue-master/Sketches2* folder. 
```
$ cd /YOUR_PATH/philipshue-master/Sketches2/wifi-button
```
Run the following command prompt to install necessary packages required. This may take a while, be patient.
```
$ npm install
```
Once the installation is complete, go to [Arduino Editor](https://create.arduino.cc/) and upload "Standard Firmata" to your Arduino using (*philipshue-master/cross-device-template/StandardFirmata.ino*). Once the upload is complete, run the following prompt line.  
```
$ npm start
```
(*The Arduino is ready to receive commands once **Repl Initialized** shows up in the console.*)

# Deployment

### DESKTOP
Launch your desktop's web browser, and go to localhost:4040.

### MOBILE DEVICE
Launch your phone's mobile browser, and go to e.g. **192.168.1.157:4040**. The IP adress is the internal/local ip adress of the computer running the Node.js.
