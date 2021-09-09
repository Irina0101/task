'use strict'

//1) Вывод чисел от 25 до 0 (порядок уменьшения)

for (let i = 25;  i > 0; i--) {
    console.log(i);
};

console.log("second");

let j = 26;

while ( j > 0) {
    j--;
    console.log(j);
};

console.log("third");

let n = 26;
do {
    n--;
    console.log(n);
} while ( n>0 );

//2) Вывод чисел от 10 до 50, которые кратны 5

for (let i = 10; i<=50; i++) {
    if (i%5 === 0) {
    console.log(i);
    };
}


//3) Найти сумму чисел в пределах от 1 до 100.

let num1 = +prompt('Number from 1 to 100');
let num2 = +prompt('Number from 1 to 100');
let result = num1 + num2;

 while (result < 100);
console.log(result);

//4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

let result2;
do {
    result2 = +prompt('Solve:(2+2*2)');
   
} while (result2 !== 6);