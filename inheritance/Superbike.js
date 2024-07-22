import { Motorcycle } from "./Motorcycle.js";

export class Superbike extends Motorcycle {
    constructor(make, model) {
        super(make, model);
        this.type = 'superbike';
        this.tankCapacity = 25;

    }
}