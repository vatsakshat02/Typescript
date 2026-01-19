//objects
const user = {
    name:'akshat',
    email:'abc@gmail.com',
    isActive: true
}

function createUser({name:string, isPaid:boolean}){

}

createUser({name:"akshat", isPaid:true})
createUser({name:"akshat", isPaid:true, email:'abc@gmail.com'}) //thsi will give error as there is no email parameter so to tackle this
let users = {name:akshat,isPaid:true,email:'abc@gmail.com'}
createUser(users); //as you can see this will not give an error

//what happens when we expect our return type as an object
function loggedUser():{}{ //{}menas we are expection our return type to be an object
    return {}
}
//type variable
//basically here we have created our own datatype and this helps us to use this more than once 
type User = {
    name:string;
    email:string;
    isActive:boolean
}
//here we are mentioning the parameter user should be of the type User
function CreateUser(user: User): User{
        return {name:'akshat',email:'abc@gmail.com',isActive:true}
}

CreateUser({name:"",email:"",isActive:true})

//so now we are gonna learn two new keywords readonly and optional so lets start with readonly.
//read only is the type of keyword used when you want someone not to modify the value or manipulate a variable
//optional is used when you want a parameter to be optional this means that if you pass an argument or not it doesnt matter

type Zeeku = {
        readonly _id: string,
        name:string,
        email:string,
        isActive:boolean,
        credcardDetails?:number //? shows optional 

}

let Z:Zeeku = {
    _id:'1234',
    name:'akshat',
    email:'abc@gmail.com',
    isActive:false
}
let s:Zeeku = {
    _id:'1234',
    name:'akshat',
    email:'abc@gmail.com',
    isActive:false,
    credcardDetails: 123456789
}
export{}