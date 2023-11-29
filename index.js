const math = require("./add.js");
const data = require("./data.json");
console.log(data.address);

console.log(math.add(4, 5));
console.log(math.subtract(7, 5));

let obj1 = { name: "Emin Başbayan" };
let obj2 = obj1;
// obj2.name = "Nur Başbayan";
console.log(obj1.name);

obj2 = { name: "Nur Başbayan" };
console.log(obj2.name);

// const SuperHero = require("./super-hero.js");

// const superman = new SuperHero("Superman");

// console.log(superman.getName());

// const superHero = require("./super-hero");

// console.log(superHero.getName());

// superHero.setName("Superman");

// console.log(superHero.getName());

// delete require.cache[require.resolve("./super-hero")];

// const newSuperHero = require("./super-hero");

// console.log(newSuperHero.getName());
