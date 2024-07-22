import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        super(name);        
        this.animalType = 'shark';  
        this.finCount = 3; 
        this.sound = 'rrr';  
                
    }
    
}