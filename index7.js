'use strict'

/*this.every = function every(func) {
    for (let i = 0; i < this.length; i++) {
        const result = func(this[i], i, this);
        if (result) {
            return false;
        }
    }
    return true;
} ;*/

const ADULT_AGE = 18;

function getFullName() {
    return `${this.firstName} ${this.lastName}`; 
}

function User(first, last, age, email, isMale, isSubscribed = false, nationality) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.email = email;
    this.isMale = isMale;
    this.isSubscribed = isSubscribed;
    this.getFullName = getFullName;
    this.nationality = nationality;
}
function createRandomUsers(amount = 1) {
    const db = [];
    for (let i = 0; i < amount; i++) {
        const user = new User(
            `Name${i}`,
            `Surname${i}`,
            Math.ceil(Math.random() * 100),
            `email${i}@mail.com`,
            Math.random() > 0.5
        );
        db.push(user);
    }
    return db;
}
function getRandomNationality(){
    const max = NATIONALITIES.length-1;
    const min = 0;

    return NATIONALITIES[Math.round(Math.random() * (max-min)+min)];
}
const users = createRandomUsers(100);
console.log(users);

const names = users.map(function(user){
    return user.getFullName();
});

const adultUers = users.filter(function(user) {
    return user.age >= ADULT_AGE;
});
console.table(adultUsers);
