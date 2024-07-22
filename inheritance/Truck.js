import { Car } from "./Car.js";

export class Truck extends Car {
    constructor(make, model) {
        super(make, model);
        this.type = 'truck';
        this.wheelCount = 4;
        this.tankCapacity = 400;

    }
}