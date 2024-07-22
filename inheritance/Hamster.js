import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name, bread) {
        super(name, bread);              
        this.animalType = 'hamster';   
        this.sound = 'cyp';  
        this.soundCount = 3;
    }

}