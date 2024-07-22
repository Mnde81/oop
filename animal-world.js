import { Cat } from "./inheritance/Cat.js";
import { Dog } from "./inheritance/Dog.js";


const rexas = new Dog('Rex');
console.log(rexas.intro());

const brisius = new Dog('Brisius', 'aviganis');
console.log(brisius.intro());
console.log(brisius.voice());




const rainis = new Cat('Rainis', 'bengalu');
console.log(rainis.intro());
console.log(rainis.voice());

const tomas = new Cat('Tom', 'animacinis');
console.log(tomas.voice());


