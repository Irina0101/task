const num1 = prompt('Enter the number') ;
const num2 = prompt('Enter the number') ;

const maxValueofTwo = function (num1, num2) {
    if (num1<num2){
        alert('Max number is: '+ num2);
    }
    else {
        alert('Max number is: '+ num1);
    }
}

maxValueofTwo(num1, num2) ;

const minValueofTwo = function (num1, num2) {
    if (num1<num2){
        alert('Min number is: '+ num1);
    }
    else {
        alert('Min number is: '+ num2);
    }
}

minValueofTwo(num1, num2) ;

const evenNumber = function (num1, num2) {
    let result = num1%2 ;
    if (result===0){
        alert('The number ' + num1 + ' is even');
    }
    else {
        alert('The number ' + num1 + ' is not even');
    }

    let result2 = num2%2 ;
    if (result2===
        0){
        alert('The number ' + num2 + ' is even');
    }
    else {
        alert('The number ' + num2 + ' is not even');
    }
}

evenNumber(num1, num2) ;