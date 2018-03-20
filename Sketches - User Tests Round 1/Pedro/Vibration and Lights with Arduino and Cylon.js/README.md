# About

This application was created for user testing with lights and vibration. It uses a LED light and a Servo motor to simulate vibration. 
It requires a Arduino board, Node.je and the Cylon.js API to run JavaScript code.

## Installation

$ npm install

run gord.exe file

run arduino editor, and upload "Standard Firmata" to your arduino board  (sketch under Examples>Firmata>StandardFirmata)

$ gort scan serial (shows your port the arduino is connected to)

$ gort arduino upload firmata COM6 (COM6 is the port I'm using, copy the result from gort scan serial and replace COM6, should be /dev/ +
what port you got from scan serial to put in here if using a Mac)

## Using gort on Mac
(For Mac users, please visit http://gort.io/documentation/getting_started/downloads/ to download gort for Mac, and replace the current gort.exe file that currently exists in this folder, or use the one that I included in the /gort for mac/gort.exe)

## Starting it up

$ npm start (starts a live-server at localhost:5000 and starts the 'robot' on the arduino).






