import { Bird } from "./Bird.js";


export class Crow extends Bird {
    constructor(name) {
        super(name);
        this.sound = 'kar';  
        this.soundCount = 2;

    }
}