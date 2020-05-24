// reference type

var onject1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//context vs scope

const object4 = {
    a: function() {
        console.log(this)
    }
}


//instantiation

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}


class Wizard extends Player {
    constructor(name, type){
        super(name, type)
    }
    play() {
        console.log(`WEEE Im a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shaun", "Dark Magic");