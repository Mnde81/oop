import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);
console.log(rexas.name);
console.log(rexas.furColor);
console.log(rexas.age);

// const brisius = new Dog('Brisius', 'white', 2);
// console.log(brisius);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(7, 5));
console.log(rexas.manyBones(3));


console.log('_____ _____ ____ ____ _____');
 
const brisius = new Dog('Brisius', 'white', 2);
console.log(brisius);

// brisius.legsCount = 3;
// console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius);

console.log(brisius.birthday());
console.log(brisius.birthday());