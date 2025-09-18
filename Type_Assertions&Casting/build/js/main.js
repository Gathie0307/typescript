"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = `world`;
// Asserions for the narrowing real time example
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat ');
// Be careful TS sees no problem - but a string os returned
let nextVal = addOrConcat(2, 2, 'concat ');
//Unknow you can't use unknow anywhere
//Fore Casting or Double Casting
//10 as string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
// This line will not work for tsc file in typeScript
const nextImg = document.getElementById('#img');
// throught errors when we try to access myImg tag
img.src;
myImg.src;
//# sourceMappingURL=main.js.map