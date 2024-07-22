import { Bird } from "./Bird.js";

export class Pigeon extends Bird {
    constructor(name) {
        super(name);
        this.sound = 'bur';  
        this.soundCount = 4;

    }
}