import { Tractor } from "./Tractor.js";

export class Mover extends Tractor {
    constructor(make, model) {
        super(make, model);
        this.type = 'mover';       
        this.tankCapacity = 600;

    }
}