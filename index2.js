const num1 = +prompt('Enter the number') ;
const num2 = +prompt('Enter the number') ;

const operations = prompt('Выберете операцию:\n1 +\n2 -\n3 *\n4 /') ;

const sum = num1 + num2 ;
const diferens = num1 - num2 ;
const product =  num1 * num2 ;
const fraction = num1 / num2 ;

switch (operations) {
    case '1' : {
        console.log(sum);
        break;
    }
    case '2' : {
        console.log(diferens);
        break;
    }
    case '3' : {
        console.log(product);
        break;
    }
    case '4' : {
        console.log(fraction);
        break;
    }
    default: {
        console.log('Выберете функцию');
    }
}




const cat = {
    run: function () {
        return 'I M RUNNING'
    },
    jump: function () {
        return 'I AM JUMPING'
    },
    mev: function () {
        return 'MEEEV'
    }
}

const cat2 = {
    run: function () {
        return 'I M RUNNING'
    },
    jump: function () {
        return 'I AM JUMPING'
    },
    mev: function () {
        return 'MEEEV'
    }
}

function Cat(name, color, breed, age) {
    this.name = name;
    this.color = color;
    this.bread = bread;
    this.age = age;
    this.run = function () {
        return 'I AM RUNNING ';
    };
}

const newCat = newCat('hkjhjk', 'woj', 'bxzjzlk', 4);

function User(name, surname, fullName, age) {
    this.name = name;
    this.surnama = surname;
    this.fullName = fullName;
    this.age = age;
}

const newUser = new User('Bob', 'Jhon', 'Markens', 36)

