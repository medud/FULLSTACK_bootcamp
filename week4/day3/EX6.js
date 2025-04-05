class animal {
    firs = "hero"
    constructor(name, type, color) {
        this.name = name
        this.color = color
        this.type = type


    }
}

class Mammal extends animal {


    sound(sounds) {

        console.log(`${sounds} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);

    }
}
farmerCow = new Mammal("cow", "lily", "white")

console.log(farmerCow.sound("moooo"))