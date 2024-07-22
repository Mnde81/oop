export class Motorcycle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.type = 'motorcycle';
        this.wheelCount = 2;
        this.tankCapacity = 18;
    }

    description() {
        return `This is ${this.type} motorcycle. My make is ${this.make}, my model is ${this.model}, my fuel tank capacity is ${this.tankCapacity}.`
    }
}