// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// const subscribeMessage = (channelName) => {
//   console.log(`Thanks For Subscribing to ${channelName}`);
// };

// eventEmitter.addListener("subscribe", subscribeMessage);

// eventEmitter.emit("subscribe", "Pratap Das");

// // The above statement must print "Thanks For Subscribing to Pratap Das"



// const EventEmitter = require("events");

// const eventEmitter = new EventEmitter();

// const subscribeMessage = (channelName) => {
//   console.log(`Thanks For Subscribing to ${channelName}`);
// };

// eventEmitter.addListener("subscribe", subscribeMessage);

// console.log("Calling event listner before removing the event.");
// eventEmitter.emit("subscribe", "Pratap Das");

// console.log("Calling event listner after removing the event.");
// eventEmitter.removeListener("subscribe", subscribeMessage);

// eventEmitter.emit("subscribe", "Pratap Das");



const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "Pratap Das");

console.log(
  `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);

eventEmitter.setMaxListeners(5);

console.log(
  `The updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
);