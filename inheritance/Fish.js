export class Fish {
    constructor(name) {
        this.name = name;
        this.animalType = 'fish';  
        this.finCount = 3; 
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