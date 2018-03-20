# About

A extension to the *dimmer*. This prototype assumes that the user is already connected to the hotel wi-fi. When the user inserts the keycard in the hotel room, he/she gets a sound alert with a welcome page on the device. Then the user can make choice to experience the lighting demo or to visit the Philps Hue app directly. <br>
This prototype explores to see if the user makes better association between the indicators and the smart lighting, by removing the wi-fi connection page and replacing it with the welcome page instead. Also, compared to other prototypes, which the demo triggers automatically, this prototype explores less intrusive method by allowing users to experience the demo in their own terms. Lastly, along with the *wifi-button* demo, it tests if the use of symbol and text is inevitable to help users to be aware of the smart lighting in the room.

# Installation

Download the [master.zip](https://github.com/tanerolcxy/philipshue/archive/master.zip) file and unpack it. Open **npm command line** and change directory to the location of the *no_wifi_button* folder inside the *philipshue-master/Sketches2* folder. 
```
$ cd /YOUR_PATH/philipshue-master/Sketches2/no_wifi_button
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
