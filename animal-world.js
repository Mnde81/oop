import { Cat } from "./inheritance/Cat.js";
import { Crow } from "./inheritance/Crow.js";
import { Dog } from "./inheritance/Dog.js";
import { Dolphin } from "./inheritance/Dolphin.js";
import { Eagle } from "./inheritance/Eagle.js";
import { Hamster } from "./inheritance/Hamster.js";
import { Pigeon } from "./inheritance/Pigeon.js";


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


const pukuotukas = new Hamster('Pukuotukas', 'indiskas')
console.log(pukuotukas.voice());
console.log(pukuotukas.intro());


const smart = new Dolphin('Smartukas');
console.log(smart.voice());
console.log(smart.intro());


const erelis = new Eagle('Erelis');
console.log(erelis.voice());
console.log(erelis.intro());


const varna = new Crow('Varnele');
console.log(varna.voice());
console.log(varna.intro());

const balandelis = new Pigeon('Balandelis');
console.log(balandelis.voice());
console.log(balandelis.intro());






