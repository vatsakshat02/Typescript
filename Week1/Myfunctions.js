"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//functions 
function addtTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper('akshat');
signUpUser('akshat', 'abc@gmaiil.com', false);
loginUser('a', 'a@a.com'); //it will not raise an issue as we have already provided the default value of isPaid
function subtractTwo(num) {
    return 'akshat'; //so this will give us an error
}
//how to assign type to return in the arrow functions
var getHello = function (s) {
    return "";
};
//map function
var heros = ['thor', 'ironman', 'superman'];
heros.map(function (hero) {
    return "my heros is ".concat(hero);
});
//errors 
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleErrors(errmsg) {
    throw new Error(errmsg);
}
