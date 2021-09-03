'use string';

//Вывод чисел от 25 до 0 (порядок уменьшения)

const firstNumber = 25;

function getNumbers(firstNumber) {
    while (firstNumber>0) {
    return --firstNumber;
    }
}   

function getNumbers2(firstNumber){
    console.log(firstNumber);
do {--firstNumber;
    console.log(firstNumber);
    }while(firstNumber>0); 
}

//Bывод чисел от 10 до 50, которые кратны 5

const beganNumber = 10;

function getEvenNumbes(beganNumber) {
    do{ beganNumber%5 
    }while( beganNumber%5 === 0 & beganNumber<=50);
   console.log(befanNumber);
}

//Найти сумму чисел в пределах от 1 до 100.

// предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

const a = +prompt('Num1');
const b = +prompt('Num2');

alert(`${a}+${b}=${a+b}`)


const user = {
    firstName:'test',
    lastName: 'Testovich',
    age: 27,
    isMale: true,
};

function sayHello(user){
    alert(`${user.firstName}, hello`);
}

