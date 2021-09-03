'use strict'

function MyArray() {
    this.length = 0;
    

    this.push = function push(item) {
        this[this.length] = item;
        return ++this.length;
    }

    this.isMyArray = function isMyArray(arg) {
        this[this.value] = arg;
        if (arg = []){
            return true;
        }
    }

    this.pop = function pop(item) {
        this[this.length] = item;
        return --this.length;
    }

    this.unshift = function unshift() {
        const argLength = arguments.length;
        const arrLength = this.length;
        for  (let i = arrLength; i >= 0; i--) {
            this[i + argLength - 1] = this[i - 1]
        }
        for (let i = 0; i < argLength; i++) {
            this[i] = arguments[i]
        }
        return this.length;
    }
    
    this.shift = function shift() {
        const arrLength = this.length;
        const deleteObj = this[0];
        for (let i = 0; i < arrLength; i++) {
            this[i] = this[i + 1];
        }
        this.length -= 1;
        return deleteObj;
    }

    this.concat = function concat(...args) {
        let final = []
        args.forEach(arg => {
          final = [ ...final, ...arg ]
        })
        return final;
        }

    this.reverse = function reverse(input) {
        let arr = new Array;
        for(let i = input.length-1; i >= 0; i--) {
            arr.push(input[1]);
        }
        return arr;
    }   
    }
   
    const myArr = new MyArray();

