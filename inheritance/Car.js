export class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.type = 'car';
        this.wheelCount = 4;
        this.tankCapacity = 60;
    }

    description() {
        return `This is ${this.type} car. My make is ${this.make}, my model is ${this.model}, my fuel tank capacity is ${this.tankCapacity}.`
    }
}