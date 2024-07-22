import { Pet } from "./Pet.js";

export class Cat extends Pet {
    constructor(name, bread) {
        super(name, bread);              
        this.animalType = 'cat';   
        this.sound = 'miau';  
        this.soundCount = 2;
    }

}