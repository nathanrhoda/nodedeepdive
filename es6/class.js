// ES5
// function Car(options) {
//     this.title = options.title;    
// }

// Car.prototype.drive = function() {
//     return 'vroom';
// }

// const car = new Car({ title: 'Focus'});
// console.log(car);
// console.log(car.drive());

// function Toyota(options) {
//     Car.call(this, options);
//     this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
// Toyota.prototype.honk = function () {
//     return 'beep';
// }

// const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
// console.log(toyota);
// console.log(toyota.honk());
// console.log(toyota.drive());

// ES 6
class Car {
    constructor({title}) {
        this.title = title;
    }

    drive() {
        console.log('vroom');
        return 'vroom';
    }
}

class Toyota  extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota);

toyota.drive();

// const car = new Car({title: 'Toyota'});
// car.drive();
//console.log(car);