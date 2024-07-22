export class Bird {
    constructor(name) {
        this.name = name;
        this.animalType = 'bird';  
        this.wingsCount = 2;
        this.legsCount = 2; 
        this.sound = '';  
        this.soundCount = 1;
        
    }

    intro () {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}!`;
    }

    voice () {
        return `${this.name}: ${this.sound.repeat(this.soundCount)}!!`;
    }
}