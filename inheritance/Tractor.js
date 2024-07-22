export class Tractor {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.type = 'tractor';
        this.wheelCount = 4;
        this.tankCapacity = 800;
    }

    description() {
        return `This is ${this.type} tractor. My make is ${this.make}, my model is ${this.model}, my fuel tank capacity is ${this.tankCapacity}.`
    }
}