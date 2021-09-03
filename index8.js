'use strict';

/*const newsPaper = {
    title: 'Abracadabra',
    articles: ['Test1', 'Heading1', 'Heading2'],

    showArticles() {
        this.articles.forEach(function logItem (curreentArticle, index) {
            console.log(this);
            console.log(`${this.title} => ${index + 1}: ${curreentArticle}`);
        });
    },
};

newsPaper.showArticles();*/

function sum(a, b, ...rest) {
    console.log(rest);
    return a + b;
}

const summ = (x, y, ...rest) => (x + y + rest);
const a = summ(1, 2, 3, 4, 5, 6, 78, 9);
console.log(a);

const sumArrow = (...rest) => {
    let res = null;

    rest.forEarch((number) => {
        accumulator += number;
    });

    return accumulator;
}

const fact = (num, exp) => {
    if (exp <= 1) {
        return num;
    }
    
}