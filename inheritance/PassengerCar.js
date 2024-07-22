import { Car } from "./Car.js";

export class PassengerCar extends Car {
    constructor(make, model) {
        super(make, model);
        this.type = 'passengercar';
        this.tankCapacity = 55;

    }
}