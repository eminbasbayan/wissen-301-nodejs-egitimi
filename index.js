const EventEmitter = require("node:events");
const emitter = new EventEmitter();


emitter.on("orderPizza", (size, topping)=>{
     console.log(`Bir ${size} ve ${topping} ile pişiriliyor.`);
})


emitter.emit("orderPizza", "large", "mantar");

