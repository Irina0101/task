// 1) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);

console.log(array3);

// 2) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const array11 = [1, 2, 3];
console.log('array11: ',array11);

const reversed = array11.reverse();
console.log('reversed: ',reversed);

// 3) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const array12 = [1, 2, 3];
const totalArray12 = array12.push(4, 5, 6);

console.log(array12);
console.log(totalArray12);

// 4) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr = [1, 2, 3];

arr.unshift(4, 5, 6);
console.log(arr);

// 5) Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const arr0 = ['js', 'css', 'jq'];
const shifted = arr0.shift();

console.log('deleted: '+shifted);

// 6) Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const popped = arr0.pop();

console.log(popped);

// 7) 

const arrayB = [1, 2, 3, 4, 5, 6];

console.log(arrayB.slice(0,3));
console.log(arrayB.slice(3,5));

// 9)

const removed = arrayB.splice(1,2);

console.log(arrayB);

//11

const removed2 = array12.splice(3, 0, 'a','b','c');
console.log(array12);

// 13

const abc = [3, 4, 1, 2, 7];
abc.sort();
console.log(abc);

// 14

const test = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(test));