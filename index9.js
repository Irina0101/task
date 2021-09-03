`use strict`;

class User {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age; 
    }

    getFullName() {
        return `${this.name}${this.surName}`;
    }

    isAdult(){
        return this.age >= 18;
    }
}

const user1 = new User('Vlad', 'test', 45);

class Worker {
    constructor(name, surName, dayStep, days ) {
        this.name = name;
        this.surName = surName;
        this.dayStep = dayStep;
        this.days = days; 
    }

    getMoney() {
        return `${this.dayStep}*${this.days}`;
    }
}

const worker1 = new Worker('Ded', 'Richard', 300, 30);

class Fuel{
    constructor (volume, density){
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.volume * this.density;
    }
};


class Auto{
    /**
     * 
     * @param {string} name 
     * @param {number} weight 
     * @param {number} age 
     * @param {Fuel} fuel 
     */
    constructor (name, weight, age, fuel){
        this.name = name;
        this.weight = weight;
        this.age = age;
        this.fuel = fuel;
    }
    /*getFullWeight(){
        return this.Weight + this.
    }*/
}

const benzin = new Fuel(60, 0,9);
const BMV = new Auto ('passat',1200, benzin )

class Friend {
    constructor(name, appleAmount, friend,) {
        this.name = name;
        this.appleAmount = appleAmount;
        this.friend = friend;
    }
    countAllApples() {
        return this.appleAmount + this.friend.appleAmount;
    }
}

class Squirrel {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    eat() {
        return `${this.name} is eating`;
    }

    climb() {
        return `${this.name} is climbing`;
    }
} 

class FlyingSquirrel extends Squirrel{
    constructor (name, color, fly) {
        super(name, color);
        this.fly = fly;
    }
    flying() {
        return `${this.name} is flying`;
    }

}