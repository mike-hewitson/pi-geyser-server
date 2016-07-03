# pi-geyser-server
[![Build Status](https://secure.travis-ci.org/mike-hewitson/pi-geyser-server.png?branch=master)](https://travis-ci.org/mike-hewitson/pi-geyser-server)
[![Coverage Status](https://coveralls.io/repos/github/mike-hewitson/pi-geyser-server/badge.svg?branch=master)](https://coveralls.io/github/mike-hewitson/pi-geyser-server?branch=master)

# Testing
```
start mongo
npm run dev
npm run test-server
npm run coverage-server
```
In seperate windows

# Runinng on PI
## Installing
For example to install RPi nodejs version 4.3.1 (see below for other versions)

wget https://nodejs.org/dist/v4.3.1/node-v4.3.1-linux-armv6l.tar.xz
tar xf node-v4.3.1-linux-armv6l.tar.xz  
cd node-v4.3.1-linux-armv6l/ 
sudo cp -R * /usr/local
```
$ sudo npm install forever -g

$ git clone repo
$ cd pi-geyser-server
$ npm install
```


# TODO
## Sooner
Add papertrail logging
Fix up the relay update
Create tests for relays updating
Get relays redaing from the PI

## Later
Add oAuth
Clean out the rubbish for front-end
Add to go.cd
Add to sonar
Deal with mongoose promise message
Work out how to do coverage with TS
Create paths for the configurations

