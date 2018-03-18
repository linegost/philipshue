# About

A extension to the *dimmer*. This prototype assumes that the user is already connected to the hotel wi-fi. When the user inserts the keycard in the hotel room, he/she gets a sound alert with a welcome page on the device. Then the user can make choice to experience the lighting demo or to visit the Philps Hue app directly. 
This prototype explores to see if the user makes better association between the indicators and the smart lighting, by removing the wi-fi connection page. Also, compared to other prototypes where the demo triggers automatically, this prototype explores less intrusive way of user interaction by allowing users to experience the demo in their own term. Lastly, along with the *wifi-button* demo, it tests whether the use of symbol and text is inevitable to help users to be aware of the smart lighting in the room.

# Installation

Download the [master.zip](https://github.com/tanerolcxy/untitled/archive/master.zip) file and unpack it. Open **npm command line** and change directory to the location of the *philipshue-master* folder. 
```
$ cd /YOUR_PATH/philipshue-master
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

### DESKTOP
Launch your desktop's web browser, and go to localhost:4040.

### MOBILE DEVICE
**Mac**: http://osxdaily.com/2010/11/21/find-ip-address-mac/

**Windows**: https://www.groovypost.com/howto/microsoft/windows-7/find-your-local-ip-address-windows-7-cmd/

Launch your phone's mobile browser, and go to e.g. **192.168.1.157:4040**. The IP adress is the internal ip adress of the computer running the Node.js.

---

# HOW TO GET STARTED 

**index.html** handles the triggers on the mobile device and **index.js** handles the Arduino execution. Look for **EDIT HERE** in both of the files. Those sections can be edited. All other CSS, HTML or JS are part of the **Hotel WiFi Hotspot Mockup**.

### JOHNNY-FIVE [CODE EXAMPLES](http://johnny-five.io/examples/)
