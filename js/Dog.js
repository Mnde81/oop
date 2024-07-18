export class Dog {
    constructor(vardas, kailioSpalva, amzius) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = amzius;
        this.legsCount = 4;
        this.hasTail = true;
    }

    birthday () {
        this.age++;
        return `Suns ${this.age} gimtadienis!`;
    }

    lostLeg() {
        if (this.legsCount === 0) {
            return 'Suo jau turi 0 koju...';
        }
        this.legsCount--;
        return `Suo prarado koja...`;
    }

    hi() {
        return 'Suo sako: au au!!';
    }

    think() {
        return 'Suo galvoja: kaulai';
    }

    addNumbers(a, b) {
        return `Suo suskaiciavo: ${a} + ${b} = ${a + b}.`;
    }

    manyBones(count) {
        return `Many bones: ${'kaulas '.repeat(count)}`;
    }

    

}



// class - > Car 

// -pavadinimas
// -modelis
// -color 
// -kuro bako talpa 
// -vidutines kuro sanaudos 100km 
// - ar ijungtas variklis (default: false)
// -greitis (default: 0)


// metodai:
// -ijungti varikli
//     - ijungto variklio dar karta ijungti negalima

// -isjungti varikli
//     - isjungto variklio isjungtii negalima

// -pradeti vaziuoti (greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
// - vaziuoti (naudoja 1x litro kuro sanaudu)
// -sustoti (greitis tiesiog tampa nulinis)
// - kiek liko kuro?
// -uzpilti kuro baka (kiek litrais)




