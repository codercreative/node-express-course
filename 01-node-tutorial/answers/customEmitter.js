const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("title", (author) => {
  console.log(`Book title: Bridget Jones by ${author}`);
});

emitter.emit("title", "Helen Fielding");
