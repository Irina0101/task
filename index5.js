/*function Student(firstName, lastName, age, isMale) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
}


function StudentPrototype() {
    this.says = function says(string) {
    return `Студент ${this.firstName} говорит:\n${string} `;}
}


Student.prototype = new StudentPrototype();

const stud1 = new Student('David', '23', 23, true)*/

function Ladder() {
    this.value = 0;

    this.up = function () {
        this.value++;
        return this;
    };
    this.down = function () {
        this.value--;
        return this;
    }; 
    this.showStep = function () {
        return this.value;
    };
}

const l1 = new Ladder();