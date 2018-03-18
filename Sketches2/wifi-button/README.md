# Concept: 
This concept builds upon the "colour change" concept and adds a button indicating to go to the smart light control panel. 


# Installation

Download the [master.zip](https://github.com/tanerolcxy/philipshue/archive/master.zip) file and unpack it. Open **npm command line** and change directory to the location of the *philipshue-master* folder. 
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
