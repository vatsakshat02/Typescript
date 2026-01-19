"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//if we dont know the type of data in your variable you use union
var score = 33;
score = 55;
score = "55";
score = true;
var zeeku = { name: 'k', id: 334 };
zeeku = { username: 'h', id: 334 };
//also for clarity
function getID(id) {
    if (typeof id === "string") {
        id.toLowerCase(); //this is important cause without this you wont be able to use tolowercase property as it treats the id as number or string
    }
}
getID(3);
//to have multiple types in array
var data1 = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, '2', 4]; //thats how you make your array have multiple types
