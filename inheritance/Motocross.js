import { Motorcycle } from "./Motorcycle.js";

export class Motocross extends Motorcycle {
    constructor(make, model) {
        super(make, model);
        this.type = 'motocross';
        this.tankCapacity = 10;
    }
}