import { Bird } from "./Bird.js";

export class Eagle extends Bird {
    constructor(name) {
        super(name);
        this.sound = 'euh';  
        this.soundCount = 3;
    }
}