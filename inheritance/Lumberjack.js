import { Tractor } from "./Tractor.js";

export class Lumberjack extends Tractor {
    constructor(make, model) {
        super(make, model);
        this.type = 'lumberjack';        
        this.tankCapacity = 1200;
    }
    

}