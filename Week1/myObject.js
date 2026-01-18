"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//objects
var user = {
    name: 'akshat',
    email: 'abc@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "akshat", isPaid: true });
createUser({ name: "akshat", isPaid: true, email: 'abc@gmail.com' }); //thsi will give error as there is no email parameter so to tackle this
var users = { name: akshat, isPaid: true, email: 'abc@gmail.com' };
createUser(users); //as you can see this will not give an error
//what happens when we expect our return type as an object
function loggedUser() {
    return {};
}
//here we are mentioning the parameter user should be of the type User
function CreateUser(user) {
    return { name: 'akshat', email: 'abc@gmail.com', isActive: true };
}
CreateUser({ name: "", email: "", isActive: true });
