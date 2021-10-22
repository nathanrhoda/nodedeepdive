const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired'));
myEmitter.on('event1', () => console.log('Event 1 Fired'));



// Init event
myEmitter.emit('event');
myEmitter.emit('event1');
myEmitter.emit('event');