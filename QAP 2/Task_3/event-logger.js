// QAP 3/event-logger.js

const EventEmitter = require('events');
const fs = require('fs');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('httpStatus', (statusCode) => {
  console.log(`HTTP Status ${statusCode} occurred.`);
});

myEmitter.on('fileReadSuccess', (filename) => {
  console.log(`File ${filename} was successfully read.`);
});

function simulateHttpRequest(statusCode) {
  myEmitter.emit('httpStatus', statusCode);
}

function simulateFileRead(filename, success) {
  if (success) {
    myEmitter.emit('fileReadSuccess', filename);
  } else {
    // You can emit an event for file unavailability here if needed.
  }
}

module.exports = { myEmitter, simulateHttpRequest, simulateFileRead };
