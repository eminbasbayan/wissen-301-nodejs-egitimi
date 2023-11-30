const PizzaShop = require("./pizza-shop");
const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping)=> {
    console.log(`Bir ${size} ve ${topping} ile pişiriliyor.`);
})

pizzaShop.order({
    size: "large",
    topping: ""

});
pizzaShop.displayOrderNumber();


// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

// emitter.on("orderPizza", (size, topping)=>{
//      console.log(`Bir ${size} ve ${topping} ile pişiriliyor.`);
// })

// emitter.emit("orderPizza", "large", "mantar");
