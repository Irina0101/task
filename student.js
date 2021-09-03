class User {
    constructor (name, surname){
        this._name = name;
        this._surname = surname;
    }
    getFullName() {
        return `${this.name}+${this.surname}`;
    }
}

const date1 = new Date('2021');

class Student extends User {
    constructor (name, surname, year){
        super (name, surname);
        this.year = year;
    }
    getCourse(course) {
        this.course = `${date1}-${this.year}`;
        switch(course) {
            case '1':this.course === 0;
            return "First course";

            case '2': this.course === 1;
            return 'Second course';

            case '3': this.course === 2;
            return 'Third course';

            case '4': this.course === 3;
            return 'Fourth course';
            
            case '5': this.course === 4;
            return 'Fifth course';

            default: this.course > 4;
            return `${this._name}+${this._surname} is not a student`
            }
        }
    }

    const newStudent = ('Ivan','DED', 2018);
