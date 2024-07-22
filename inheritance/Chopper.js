import { Motorcycle } from "./Motorcycle.js";

export class Chopper extends Motorcycle {
    constructor(make, model) {
        super(make, model);
        this.type = 'chopper';        
        this.tankCapacity = 30;

    }
}