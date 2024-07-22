import { Chopper } from "./inheritance/Chopper.js";
import { Lumberjack } from "./inheritance/Lumberjack.js";
import { Motocross } from "./inheritance/Motocross.js";
import { Mover } from "./inheritance/Mover.js";
import { PassengerCar } from "./inheritance/PassengerCar.js";
import { Superbike } from "./inheritance/Superbike.js";
import { Truck } from "./inheritance/Truck.js";


const husqwarna = new Motocross('Husqwarna', 'ZR');
console.log(husqwarna.description());


const honda = new Superbike('Honda', 'CBR');
console.log(honda.description());

const harley = new Chopper('Harley Davidson', 'Fatboy');
console.log(harley.description());

const audi = new PassengerCar('Audi', '80');
console.log(audi.description());

const volvo = new Truck('Volvo', 'FL');
console.log(volvo.description());

const deere = new Mover('John Deere', 'SLR');
console.log(deere.description());

const fujitsu = new Lumberjack('Fujitsu', 'FK');
console.log(fujitsu.description());

